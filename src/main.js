var ideaListArray = [];

var menuIcon = document.querySelector(".menu-icon");
var overlay = document.querySelector(".overlay");
var saveButton = document.querySelector(".save-button");
var form = document.querySelector('.idea-form');
var titleInput = document.querySelector("#title-input");
var bodyInput = document.querySelector("#body-input");


menuIcon.addEventListener('click', expandMenu);
saveButton.addEventListener('click', makeIdeaCard);
form.addEventListener('keyup', checkInputs);

function checkInputs(e) {
  if(!titleInput.value || !bodyInput.value) {
    saveButton.setAttribute('disabled', true)
  } else {
    saveButton.removeAttribute('disabled')
  }
}


function expandMenu() {
  var menu = document.querySelector(".menu");
  if (menu.classList.contains("menu-expanded")) {
    overlay.classList.add('hidden');
    menu.classList.remove("menu-expanded");
    menuIcon.src = 'Assets/menu.svg';
  } else {
    overlay.classList.remove('hidden');
    menu.classList.add("menu-expanded");
    menuIcon.src = 'Assets/delete.svg';
  }
}

function makeIdeaCard(e) {
  e.preventDefault();
  var currentIdeaCard = new Idea(titleInput.value, bodyInput.value)
  ideaListArray.push(currentIdeaCard);
  form.reset();
  // titleInput.value = '';
  // bodyInput.value = '';
  checkInputs(e)
  displayIdea(currentIdeaCard);
}

function displayIdea(idea) {
  var ideaCardContainer = document.querySelector(".idea-cards");
  var newCardTemplate = `<article class="user-cards">
      <header class="header-card">
        <img class="comment-card-pic" src="Assets/star.svg"/>
        <img class="comment-card-pic" src="Assets/delete.svg"/>
      </header>
      <h2 class="title-display">${idea.title}</h2>
      <p class="body-display">${idea.body}</p>
      <footer class="purple-3 ">
        <img  class="comment-card-pic" src="Assets/comment.svg"/>
        <p class="comment">Comment</p>
      </footer>
    </article>`;
  ideaCardContainer.insertAdjacentHTML("beforeend", newCardTemplate);
}
