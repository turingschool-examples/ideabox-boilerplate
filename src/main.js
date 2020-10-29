var saveButton = document.querySelector('.save-button');
var cardGrid = document.querySelector('.card-grid');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var ideas = [];
// var deleteButton = document.querySelector('#delete-card')


//add event listeners here 🍊
saveButton.addEventListener('click', makeNewIdeaCard);
// deleteButton.addEventListener('click', deleteIdea);


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
    console.log('sadfljsdlfoj');
    for (var i = 0; i < ideas.length; i++) {
        cardGrid.innerHTML +=
            `<section class="idea-card" id="${ideas[i].id}>
        <div class="fav-delete-header">
            <input type="image" id="star" src="./assets/star-active.svg">
            <input type="image" id="delete-card" src="./assets/delete.svg">
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
};

// deleteIdea() {

// }











//delte line when done