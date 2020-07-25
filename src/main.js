var buttonMenu = document.querySelector('.menu-open');
var menuOpen = document.querySelector('.open-menu');
var menuClose = document.querySelector('.menu-close');
var shadow = document.querySelector('.ideas');

buttonMenu.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', displayBack);


function toggleMenu() {
  displayOff();
  menuClose.classList.remove('hidden');
  menuOpen.classList.remove('hidden');
  shadow.classList.add('shadow');
}

function displayBack() {
  displayOff();
  buttonMenu.classList.remove('hidden');
  shadow.classList.remove('shadow');
}

function displayOff() {
  buttonMenu.classList.add('hidden');
  menuClose.classList.add('hidden');
  menuOpen.classList.add('hidden');
}
