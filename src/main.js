var burgerButton = document.querySelector(".hamburger-img")
var body = document.querySelector(".purple-1")
var showIdeas = document.querySelector(".show-starred")
var ideas = document.querySelector(".ideas")
var menuItems = document.querySelector('.menu-items');
var hamburgerImg = document.querySelector('.hamburger-img')
var miniMenuXButton = document.querySelector('.mini-menu-x-button');
var miniMenuX = document.querySelector('.mini-menu-x');
var miniMenu = document.querySelector('.mini-menu')
// var miniMenuX = document.querySelector('.mini-menu-x');

body.addEventListener("click", buttonHandler)

function buttonHandler(event) {
  if(event.target === showIdeas){
    alert("You clicked me");
  } else if (event.target === burgerButton) {
    console.log(event.target);
    displayStarredIdeasMenu();
  } else if (event.target === miniMenuX) {
    hideStarredIdeasMenu();
  }
}

function displayStarredIdeasMenu() {
  menuItems.style.display = "flex";
  miniMenuXButton.style.display = 'flex';
  hamburgerImg.style.display = 'none';
  burgerButton.style.display = 'none';
}

function hideStarredIdeasMenu() {
  menuItems.style.display = 'none';
  hamburgerImg.style.display = 'flex';
  burgerButton.style.display = 'flex';
}
