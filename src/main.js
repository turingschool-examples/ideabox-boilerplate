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
var starActive = document.querySelector("#starActive");
var starInactive = document.querySelector("#starInactive");
var deleteActive = document.querySelector("#deleteActive");
var deleteInactive = document.querySelector("#deleteInactive");
var commentIcon = document.querySelector("#commentIcon");

//  Event Listeners:
// showStarred.addEventListener("click", showStarred);
// searchInput.addEventListener("keydown", filterIdeas);
// starInactive.addEventListener("mousedown", activateStar);
// starActive.addEventListener("mouseup", starIdea);
// deleteInactive.addEventListener("mousedown", activateDelete);
// deleteActive.addEventListener("mouseup", removeIdea);
// commentIcon.addEventListener("click", addComment);

//  Functions:
function showStarred() {
  // Hides instances where `isStarred = false`
}

function enableSaved(){
  if (titleInput.value.length>0 && bodyInput.value.length>0) {
    // enable the saved button (should default as disabled first [css])
  }
}

saveButton.addEventListener("click", function(e) {
  e.preventDefault();
  newIdea = new Idea(titleInput.value, bodyInput.value)
  if (!ideas.includes(newIdea)) {
    ideas.push(newIdea);
    newIdea.saveToStorage();
  } else {
      window.alert("You already had that idea!")
    }
  }
);


//change grey star to red star
function activateStar() {
  starInactive.hidden = true;
  starActive.hidden = false;
}

function activateDelete() {
  deleteInactive.hidden = true;
  deleteActive.hidden = false;
}


/*

- Search (filter) - takes form string and scans our instances for it (both title and body)
- Star icon - Sets the instance isStarred value to `true`/ changes icon
  *toggles value and icon upon conditions met*
- Delete icon - Changes icon on mousedown/
  removes item from array on mouse up/ displays fresh view

*/
