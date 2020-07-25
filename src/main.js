var menuIcon = document.querySelector(".menu-icon");
var menuCloseIcon = document.querySelector(".menu-close-icon");
var dropDownMenu = document.querySelector(".dropdown-menu");
var saveButton = document.querySelector('.save-button');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var ideaFormSection = document.querySelector('.idea-form');

function toggleHidden() {
  menuIcon.classList.toggle("hidden");
  menuCloseIcon.classList.toggle("hidden");
  dropDownMenu.classList.toggle("hidden");
}


function formValidation() {
  if (titleInput.value !== '' && bodyInput.value !== '') {


    clearForm();
    // we want this function to be run last, as we still want access to the inputs before we clear them
  }
}

function clearForm() {
  titleInput.value = '';
  bodyInput.value = '';
}
