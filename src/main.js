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
var cardSection = document.querySelectorAll(".cardSection");

var savedIdeas = [];

//  Event Listeners:
// showStarred.addEventListener("click", showStarred);
// searchInput.addEventListener("keydown", filterIdeas);
starInactive.addEventListener("click", activateStar);
starActive.addEventListener("click", removeStar);
deleteInactive.addEventListener("mousedown", activateDelete);
deleteActive.addEventListener("mouseup", removeIdea);
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

saveButton.addEventListener("click", function(event) {
  event.preventDefault();
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
//have card save in Local storage.
function activateStar() {
  togglePictures(starInactive, starActive)

}

function removeStar() {
  togglePictures(starActive, starInactive);
}

//
function activateDelete(event) {
  togglePictures(deleteInactive, deleteActive);
}



//delete desired card from screen and local storage
function removeIdea() {
  if (event.target.classList.contains("delete-active")) {
     event.target.closest(".idea-card").remove();
  }
}


function togglePictures(pic1, pic2) {
  pic1.hidden = true;
  pic2.hidden= false;
}

function displayCards(){
  cardSection.innerHTML = "";
  for(var i = 0; i < ideas.length; i++){
  cardSection= `
  <div class="idea-card">
    <div class="card-controls" id=${idea[i].id}>
      <img class="star-inactive" id="starInactive" src="assets/star.svg" alt="star">
      <img class="star-active" id="starActive" src="assets/star-active.svg" alt="active star" hidden>
      <img class="delete-inactive" id="deleteInactive" src="assets/delete.svg" alt="delete">
      <img class="delete-active" id="deleteActive" src="assets/delete-active.svg" alt="active delete" hidden>
    </div>
    <article class="idea-content">
      <h1 class="idea-title"><strong>${ideas[i].title}</strong></h1>
      <p class="idea-body">${ideas[i].body}</p>
    </article>
    <div class="comment-body">
      <img class="comment-icon" id="commentIcon" src="assets/comment.svg" alt="comment">
      <h2 class="comment" id="commentIcon">Comment</h2>
    </div>
  </div>`
  }
}


/*

- Search (filter) - takes form string and scans our instances for it (both title and body)
- Star icon - Sets the instance isStarred value to `true`/ changes icon
  *toggles value and icon upon conditions met*
- Delete icon - Changes icon on mousedown/
  removes item from array on mouse up/ displays fresh view

*/
