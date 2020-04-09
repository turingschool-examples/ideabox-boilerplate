//querySelector
var hamburgerMenu = document.querySelector(".hamburger-menu");
var hamburgerMenuClose = document.querySelector(".hamburger-menu-close");
var filterStarred = document.querySelector(".filter-starred");

//event listeners
hamburgerMenu.addEventListener('click', showFilterStarred);
//hamburgerMenuClose.addEventListener('click', toggleFilterStarred);
//functions

function showFilterStarred() {
  //hide hamburgerMenu
  // AND show hamburgerMenuClose
  // ANd show filterStarred
  var image = hamburgerMenu.querySelector('img');
  image.src = "images/menu-close.svg";

  filterStarred.style.display = "block";
}
