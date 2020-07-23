var buttonMenu = document.querySelector('.menu-open');
var menuOpen = document.querySelector('.open-menu');
var menuClose = document.querySelector('.menu-close');

buttonMenu.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', displayBack);


function toggleMenu() {
  displayOff();
  menuClose.classList.remove('hidden');
  menuOpen.classList.remove('hidden');
}

function displayBack() {
  displayOff();
  buttonMenu.classList.remove('hidden');
}


function displayOff() {
  buttonMenu.classList.add('hidden');
  menuClose.classList.add('hidden');
  menuOpen.classList.add('hidden');
}
