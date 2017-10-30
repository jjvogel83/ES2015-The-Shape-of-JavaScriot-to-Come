//Challenge 1 (Refactoring to let)
Challenge 1 (Refactoring to let)

load-profiles.js
function loadProfiles(userNames){
  let message = "Loading " + userNames.length + " user(s)";

  _displayFlash(message);

  _fetchProfiles(userNames, function(data){
    let profiles = data.profiles;
    _addToPage(profiles);
  });
}

Challenge 2 (Vars and the for Loop)
get-users-avatars.js
function getUsersAvatars(userNames, cb){
  let url = "/userAvatars/";
  
  for(let index in userNames){
    _fetchAvatar(url + userNames[index], function(avatarUrl){
      _displayAvatar(userNames[index], avatarUrl);
    });
  }
}

Challenge 3 (Refactoring Magic Number)
validate-message.js
function validateMessage(author, message){
  const MAX_MESSAGE_LENGTH = 140;
  if(message.length > MAX_MESSAGE_LENGTH){
    message = _trimMessage(message);
  }

  _postMessage(author, message);
}




Challenge 4 (Fix const Error)
load-profiles.js
function loadProfiles(userNames){

  const MAX_USERS = 15;

  if(userNames.length > MAX_USERS){
    return false;
  }
  
  for(let i=0; i < userNames.length; i++){
    _fetchProfile(userNames[i], function(data){
        _addToSidebar(userNames[i], data);
    });
  }
}


Challenge 5 (Fixing Undefined Arguments)
display-topics-preview.js
function displayTopicsPreview(topics = []){
  let message = "There are currently " + topics.length;
  _displayPreviewMessage(topics, message);
}


Challenge 6 (Basic Named Parameters)
set-page-thread.js
function setPageThread(name, {popular, expires, activeClass}){
  let nameElement = _buildNameElement(name);
  let settings = _parseSettings(popular, expires, activeClass);

  _updateThreadElement(nameElement, settings);
}









Challenge 7 (Replacing Object With Named Parameters)
load-profiles.js
function loadProfiles(userNames = [],  {profilesClass, reverseSort} = {}) {
  profilesClass = profilesClass || ".user-profile";
  reverseSort = reverseSort   || false;

  if (reverseSort) {
    userNames = _reverse(userNames);
  }

  _loadProfilesToSideBar(userNames, profilesClass);
}


Challenge 8 (Refactoring to Rest Params)
append-user-names.js
function appendUserNames(...userNames){

  let userNameDivs  = "";
  let USER_CLASS    = ".forum-user";

  for(let i in userNames){
    let name = userNames[i];
    if(name !== "admin"){
      userNameDivs += "<div class='" + USER_CLASS + "'>" + name + "</div>";
    }
  }

  return userNameDivs;
}


Challenge 9 (The Spread Operator)
get-active-users.js
getActiveUsers(15, function(data){   
  let userNameDivs = appendUserNames(...data.userNames);
  appendToSidebar(".side-bar", userNameDivs);
});

function getActiveUsers(topicId, cb){
  _fetchTopicInfo("/topics/" + id, function(data){
    cb(data);
  });
}


Challenge 10 (Arrow Functions in Action)
active-users-component.js
function ActiveUsersComponent(target, topicId){
  this.targetElement = target;
  this.topicId       = topicId;
}

ActiveUsersComponent.prototype.render = function(){
  getActiveUsers(this.topicId, (data) =>{
    let userNameDivs = appendUserNames(...data.userNames);
    appendToSidebar(this.targetElement, userNameDivs);
  });
};
// Create new component below
let component = new ActiveUsersComponent(".active-users", 17);
component.render();                                   


Challenge 11 (Building Objects With the New Syntax)
add-user.js
let name = "Brook";
let totalReplies = 249;
let avatar = "/users/avatars/brook-user-1.jpg";

let user = {name, totalReplies, avatar};

addUserToSidebar(user);

