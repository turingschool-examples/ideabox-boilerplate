var ideaForm = document.querySelector('.idea-form')
var inputTitle = document.querySelector("#title")
var inputBody = document.querySelector("#body")
var inputButton = document.querySelector("#save-button")
var cardDisplay = document.querySelector(".card-display")

var list = [];

window.addEventListener("load", retrieveFromLocalStorage);
inputButton.addEventListener("click", makeNewCard);
inputTitle.addEventListener("keyup", checkInputs);
inputBody.addEventListener("keyup", checkInputs);


cardDisplay.addEventListener("click", function(event) {
  if (event.target.closest(".favorite-button")) {
    for (var i = 0; i < list.length; i++) {
      if (parseInt(event.target.closest("article").id) === list[i].id) {
        addStar(list[i]);
        fillStar(list[i]);
      }
    }
  }

  if (event.target.closest(".delete-red")) {
    for (var i = 0; i < list.length; i++) {
      if (parseInt(event.target.closest("article").id) === list[i].id) {
        deleteIdea(list[i].id);
        event.target.closest("article").remove();
        // list[i].deleteFromStorage(list[i].id);
      }
    }
  }
});

function checkInputs() {
  if (inputTitle.value !== "" && inputBody.value !== "") {
    inputButton.disabled = false;
  } else {
    inputButton.disabled = true;
  }
}

function addToList(title, body) {
  var newIdea = new Idea(title, body);
  list.push(newIdea);
  sendToLocalStorage();
};

function makeNewCard(event) {
  event.preventDefault();
  addToList(inputTitle.value, inputBody.value); 
  refreshCard();
  clearInputs();
  checkInputs();
};

function refreshCard() {
  cardDisplay.innerHTML = "";
  // retrieveFromLocalStorage();
  for (i = 0; i < list.length; i++) {
    cardDisplay.innerHTML +=
      `
    <article id="${list[i].id}">
      <div class="card-button-bar">
        <div class="favorite-box">
          <button class="favorite-button" id="${list[i].id}"><img class="favorite-button" src="svg-files/star.svg"/></button>
          <button class="favorite-button hidden" id="${list[i].id}"><img class="favorite-button" src="svg-files/star-active.svg"/></button>
        </div>
        <div class="delete-box">
          <button class="delete-button delete-red" id="${list[i].id}"><img class="delete-img" src="svg-files/delete-active.svg"/></button>
          <button class="delete-button delete-white"><img class="delete-img" src="svg-files/delete.svg"/></button>
        </div>
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
  ideaForm.reset();
}

function addStar(favoritedIdea) {
  favoritedIdea.updateIdea(favoritedIdea);
  sendToLocalStorage();
}


function fillStar(favoritedIdea) {
  var favoriteButton = document.querySelectorAll('.favorite-button');
  for (var i = 0; i < favoriteButton.length; i++) {
    if ((favoritedIdea.id === parseInt(favoriteButton[i].id)) && (favoritedIdea.star === true)) {
      favoriteButton[i].classList.remove("hidden");
    }
  }
}


function deleteIdea(deleteCard) {
  var deleteButtonRed = document.querySelectorAll('.delete-red');
  for (var i = 0; i < deleteButtonRed.length; i++) {
    if(deleteCard === parseInt(deleteButtonRed[i].id)) {
      list.splice(i, 1);
    }
  } sendToLocalStorage();
};

function sendToLocalStorage() {
  var stringifiedObject = JSON.stringify(list);
  localStorage.setItem("ideaCards", stringifiedObject);
}

function retrieveFromLocalStorage() {
  var retrievedObject = localStorage.getItem("ideaCards");
  var parsedObject = JSON.parse(retrievedObject);
  for (var i = 0; i < parsedObject.length; i++) {
    var newObject = new Idea(parsedObject[i].title, parsedObject[i].body, parsedObject[i].star, parsedObject[i].id);
    list.push(newObject);
    fillStar(list[i]);
  } 
  refreshCard();
}

// function loadStars() {
//   var favoriteButton = document.querySelectorAll('.favorite-button');
//   for (var i = 0; i < favoriteButton.length; i++) {
//     if (list[i].star === true) {
//       favoriteButton[i].classList.remove("hidden");
//     } 
//   }
// }