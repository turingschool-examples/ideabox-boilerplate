var ideaGallery = document.querySelector('.card-grid');
var menuButton = document.querySelector('.hamburger-menu');
var menuCloseButton = document.querySelector('.menu-close');
var mobileMenu = document.querySelector('.menu');
var mobileMenuBody = document.querySelector('.menu-body-text');
var saveIdeaButton = document.querySelector('.form-button');
var userForm = document.querySelector('.form');
var userNewBody = document.querySelector('.input-body');
var userNewTitle = document.querySelector('.input-title');

// window.onload = retrieveMadeIdeaCards;
menuButton.addEventListener('click', showMobileMenu);
menuCloseButton.addEventListener('click', closeMenu);
saveIdeaButton.addEventListener('click', saveIdea);
userNewTitle.addEventListener('keypress', verifyForm);
userNewBody.addEventListener('keypress', verifyForm);
userNewTitle.addEventListener('keyup', verifyForm);
userNewBody.addEventListener('keyup', verifyForm);



var savedIdeas = [];

function showMobileMenu() {
  mobileMenu.classList.add('purple-4');
  mobileMenuBody.classList.add('menu-body-mobile');
  menuButton.classList.add('hide');
  menuCloseButton.classList.remove('hide');
}

function closeMenu() {
  mobileMenu.classList.remove('purple-4');
  mobileMenuBody.classList.remove('menu-body-mobile');
  menuButton.classList.remove('hide');
  menuCloseButton.classList.add('hide');
}

function saveIdea(event) {
  event.preventDefault();
  createNewIdea();
  clearFields();
  showUsersIdeaCard();
  verifyForm();
}

function verifyForm() {
  if (userNewTitle.value && userNewBody.value) {
    saveIdeaButton.disabled = false;
  }
}

function createNewIdea() {
  var currentIdea = new Idea(userNewTitle.value, userNewBody.value);
  savedIdeas.push(currentIdea);
  // saveIdeaToStorage();
}

// function saveIdeaToStorage() {
//   localStorage.setItem('ideas', JSON.stringify(savedIdeas));
// }
//
// function retrieveMadeIdeaCards() {
//   savedIdeas = JSON.parse(localStorage.getItem('ideas')) || [];
//
//   showUsersIdeaCard();
// }

function clearFields() {
  userNewTitle.value = "";
  userNewBody.value = "";
}

function showUsersIdeaCard() {
  if (savedIdeas.length) {
    ideaGallery.innerHTML = "";
    for (var i=0; i < savedIdeas.length; i++) {
      var ideaCardTemplate =
      `<section class="box id=${savedIdeas[i].id}">
      <section class="card-top">
      <input type="image" src="assets/star.svg" name="star-inactive" class="star-inactive" id="star-inactive" />
      <input type="image" src="assets/star-active.svg" name="star-active" class="star-active hide" id="star-active" />
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
      deleteIdeaCard();

      var favoriteButton = document.querySelector('.star-active');
      var unfavoriteButton = document.querySelector('.star-inactive');

      favoriteButton.addEventListener('click', favoriteStar);
      unfavoriteButton.addEventListener('click', unfavoriteStar);

      favoriteStar();
      unfavoriteStar();

      function favoriteStar() {
        unfavoriteButton.classList.add('hide');
        favoriteButton.classList.remove('hide');
      }

      function unfavoriteStar() {
        unfavoriteButton.classList.remove('hide');
        favoriteButton.classList.add('hide');
      }
    }
  }
}



function deleteIdeaCard() {
  event.preventDefault();
  var deleteButton = document.querySelector('.delete');
  var createdIdeaCard = document.querySelector('.box');
  for(var i=0; i < savedIdeas.length; i++) {
    deleteButton.addEventListener('click', event => {
      createdIdeaCard.remove('id');
    });
  }
}