Challenge 12 (Object Initializer Shorthand)
build-topic-element.js
function buildTopicElement(topic){
  let title = "<h2>" + topic.title + "</h2>";
  let author = "<small>" + topic.author + "</small>";
  let body = "<p>" + topic.body + "</p>";

  return { title, author, body};
}


Challenge 13 (Object Restructuring)
add-topic.js
let { fullName } = buildUser("Tyler", "Williams");

let title  = "The New Object Syntax - Good or Bad?";
let author = fullName;
let body = "What do you all think of the new syntax? I like it!";

let topic = { title, author, body };

let element = buildTopicElement(topic);

addTopicToPage(element);


Challenge 14 (Method Initializer Shortland)

build-metadata.js
function buildMetadata(object){
  let id = parseInt(object.id);
  let lastUpdatedAt = object.updatedAt || object.createdAt;
  let hashCode = _buildHashCode(object);
  
  const SECURE_HASH_CODE_LENGTH = 32;
  
  return { 
    id, 
    lastUpdatedAt, 
    hashCode,
    isSecureHash() {
      return hashCode >= SECURE_HASH_CODE_LENGTH;
    }
  };
}


Challenge 15 (String Interpolation)
total-replies.js
let replyCount = 21;
let message = `This topic has a total of ${replyCount} replies`;



Challenge 15 (String Templates)
build-topic-element.js
function buildTopicElement(topic){
  let title = `<h2>${topic.title}</h2>`;
  let author = `<small>${topic.author}</small>`;
  let body = `<p>${topic.body}</p>`;

  return { title, author, body };
}


Challenge 16 (Destructuring and Rest Params)
add-active-users.js
let [ first, ...remainingUsers ] = ["Sam", "Tyler", "Brook"];
addActiveUsers(first, remainingUsers);



Challenge 17 (The for...of Loop)
notifications.js
let topicId = currentTopic();
let activeUsers = ["Sam", "Tyler", "Brook"];

for(let users of activeUsers ){
  notifyTopicReply(topicId, users );
}


Challenge 18 (Adding Entries to a Map Object)
total-replies.js
let author1 = { name: "Sam" };
let author2 = { name: "Tyler" };

let totalReplies = new Map();
totalReplies.set(author1, 42);
totalReplies.set(author2, 15);
console.log( `Total Replies: ${totalReplies.get(author1)}` );
console.log( `Total Replies: ${totalReplies.get(author2)}` );





Challenge 19 (Iterating Maps With for...of)
listing-entries.js
let recentPosts = new Map();

recentPosts.set( "Sam", "ES2015" );
recentPosts.set( "Tyler", "CoffeeScript" );
recentPosts.set( "Brook",  "TypeScript" );

for(let [user, postTitle] of recentPosts){
  console.log(`${user} = ${postTitle}`);
}


Challenge 20 (Using Sets)
entries.js
let tags = new Set() ;

tags.add("JavaScript");
tags.add("Programming");
tags.add("Web");

console.log(`Total items ${tags.size}`);


Challenge 21 (Sets and for...of)
tags.js
let tags = new Set();

tags.add("JavaScript");
tags.add("Programming");
tags.add("Web");

for(let tag of tags){
  console.log(`Tag: ${tag}`);
}


Challenge 21 (Sets and Destructuring)
tags.js
let tags = new Set();

tags.add("JavaScript");
tags.add("Programming");
tags.add("Web");


let [first] = tags;
console.log( `First tag: ${first}` );

Challenge 22 (Implementing a Method on a Class)
topic-reply-counter.js
class TopicReplyCounter {

  constructor(topicId, replies){
    this.topicId = topicId;
    this.replies = replies || [];
    this.replyCount = this.replies.length;
  }
  
  addReply(reply){
    this.replies.push(reply);
    this.replyCount = this.totalReplies().length;
  }
  
  totalReplies(){
    return this.replies.filter( reply => !reply.isAbuse );
  }
  
  totalCount(){
    return this.replyCount;
  }
}


Challenge 23 (From Function to Class)
tag-manager-class.js
class TagManager {
  constructor(topicId){
    this.topicId = topicId;
  }
  
