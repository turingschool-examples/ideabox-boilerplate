var inputTitle = document.querySelector("#title")
var inputBody = document.querySelector("#body")
var inputButton = document.querySelector("#save-button")
var cardDisplay = document.querySelector(".card-display")

var list = [];

inputButton.addEventListener("click", makeNewCard);

function addToList(title, body){
  var newIdea = new Idea(title, body);
  list.push(newIdea);
};

function retrieveFromLocalStorage() {
  debugger;
  var retrievedObject = localStorage.getItem("ideaCard");
  var parsedObject = JSON.parse(retrievedObject);
  list.push(parsedObject);
}

function makeNewCard(event) {
  event.preventDefault();
  addToList(inputTitle.value, inputBody.value);
  for (i = 0; i < list.length; i++){
    cardDisplay.innerHTML +=
      `
      <article id="${list[i].id}">
        <div class="card-button-bar">
          <button class="favorite-button"><img src="svg-files/star.svg"/></button>
          <button class="delete-button"><img src="svg-files/delete.svg"/></button>
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
  };
