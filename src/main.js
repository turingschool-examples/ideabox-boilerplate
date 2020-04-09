var menuButton = document.querySelector('.hamburger-menu');
var mobileMenu = document.querySelector('.menu');
var mobileMenuBody = document.querySelector('.menu-body-text');

menuButton.addEventListener('click', showMobileMenu);

function showMobileMenu() {
  mobileMenu.classList.add('purple-4');
  mobileMenuBody.classList.add('menu-body-mobile')
}
