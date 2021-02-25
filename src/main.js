//  Global Variables:
var newIdea;
var ideas = localStorage.getItem("ideas") ? JSON.parse(localStorage.getItem("ideas")) : [];
var newComment;
var comments = localStorage.getItem("comments") ? JSON.parse(localStorage.getItem("comments")) : [];

//  Query Selectors:
var showStarred = document.querySelector("#showStarred");
var titleInput = document.querySelector("#titleInput");
var bodyInput = document.querySelector("#bodyInput");
var saveButton = document.querySelector("#saveButton");
var searchInput = document.querySelector("#searchInput");
var starIcon = document.querySelector("#starIcon");
var activeStarIcon = document.querySelector("#activateStarIcon");
var deleteIcon = document.querySelector("#deleteIcon");
var activeDeleteIcon = document.querySelector("#activeDeleteIcon");
var commentIcon = document.querySelector("#commentIcon");

//  Event Listeners:
showStarred.addEventListener("click", showStarred);
saveButton.addEventListener("click", saveIdea);
searchInput.addEventListener("keydown", filterIdeas);
starIcon.addEventListener("mousedown", activateStar);
activeStarIcon.addEventListener("mouseup", starIdea);
deleteIcon.addEventListener("mousedown", activateDelete);
deleteIcon.addEventListener("mouseup", removeIdea);
commentIcon.addEventListener("click", addComment);

//  Functions:
function showStarred() {
  // Hides instances where `isStarred = false`
}

function enableSaved(){
  if (titleInput.value.length>0 && bodyInput.value.length>0) {
    // enable the saved button (should default as disabled first [css])
  }

function saveIdea() {
  if (!ideas.includes(newIdea)) {
    ideas.push(newIdea);
  //creates new instance of idea class
    saveToStorage();
  } else {
    window.alert("You already had that idea!")
  }
}

//change grey star to red star
function activateStar() {
  starIcon.hidden = true;
  activeStarIcon.hidden = false;
}

function activateDelete() {
  deleteIcon.hidden = true;
  activeDeleteIcon.hidden = false;
}


/*

- Search (filter) - takes form string and scans our instances for it (both title and body)
- Star icon - Sets the instance isStarred value to `true`/ changes icon
  *toggles value and icon upon conditions met*
- Delete icon - Changes icon on mousedown/
  removes item from array on mouse up/ displays fresh view

*/
