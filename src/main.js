var inputTitle = document.querySelector("#title")
var inputBody = document.querySelector("#body")
var inputButton = document.querySelector("#save-button")
var cardDisplay = document.querySelector(".card-display")
// var favoriteButton = document.querySelector(".favorite-button")
// var deleteButton = document.querySelector(".delete-button")

var list = [];

inputButton.addEventListener("click", makeNewCard);
inputTitle.addEventListener("keyup", checkInputs);
inputBody.addEventListener("keyup", checkInputs);

cardDisplay.addEventListener("click", function(event) {
  if (event.target.closest(".favorite-button")) {
    for (var i = 0; i < list.length; i++) {
      if (parseInt(event.target.closest("article").id) === list[i].id) {
        addStar(list[i]);
        fillStar(list[i].id);
      }
    }
  }

  if (event.target.closest(".delete-button")) {
    for (var i = 0; i < list.length; i++) {
      if (event.target.classList.contains("delete-button")) {
        deleteIdea(event);
      }
    }
  }
});

function checkInputs() {
  if (inputTitle.value !== "" && inputBody.value !== "") {
    inputButton.disabled = false;
  }
}

function addToList(title, body) {
  var newIdea = new Idea(title, body);
  list.push(newIdea);
};

function makeNewCard(event) {
  event.preventDefault();
  addToList(inputTitle.value, inputBody.value);
  refreshCard();
  clearInputs();
};

function refreshCard() {
  cardDisplay.innerHTML = "";
  for (i = 0; i < list.length; i++) {
    cardDisplay.innerHTML +=
      `
    <article id="${list[i].id}">
      <div class="card-button-bar">
        <button class="favorite-button" id="${list[i].id}"><img class="favorite-button" src="svg-files/star.svg"/></button>
        <button class="favorite-button hidden" id="${list[i].id}"><img class="favorite-button" src="svg-files/star-active.svg"/></button>
        <button class="delete-button" id="x-white"><img class="delete-button" src="svg-files/delete.svg"/></button>
        <button class="delete-button hidden" id="x-red"><img class="delete-button" src="svg-files/delete-active.svg"/></button>
      </div>
      <div class="card-text">
        <h2>${list[i].title}</h2>
        <p>${list[i].body}</p>
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
  }
  clearInputs();
};

function clearInputs() {
  inputTitle.value = "";
  inputBody.value = "";
}

function addStar(favoritedIdea) {
  favoritedIdea.updateIdea(favoritedIdea);
}

function fillStar(favoritedIdea) {
  var favoriteButton = document.querySelectorAll('.favorite-button');
  for (var i = 0; i < favoriteButton.length; i++) {
    if (favoritedIdea === parseInt(favoriteButton[i].id)) {
      favoriteButton[i].classList.toggle("hidden");
    }
  }
}

function deleteIdea(event) {
  for (var i = 0; i < list.length; i++) {
    if (event.target.closest("article").id === list[i].id) {
      list.splice(i, 1);
      event.target.closest("article").remove();
    }
  }
  refreshCard();
}
