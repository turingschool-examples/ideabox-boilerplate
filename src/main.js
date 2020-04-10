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
