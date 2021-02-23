//Query Selectors
var title = document.querySelector(".title-box");
var textBox = document.querySelector(".text-box");
var submitButton = document.querySelector(".save-button");


// Event Listeners
submitButton.addEventListener("submit", generateNewIdea);



// Global variables

var newIdea = [];


// Event handlers

// function getTitleText() {

// }

function generateNewIdea(event) {
  event.preventDefault()

  newIdea = new Idea(title.value, textBox.value);
}