  addTag(tagName){
    API.createTag(tagName, this.topicId);
  }
  
  removeTag(tagName){
    API.deleteTag(tagName, this.topicId);
  }
}

Challenge 24 (Subclassing)
sidebar-advertisement-class.js
class SidebarAdvertisement extends Advertisement {
  constructor (title, link) {
   super(title, link);
}
  _linkText(){
    return "Sign up now!";
  }
 } 


Challenge 25 (Importing Modules)
app.js
import isTopicValid from "./is-topic-valid";

let topic = {
  title: "ES2015",
  author: { name: "Sam", isBlocked: false }
};

isTopicValid(topic);

Challenge 26 (Named Exports)
validators.js
function isTopicValid(topic){
  const MAX_TITLE_LENGTH = 20;

  let isValid = !(topic.title.length > MAX_TITLE_LENGTH || topic.author.isBlocked);
  return isValid;
}

 function isEmailAuthorized(email){
  const EMAIL_DOMAIN = "@codeschool.com";
  return email.indexOf(EMAIL_DOMAIN) > 0;
}

export { isTopicValid, isEmailAuthorized };

Challenge 27 (Importing Named Exports)
app.js
import {isTopicValid, isEmailAuthorized} from './validators';

let author = { name: "Sam", email: "sam@codeschool.com", isBlocked: false };
let topic = {
  title: "ES2015",
  author
};

isTopicValid(topic);
isEmailAuthorized(author.email);

Challenge 27 (Exporting Constants)
validation-constants.js
const MAX_TITLE_LENGTH = 20;
const EMAIL_DOMAIN = "@codeschool.com";

export {MAX_TITLE_LENGTH, EMAIL_DOMAIN};

Challenge 28 (Loading Classes From Modules)
app.js
import TagManager from "./tag-manager-class";

let tagManager = new TagManager(20);
tagManager.addTag("JavaScript");

Challenge 29 (Export Subclasses)
sidebar-advertisement-class.js
import { Advertisement } from "./advertisement-class";

class SidebarAdvertisement extends Advertisement {
  constructor(title, link){
    super(title, link);
  }
  
  _linkText(){
    return "Sign up now!";
  }
}

export {SidebarAdvertisement};


Challenge 30 (Writing Promises)
get-replies.js
export default function getReplies(topicId){
  return new Promise(function(resolve, reject){
    _getRepliesForTopic(topicId, function(data){
      let replies = data.replies;
      if(replies){
        resolve(replies);
      }else{
        let error = new Error("An error occurred");
        reject(error);
      }
    });
  });
}

Challenge 31 (Catching Errors From Promises)
filter-replies.js
getReplies(1)
.then(function(replies){
  return replies.filter( reply => !reply.isAbuse );
})
.then(function(filteredReplies){
  console.log( filteredReplies );
})
  .catch(function(error) {
    console.log("Error: ", error);
});





Challenge 32 (Writing a Custom Iterator Object)
user.js
let user = {
  name: "sam", totalReplies: 17, isBlocked: false
};

user[Symbol.iterator] = function(){

  let properties = Object.keys(this);
  let count = 0;
  let isDone = false;

  let next = () => {
    if(count >= properties.length){
      isDone = true;
    }

    let value = this[properties[count++]];

    return  { done: isDone, value };
  };
  return { next };
};


Challenge 32 (Generators and for...of)
listing-topics.js
function *topicList(){
  yield "ES2015";
  yield "Semi-colons: good or bad?";
  yield "TypeScript";
}

for(let topic of topicList()){
  console.log( topic );
}


Challenge 33 (Refactoring to Generator Functions)


user.js
let user = {
  name: "sam", totalReplies: 17, isBlocked: false
};

user[Symbol.iterator] = function * (){

  let properties = Object.keys(this);
  let count = 0;
  let isDone = false;

  for(let p of properties){
   yield this[p];
  }
};

for(let p of user){
  console.log( p );
}



