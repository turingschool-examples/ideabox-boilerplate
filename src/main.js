var saveButton = document.querySelector('.save-button');
var cardGrid = document.querySelector('.card-grid');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var ideas = [];
var deleteButton = document.querySelector('#delete-card');


//add event listeners here 🍊
saveButton.addEventListener('click', makeNewIdeaCard);
cardGrid.addEventListener('click', deleteIdea);


//add functions here 🍊
function makeNewIdeaCard() {
    var newIdea = new Idea(titleInput.value, bodyInput.value);
    ideas.push(newIdea);
    upDateCardGrid();
    clearFields(titleInput, bodyInput);
};

function clearFields(title, body) {
    title.value = '';
    body.value = '';
};

function upDateCardGrid() {
    newGrid = "";
    for (var i = 0; i < ideas.length; i++) {
        newGrid +=
            `<section class="idea-card">
            <div class="fav-delete-header">
              <input type="image" id="star-${ideas[i].id}" class="star" src="./assets/star-active.svg">
              <input type="image" id="delete-card-${ideas[i].id}" class="delete-card" src="./assets/delete.svg">
            </div>
            <div class="idea-content">
              <p class="idea-title">${ideas[i].title}</p>
              <p class="idea-body">${ideas[i].body}</p>
            </div>
            <div class="comment-strip">
              <input type="image" id="idea-comment" name="comment" src="./assets/comment.svg">
              <label for="comment">Comment</label>
            </div>
            </section>`;
    }
    cardGrid.innerHTML = newGrid;
};

function deleteIdea() {

    console.log(event.target.id);
    if (event.target.id.includes('delete-card')) {
        for (var i = 0; i < ideas.length; i++) {
            console.log('all the way in');
            if (`delete-card-${ideas[i].id}` === event.target.id) {
                ideas.splice(i, 1);
            }
            upDateCardGrid();
        }
    }
};