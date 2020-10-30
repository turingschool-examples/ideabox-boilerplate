var inputTitle = document.querySelector("#title")
var inputBody = document.querySelector("#body")
var inputButton = document.querySelector("#save-button")
var cardDisplay = document.querySelector(".card-display")
var favoriteButtonAll = document.querySelectorAll(".favorite-button")
// var favoriteButtonRed = document.querySelector(".favorite-button-red")
var deleteButton = document.querySelector(".delete-button")
// var deleteButtonRed = document.querySelector(".delete-button-red")


var list = [];





inputButton.addEventListener("click", makeNewCard);
inputTitle.addEventListener("keyup", checkInputs);
inputBody.addEventListener("keyup", checkInputs);

cardDisplay.addEventListener("click", function(event) {
  if (event.target.closest(".favorite-button")) {
    for (var i = 0; i < list.length; i++) {
      if (parseInt(event.target.closest("article").id) === list[i].id) {
        addStar(list[i]);
        fillStar();
      }
    }
  }

  if (event.target.closest(".delete-button")) {
    deleteIdea();

  }

function checkInputs() {
  if (inputTitle.value !== "" && inputBody.value !== "") {
    inputButton.disabled = false;
  }
}



  if (event.target.closest(".delete-button")) {
    deleteIdea();
  }

}


function checkInputs() {
  if (inputTitle.value !== "" && inputBody.value !== "") {
    inputButton.disabled = false;
  }
}

function addToList(title, body) {
  var newIdea = new Idea(title, body);
  list.push(newIdea);
  console.log(list);
}

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
          <div class="favorite-container">
            <button class="favorite-button" id="star"><img src="svg-files/star.svg"/></button>
          </div>
          <div class="delete-container">
            <button class="delete-button" id="clear-idea"><img src="svg-files/delete.svg"/></button>
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
  inputTitle.value = "";
  inputBody.value = "";
}


function addStar(favoritedIdea) {
  favoritedIdea.updateIdea(favoritedIdea);
}

function fillStar(event) {
  if (event.target.closest("button").className.toString() === "favorite-button") {
    event.target.closest("div").innerHTML = `<button class="favorite-button" id="star"><img src="svg-files/star-active.svg"/></button>`;
  }
}

var favoriteContainer = document.querySelector('.favorite-container');
favoriteContainer.innerHTML = `<button class="favorite-button" id="star"><img src="svg-files/star-active.svg"/></button>`;

//deleting every other card, why is it skipping?

function deleteIdea() {
  for (var i = 0; i < list.length; i++) {
    list.splice(i, 1);
  }
  refreshCard();
}