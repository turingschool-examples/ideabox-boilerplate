var menuHamburgerIcon = document.querySelector(".menu-icon");
var menu = document.querySelector(".menu")

menuHamburgerIcon.addEventListener('click', expandMenu);

function expandMenu() {
  if (menu.classList.contains("menu-expanded")) {
    menu.classList.remove("menu-expanded");
    menuHamburgerIcon.src = 'Assets/menu.svg';
  } else {
    menu.classList.add("menu-expanded");
    menuHamburgerIcon.src = 'Assets/delete.svg';
  }
}
