var menuButton = document.querySelector('.hamburger-menu');
var menuCloseButton = document.querySelector('.menu-close');
var mobileMenu = document.querySelector('.menu');
var mobileMenuBody = document.querySelector('.menu-body-text');
var saveIdeaButton = document.querySelector('.form-button');
var userNewTitle = document.querySelector('.input-title');
var userNewBody = document.querySelector('.input-body');
var userForm = document.querySelector('.form');
var ideaGallery = document.querySelector('.card-grid');

menuButton.addEventListener('click', showMobileMenu);
saveIdeaButton.addEventListener('click', saveIdea);
menuCloseButton.addEventListener('click', closeMenu);

var savedIdeas = [];

function showMobileMenu() {
  mobileMenu.classList.add('purple-4');
  mobileMenuBody.classList.add('menu-body-mobile')
  menuButton.classList.add('hide');
  menuCloseButton.classList.remove('hide');
}

function closeMenu() {
  mobileMenu.classList.remove('purple-4');
  mobileMenuBody.classList.remove('menu-body-mobile')
  menuButton.classList.remove('hide');
  menuCloseButton.classList.add('hide');
}

function saveIdea(event) {
  var currentIdea = new Idea(userNewTitle.value, userNewBody.value);
  savedIdeas.push(currentIdea);
  userNewTitle.value = " ";
  userNewBody.value = " ";
  event.preventDefault();

  showUsersIdeaCard();
  //button should be disabled if both fields not filled out
}

function showUsersIdeaCard() {
  if(savedIdeas.length) {
    ideaGallery.innerHTML = "";
    for(var i=0; i < savedIdeas.length; i++) {
      var ideaCardTemplate =
      `<section class="box">
      <section class="card-top">
      <input type="image" src="assets/star-active.svg" name="star-active" class="star-active" id="star-active" />
      <input type="image" src="assets/delete.svg" name="delete" class="delete" id="delete" align="right"/>
      </section>
      <section class="card-body">
      <p class= "card-header">${savedIdeas[i].title}</p>
      <p class= "card-text">${savedIdeas[i].body}</p>
      </section>
      <section class="card-bottom">
      <input type="image" src="assets/comment.svg" name="comment" class="comment" id="comment" align="left"/>
      <p class= "comment-text">Comment</p>
      </section>
      </section>`;
      ideaGallery.insertAdjacentHTML('afterbegin', ideaCardTemplate);
    }
  }
}
