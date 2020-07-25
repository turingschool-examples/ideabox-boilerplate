var menuIcon = document.querySelector(".menu-icon");
var menuCloseIcon = document.querySelector(".menu-close-icon");
var dropDownMenu = document.querySelector(".dropdown-menu");
var saveButton = document.querySelector('.save-button');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var ideaFormSection = document.querySelector('.idea-form');
var cardTitle = document.querySelector('.card-title');
var bodyText = document.querySelector('.body-text');

function toggleHidden() {
  menuIcon.classList.toggle("hidden");
  menuCloseIcon.classList.toggle("hidden");
  dropDownMenu.classList.toggle("hidden");
}

saveButton.addEventListener('click', formValidation);

// function createCard() {
//
// }


function addText() {
  cardTitle.innerText = titleInput.value;
  bodyText.innerText = bodyInput.value;
}


function formValidation() {
  if (titleInput.value !== '' && bodyInput.value !== '') {
    addText();
  }
}
