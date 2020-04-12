var menuIcon = document.querySelector(".menu-icon");
var menu = document.querySelector(".menu");
var overlay = document.querySelector(".overlay");

menuIcon.addEventListener('click', expandMenu);

function expandMenu() {
  if (menu.classList.contains("menu-expanded")) {
    overlay.classList.add('hidden');
    menu.classList.remove("menu-expanded");
    menuIcon.src = 'Assets/menu.svg';
    menu.style.removeProperty('z-index');
  } else {
    menu.style.zIndex = '11';
    overlay.classList.remove('hidden');
    menu.classList.add("menu-expanded");
    menuIcon.src = 'Assets/delete.svg';
  }
}
