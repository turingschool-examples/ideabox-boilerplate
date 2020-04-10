var bodyElement = document.querySelector("body");
var menuElement = document.querySelector(".menu");
var dropDownMenuElement = document.querySelector(".drop-down-menu")
var hamburgerButton = document.querySelector(".menu-navigate");
var filterStarredIdeasElement = document.querySelector(".header-text-filter");
var showStarredButton = document.querySelector(".show-starred");
var menuCloseButton = document.querySelector(".menu-close");
var ideas = document.querySelector(".ideas");
bodyElement.addEventListener("click", dropNavMenu);

function dropNavMenu(event) {
  console.log(event);
  console.log(event.target);
  var isBurger = (hamburgerButton.outerHTML === `<img class="menu-navigate" src="assets/menu.svg" alt="menu">`)
  if(event.target.classList.contains("menu-navigate")) {
    toggleHiddenMenu();
    if(isBurger) {
      hamburgerButton.src = "assets/menu-close.svg";
    } else {
      hamburgerButton.src = "assets/menu.svg"
    }
  }
}
function toggleHiddenMenu() {
  filterStarredIdeasElement.classList.toggle("hidden-small");
  showStarredButton.classList.toggle("hidden-small");
  dropDownMenuElement.classList.toggle("hidden");
  ideas.classList.toggle("filter");
}

