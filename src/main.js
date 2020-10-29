var saveButton = document.querySelector('.save-button');
var cardGrid = document.querySelector('.card-grid');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');

//add event listeners here 🍊
saveButton.addEventListener('click', makeNewIdeaCard);


//add functions here 🍊
function makeNewIdeaCard() {
  var newIdea = new Idea(titleInput.value, bodyInput.value);

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

  clearFields(titleInput, bodyInput);
};

function clearFields(title, body) {
  title.value = '';
  body.value= '';
};













//delte line when done
