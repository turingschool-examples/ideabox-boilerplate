//query qelectors
var title = document.querySelector(".title-box");
var textBox = document.querySelector(".text-box");
var formInformation = document.querySelector("form");

// Event Listeners
formInformation.addEventListener("submit", submitNewIdea);

// global variables
var newIdea = [];

// functions below
function submitNewIdea(event) {
  event.preventDefault();
  createIdeaList();
  updateIdeaList();
  //single responsibility function...
}

function createIdeaList() {
  newIdea = new Idea(title.value, textBox.value);
}

function updateIdeaList() {
  ideaList.unshift(newIdea);
}