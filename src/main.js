var bodyElement = document.querySelector("body");
var menuElement = document.querySelector(".menu");
var dropDownMenuElement = document.querySelector(".drop-down-menu");
var hamburgerButton = document.querySelector(".menu-navigate");
var filterStarredIdeasElement = document.querySelector(".header-text-filter");
var showStarredButton = document.querySelector(".show-starred");
var menuCloseButton = document.querySelector(".menu-close");
var ideas = document.querySelector(".ideas");
var form = document.querySelector(".form");
var saveButton = document.querySelector(".save-button");
var titleInput = document.querySelector(".title-box");
var bodyInput = document.getElementById("body-input-box");
var ideaCardsGrid = document.querySelector(".idea-cards-grid");
var savedIdeasArray = [];

showStarredButton.addEventListener("click", showButtonHandler);
bodyElement.addEventListener("click", dropNavMenu);
saveButton.addEventListener("click", saveHandler);
form.addEventListener("input", enableSubmitButton);

function toggleHiddenMenu() {
    document.querySelector(".bottom-menu-4").classList.toggle("hidden-small");
}

function saveHandler(event) {
  if (!saveButton.disabled) {
    saveIdeas(event);
    updatePageHtml(savedIdeasArray);
  }
}

function showButtonHandler(event) {
  if (showStarredButton.innerText === "Show Starred Ideas") {
    showStarredIdeasOnly();
  } else {
    showAllCards();
  }
}

window.onload = retrieveFromStorage();
window.onload = (saveButton.disabled = true);

function showStarredIdeasOnly() {
  favoritedStars = [];
  for (var i = 0; i < savedIdeasArray.length; i++) {
    var currentStarIdea = savedIdeasArray[i];
      if (currentStarIdea.star === true) {
         favoritedStars.push(currentStarIdea);
      }
    }
  updatePageHtml(favoritedStars);
  showStarredButton.innerText = "Show All Ideas";
}

function showAllCards() {
  updatePageHtml(savedIdeasArray);
  showStarredButton.innerText = "Show Starred Ideas";
}

function enableSubmitButton() {
  if (bodyInput.value !== ""  &&  titleInput.value !== "") {
    saveButton.disabled = false;
    saveButton.classList.remove("filter-save-button");
  } else {
    saveButton.classList.add("filter-save-button");
    saveButton.disabled = true;
  }
}

function saveIdeas(event) {
  event.preventDefault();
  var currentIdea = new Idea(undefined, titleInput.value, bodyInput.value, undefined);
  savedIdeasArray.push(currentIdea);
  saveToStorage();
  form.reset();
  saveButton.disabled = true;
  saveButton.classList.add("filter-save-button");
}

function createIdeaHtml(ideaObject) {
  var starSource = ideaObject.star ? "assets/star-active.svg": "assets/star.svg";
  return `<div class="idea-cards" id="${ideaObject.id}">
    <div class="idea-top">
      <img class="red-star" src=${starSource}>
      <img class="delete-white" src="assets/delete.svg" alt="White Delete Icon">
    </div>
    <div class="all-text">
      <h1 class="idea-title">${ideaObject.title}</h1><br />
      <p class="idea-text">${ideaObject.body}</p>
    </div>
    <div class="idea-bottom">
      <img class="comment-circle idea-bottom" src="assets/comment.svg" alt="Add Comment">
      <p class="comment">Comment</p>
    </div>
  </div>`
}

ideaCardsGrid.addEventListener("click", function(event) {
  var clickedElement = event.target.closest(".idea-cards");
  var targetClass = event.target.classList;
  if (targetClass.contains("delete-white")){
     deleteCard(clickedElement);
  }
  if (targetClass.contains("red-star")) {
    targetClass.toggle("star-active");
    starIdea(clickedElement.id);
    if (targetClass.contains("star-active")){
      event.target.src = "assets/star-active.svg";
    } else {
      event.target.src = "assets/star.svg";
    }
  }
})

function deleteCard(element) {
  retrieveFromStorage();
  var id = element.id;
  for (var i = 0; i < savedIdeasArray.length; i++) {
    if (savedIdeasArray[i].id === parseFloat(id)) {
      savedIdeasArray.splice(i, 1);
      element.remove();
    }
    saveToStorage();
  }
}

function starIdea(id) {
  for(var i = 0; i < savedIdeasArray.length; i++) {
    var currentIdea = savedIdeasArray[i];
    if (currentIdea.id === parseFloat(id)) {
      currentIdea.changeStarred();
    }
  }
  saveToStorage();
}

function updatePageHtml(ideasArray) {
  ideaCardsGrid.innerHTML = "";
  for (var i = 0; i < ideasArray.length; i++) {
    var ideaElement = createIdeaHtml(ideasArray[i]);
    ideaCardsGrid.innerHTML += ideaElement;
  }
}

function dropNavMenu(event) {
  var isBurger = (hamburgerButton.outerHTML === `<img class="menu-navigate" src="assets/menu.svg" alt="menu">`);
  if(event.target.classList.contains("menu-navigate")) {
    toggleHiddenMenu();
    if (isBurger) {
      hamburgerButton.src = "assets/menu-close.svg";
    } else {
      hamburgerButton.src = "assets/menu.svg";
    }
  }
}

function saveToStorage() {
  localStorage.clear();
  localStorage.setItem('savedIdeasArray', JSON.stringify(savedIdeasArray));
  updatePageHtml(savedIdeasArray);
}

function retrieveFromStorage() {
  savedIdeasArray = JSON.parse(localStorage.getItem('savedIdeasArray')) || [];
  for(var i = 0; i < savedIdeasArray.length; i++) {
    var currentIdea = savedIdeasArray[i];
    var reinstatedIdea = new Idea(currentIdea.id, currentIdea.title, currentIdea.body, currentIdea.star);
    savedIdeasArray[i] = reinstatedIdea;
  }
  updatePageHtml(savedIdeasArray);
}
