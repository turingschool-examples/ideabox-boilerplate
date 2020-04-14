var ideaListArray = [];

var menuIcon = document.querySelector(".menu-icon");
var overlay = document.querySelector(".overlay");
var saveButton = document.querySelector(".save-button");
var form = document.querySelector('.idea-form');
var titleInput = document.querySelector("#title-input");
var bodyInput = document.querySelector("#body-input");
var ideaCardsContainer = document.querySelector(".idea-cards");

menuIcon.addEventListener('click', expandMenu);
saveButton.addEventListener('click', makeIdeaCard);
form.addEventListener('keyup', checkInputs);
ideaCardsContainer.addEventListener('click', ideaCardsHandler);

function checkInputs() {
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
  var currentIdeaCard = new Idea(titleInput.value, bodyInput.value);
  ideaListArray.push(currentIdeaCard);
  form.reset();
  checkInputs();
  displayIdea(currentIdeaCard);
}

function displayIdea(idea) {
  var starSrc;
  if (idea.starred) {
    starSrc = 'star-active'
  } else {
    starSrc = 'star'
  }
  var newCardTemplate = `<article class="user-cards" data-id=${idea.id}>
      <header class="header-card">
        <img class="comment-card-pic star-icon" src="Assets/${starSrc}.svg"/>
        <img class="delete-icon comment-card-pic" src="Assets/delete.svg"/>
      </header>
      <h2 class="title-display">${idea.title}</h2>
      <p class="body-display">${idea.body}</p>
      <footer class="purple-3 ">
        <img  class="comment-card-pic" src="Assets/comment.svg"/>
        <p class="comment">Comment</p>
      </footer>
    </article>`;
  ideaCardsContainer.insertAdjacentHTML("beforeend", newCardTemplate);
}

function ideaCardsHandler(e) {
  if (e.target.classList.contains('delete-icon')) {
    var targetId = e.target.closest('.user-cards').dataset.id;
    deleteIdea(targetId);
    displayAllIdeas();
  }
  if (e.target.classList.contains('star-icon')) {
    var targetId = e.target.closest('.user-cards').dataset.id;
    var targetIdea = findIdea(targetId);
    targetIdea.toggleStarred();
    displayAllIdeas();
  }
}

function findIdea(id) {
  return ideaListArray.find(idea => idea.id == id);
}

function displayAllIdeas() {
  ideaCardsContainer.innerHTML = '';
  for (var i = 0; i < ideaListArray.length; i++) {
    displayIdea(ideaListArray[i]);
  }
}

function deleteIdea(id) {
  var newIdeaList = [];
  for (var i = 0; i < ideaListArray.length; i++) {
    if(ideaListArray[i].id != id) {
      newIdeaList.push(ideaListArray[i]);
    }
  }
  ideaListArray = newIdeaList;
}
