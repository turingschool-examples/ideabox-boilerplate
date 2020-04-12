var menuButton = document.querySelector('.hamburger-menu');
var menuCloseButton = document.querySelector('.menu-close');
var mobileMenu = document.querySelector('.menu');
var mobileMenuBody = document.querySelector('.menu-body-text');
var saveIdeaButton = document.querySelector('.form-button');
var userNewTitle = document.querySelector('.input-title');
var userNewBody = document.querySelector('.input-body');
var userForm = document.querySelector('.form');

menuButton.addEventListener('click', showMobileMenu);
saveIdeaButton.addEventListener('click', saveIdea);

var savedIdeas = [];

function showMobileMenu() {
  mobileMenu.classList.add('purple-4');
  mobileMenuBody.classList.add('menu-body-mobile')
  menuButton.classList.add('hide');
  menuCloseButton.classList.remove('hide');
}

function saveIdea(event) {
  var currentIdea = new Idea(userNewTitle.value, userNewBody.value);
  savedIdeas.push(currentIdea);
  console.log(savedIdeas);
  userNewTitle.value = " ";
  userNewBody.value = " ";
  event.preventDefault();

  //new idea card w/ above info should appear in idea list
  //input fields should clear out
  //button should be disabled if both fields not filled out
  //page should NOT reload when button is clicked
}
