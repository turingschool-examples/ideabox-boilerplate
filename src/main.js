var burgerButton = document.querySelector(".hamburger-menu")
var body = document.querySelector(".purple-1")
var showIdeas = document.querySelector(".show-starred")
var ideas = document.querySelector(".ideas")
var menuItems = document.querySelector('.menu-items');
var hamburgerImg = document.querySelector('.hamburger-img')

burgerButton.addEventListener("click", displayStarredIdeas)
body.addEventListener("click", buttonHandler)

function buttonHandler(event) {
  if(event.target === showIdeas){
    alert("HEY");
  } else if (event.target === burgerButton) {
    displayStarredIdeas();
  }
}

function displayStarredIdeas() {
  ideas.classList.add("mini-show-starred");
  menuItems.style.display = "flex";
  hamburgerImg.style.display = 'none';
  burgerButton.style.display = 'none';
}
