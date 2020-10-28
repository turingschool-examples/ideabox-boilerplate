var inputTitle = document.querySelector("#title")
var inputBody = document.querySelector("#body")
var inputButton = document.querySelector("#save-button")
var cardDisplay = document.querySelector(".card-display")

var list = [];

inputButton.addEventListener("click", makeNewCard);



function makeNewCard(event) {
  event.preventDefault();
  var inputIdea = new Idea(`${inputTitle.value}`, `${inputBody.value}`)
  inputIdea.saveToStorage(inputIdea);
  var retrievedObject = localStorage.getItem(`${inputIdea.id}`);
  var parsedObject = JSON.parse(retrievedObject);
  cardDisplay.innerHTML +=
    `
    <article id="${parsedObject.id}">
      <div class="card-button-bar">
        <button class="favorite-button"><img src="svg-files/star.svg"/></button>
        <button class="delete-button"><img src="svg-files/delete.svg"/></button>
      </div>
      <div class="card-text">
        <h2>${parsedObject.title}</h2>
        <p>${parsedObject.body}</p>
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
