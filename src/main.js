//query qelectors
var title = document.querySelector(".title-box");
var inputText = document.querySelector(".text-box");
var formInformation = document.querySelector("form");
var renderIdeaBox = document.querySelector("#populatedIdea");
var saveButton = document.querySelector('#saveButton');

// Event Listeners
formInformation.addEventListener("submit", submitNewIdea);
window.addEventListener("load", loadWindow);
title.addEventListener("input", enableButton);
inputText.addEventListener("input", enableButton);

// global variables
var newIdea = [];

// functions below
function submitNewIdea(event) {
  event.preventDefault();
  createIdeaList();
  updateIdeaList();
  renderIdea();
  clearTextBoxes();
  disableButton();
  // formInputValidation();

  //single responsibility function...
}

function createIdeaList() {
  newIdea = new Idea(title.value, inputText.value);
}

function updateIdeaList() {
  ideaList.unshift(newIdea);
}

function renderIdea() {
  if (title.value && inputText.value) {
    var createList = "";
    renderIdeaBox.innerHTML = ""
    for (var i = 0; i < ideaList.length; i++){
    createList += `<div class="idea-boxes">
      <div class="idea-box-header">
        <img class="star-active-icon icon" src="./assets/star-active.svg"/>
        <img class="delete-icon icon" src="./assets/delete.svg"/>
      </div>
      <div class="comment-information">
        <p class="comment-title">${ideaList[i].title}</p>
        <p class="comment-text">${ideaList[i].text}</p>
      </div>
      <div class="comment-footer">
        <img class="comment-icon icon" src="./assets/comment.svg"/>
        <p class="comment-class">Comment</p>
      </div>
      </div>`
    }
    renderIdeaBox.innerHTML = createList
  }
}

function clearTextBoxes() {
  title.value = ""
  inputText.value = ""
}

function loadWindow(event) {
  event.preventDefault();
  disableButton();
  // disable button on load 
}

function disableButton() {
  saveButton.disabled = true;
}

function enableButton(event) {
  event.preventDefault();

  var monitorTitleInput = title.value;
  var monitorTextBoxInput = inputText.value;

  if (monitorTitleInput.length !== 0 && monitorTextBoxInput.length !== 0) {
    saveButton.disabled = false
  }
  if (monitorTitleInput.length === 0 || monitorTextBoxInput.length === 0) {
    saveButton.disabled = true
  }
}