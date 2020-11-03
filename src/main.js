
//Global Query Selectors...
var ideaForm = document.querySelector('.idea-form');
var inputTitle = document.querySelector("#title");
var inputBody = document.querySelector("#body");
var inputButton = document.querySelector("#save-button");
var cardDisplay = document.querySelector(".card-display");
var showFavoritesButton = document.querySelector(".filter-button");
var searchBar = document.querySelector(".search-bar");

//Global Variables...
var list = [];
var filteredCards = [];

//Event Listeners...
window.addEventListener("load", retrieveFromLocalStorage);
inputButton.addEventListener("click", makeNewCard);
inputTitle.addEventListener("keyup", checkInputs);
inputBody.addEventListener("keyup", checkInputs);
showFavoritesButton.addEventListener("click", toggleFavorites);
searchBar.addEventListener("keyup", searchCards);

//Event Listeners With Anonymous Functions...
cardDisplay.addEventListener("click", function(event) {
  if (event.target.closest(".favorite-button")) {
    for (var i = 0; i < list.length; i++) {
      if (parseInt(event.target.closest("article").id) === list[i].id) {
        addToFavorites(list[i]);
        changeStarColor(list[i]);
      }
    };
  };

  if (event.target.closest(".delete-red")) {
    for (var i = 0; i < list.length; i++) {
      if (parseInt(event.target.closest("article").id) === list[i].id) {
        deleteIdea(list[i].id);
        event.target.closest("article").remove();
      }
    }
  };
});

//Functions and Event Handelers...
function checkInputs() {
  if (inputTitle.value !== "" && inputBody.value !== "") {
    inputButton.disabled = false;
  } else {
    inputButton.disabled = true;
  }
};

function addToList(title, body) {
  var newIdea = new Idea(title, body);
  list.push(newIdea);
  sendToLocalStorage();
};

function makeNewCard(event) {
  event.preventDefault();
  addToList(inputTitle.value, inputBody.value);
  refreshCard(list);
  clearInputs();
  checkInputs();
  loadStars(list);
};

function refreshCard(array) {
  cardDisplay.innerHTML = '';
  for (i = 0; i < array.length; i++) {
    cardDisplay.innerHTML +=
      `
    <article class="card" id="${array[i].id}">
      <div class="card-button-bar">
        <div class="favorite-box">
          <button class="favorite-button white-star" id="${array[i].id}"><img class="favorite-button" src="svg-files/star.svg"/></button>
          <button class="favorite-button red-star hidden" id="${array[i].id}"><img class="favorite-button" src="svg-files/star-active.svg"/></button>
        </div>
        <div class="delete-box">
          <button class="delete-button delete-red" id="${array[i].id}"><img class="delete-img" src="svg-files/delete-active.svg"/></button>
          <button class="delete-button delete-white"><img class="delete-img" src="svg-files/delete.svg"/></button>
        </div>
      </div>
      <div class="card-text">
        <h2>${array[i].title}</h2>
        <p>${array[i].body}</p>
      </div>
      <div class="comment-button-bar">
        <button class="comment-button"><img src="svg-files/comment.svg"/></button>
        <label for="comment-input">Comment</label>
        <form class="comment-form hidden">
          <input type="text" id="comment-input">
        </form>
      </div>
    </article>
    `
  };
  clearInputs();
};

function clearInputs() {
  ideaForm.reset();
};

function addToFavorites(favoritedIdea) {
  favoritedIdea.updateIdea(favoritedIdea);
  sendToLocalStorage();
};

function changeStarColor(favoritedIdea) {
  var favoriteButton = document.querySelectorAll('.favorite-button');
  for (var i = 0; i < favoriteButton.length; i++) {
    if (favoritedIdea.id === parseInt(favoriteButton[i].id)) {
      favoriteButton[i].classList.toggle("hidden");
    }
  };
};

function deleteIdea(deleteCard) {
  var deleteButtonRed = document.querySelectorAll('.delete-red');
  for (var i = 0; i < deleteButtonRed.length; i++) {
    if (deleteCard === parseInt(deleteButtonRed[i].id)) {
      list.splice(i, 1);
    }
  };
  sendToLocalStorage();
};

function sendToLocalStorage() {
  var stringifiedObject = JSON.stringify(list);
  localStorage.setItem("ideaCards", stringifiedObject);
};

function retrieveFromLocalStorage() {
  if (localStorage.length < 1) {
    return;
  };
  var retrievedObject = localStorage.getItem("ideaCards");
  var parsedObject = JSON.parse(retrievedObject);
  for (var i = 0; i < parsedObject.length; i++) {
    var newObject = new Idea(
      parsedObject[i].title,
      parsedObject[i].body,
      parsedObject[i].star,
      parsedObject[i].id
      );
    list.push(newObject);
  };
  refreshCard(list);
  loadStars(list);
};

function loadStars(array) {
  var redStar = document.querySelectorAll('.red-star');
  var whiteStar = document.querySelectorAll('.white-star');
  for (var i = 0; i < array.length; i++) {
    if (array[i].star) {
      whiteStar[i].classList.add("hidden");
      redStar[i].classList.remove("hidden");
    } else {
      whiteStar[i].classList.remove("hidden");
      redStar[i].classList.add("hidden");
    }
  };
};

function toggleFavorites() {
  var card = document.querySelectorAll('.card');
  if (showFavoritesButton.innerText === 'Show Starred Ideas') {
    for (var i = 0; i < list.length; i++) {
      if (!list[i].star) {
        card[i].classList.add("hidden");
      }
    }
    showFavoritesButton.innerText = 'Show All Ideas';
  } else {
    showFavoritesButton.innerText = 'Show Starred Ideas';
    refreshCard(list);
    loadStars(list);
  };
};

function searchValues(idea) {
  var currentString = event.target.value.toLowerCase();
  return (
    idea.title.toLowerCase().includes(currentString) ||
    idea.body.toLowerCase().includes(currentString)
  );
};

function searchCards() {
  filteredCards = list.filter(searchValues);
  refreshCard(filteredCards);
  loadStars(filteredCards);
};
