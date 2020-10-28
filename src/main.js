var inputTitle = document.querySelector("#title")
var inputBody = document.querySelector("#body")
var inputButton = document.querySelector("#save-button")
var cardDisplay = document.querySelector(".card-display")

var list = [];

inputButton.addEventListener("click", makeNewCard);



function makeNewCard(event) {
  event.preventDefault();
  debugger;
  var inputIdea = new Idea(`${inputTitle.value}`, `${inputBody.value}`)
  inputIdea.saveToStorage(inputIdea);
  // var retrievedObject = localStorage.getItem(`${newIdea.id}`);
  // var parsedObject = JSON.parse(retrievedObject);
  // displayArea.innerHTML =
  //   `
  //   <article id="${parsedObject.id}">
  //     <div class="card-button-bar">
  //       <button class="favorite-button"><img src="svg-files/star.svg"/></button>
  //       <button class="delete-button"><img src="svg-files/delete.svg"/></button>
  //     </div>
  //     <div class="card-text">
  //       <h2>${inputTitle.value}</h2>
  //       <p>${inputBody.value}</p>
  //     </div>
  //     <div class="comment-button-bar">
  //       <button class="comment-button"><img src="svg-files/comment.svg"/></button>
  //       <label for="comment-input">Comment</label>
  //       <form class="comment-form hidden">
  //         <input type="text" id="comment-input">
  //       </form>
  //     </div>
  //   </article>
  //   `
}
