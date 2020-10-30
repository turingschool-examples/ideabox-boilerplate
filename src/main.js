var saveButton = document.querySelector('.save-button');
var cardGrid = document.querySelector('.card-grid');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var ideas = [];

//add event listeners here 🍊
saveButton.addEventListener('click', makeNewIdeaCard);
cardGrid.addEventListener('click', upDateIdea);


//add functions here 🍊
function makeNewIdeaCard() {
    var newIdea = new Idea(titleInput.value, bodyInput.value);
    ideas.push(newIdea);
    newIdea.saveToStorage();
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
            <input type="image" id="star-${ideas[i].id}" class="star" src="${testForStar(ideas[i])}">
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
}

function upDateIdea() {
    if (checkForButtonType('delete-card')) {
        deleteIdea();
    } else if (checkForButtonType('star')) {
        starIdea();
    }
    upDateCardGrid();
};

function checkForButtonType(iDPrefix) {
  return event.target.id.includes(iDPrefix);
};

function testForMatchAmongIdeas(targetID, index) {
  if (`${targetID}-${ideas[index].id}` === event.target.id) {
    return true
  }
};

function deleteIdea() {
  for (var i = 0; i < ideas.length; i++) {
      if (testForMatchAmongIdeas(`delete-card`, i)) {
        ideas[i].deleteFromStorage();
        ideas.splice(i, 1);
      }
    }
  };

  function starIdea() {
    for (var i = 0; i < ideas.length; i++) {
        if (testForMatchAmongIdeas(`star`, i)) {
            ideas[i].toggleStar();
            ideas[i].updateIdea();
        }
      }
    };





function testForStar(idea) {
    if (idea.star === true) {
        return './assets/star-active.svg';
    } else {
        return './assets/star.svg';
    }
}
