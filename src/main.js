var saveButton = document.querySelector('.save-button');
var cardGrid = document.querySelector('.card-grid');


//add event listeners here 🍊
saveButton.addEventListener('click', makeNewIdeaCard);



//add functions here 🍊
function makeNewIdeaCard() {
  var titleInput = document.querySelector('.title-input').value;
  var bodyInput = document.querySelector('.body-input').value;

  var newIdea = new Idea(titleInput, bodyInput);
  console.log(titleInput);
  cardGrid.innerHTML +=
  `<section class="idea-card">
      <div class="fav-delete-header">
          <input type="image" id="star" src="./assets/star-active.svg">
          <input type="image" id="delete-card" src="./assets/delete.svg">
      </div>
      <div class="idea-content">
          <p class="idea-title">${newIdea.title}</p>
          <p class="idea-body">${newIdea.body}</p>
      </div>
      <div class="comment-strip">
          <input type="image" id="idea-comment" name="comment" src="./assets/comment.svg">
          <label for="comment">Comment</label>
      </div>
  </section>`;

};
