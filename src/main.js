var saveButton = document.querySelector('#save-button');
var cardGrid = document.querySelector('.card-grid');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var ideas = [];
var ideaForm = document.querySelector('.idea-form');


//add event listeners here 🍊
saveButton.addEventListener('click', makeNewIdeaCard);
cardGrid.addEventListener('click', upDateIdea);
ideaForm.addEventListener('keyup', toggleSaveButton);
window.addEventListener('load', updateFromStorage);

//add functions here 🍊
function toggleSaveButton() {
  if (titleInput.value === '' || bodyInput.value === '') {
    saveButton.disabled = true;
  } else {
    saveButton.disabled = false;
  }
};


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
    toggleSaveButton();
};

function upDateCardGrid() {
    newGrid = ""; // need to set this with a var
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
};

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

function testForMatchAmongIdeas(targetIDPrefix, index) {
  if (`${targetIDPrefix}-${ideas[index].id}` === event.target.id) {
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
            ideas[i].updateLocallyStoredIdea();
        }
      }
    };

function testForStar(idea) {
    if (idea.star === true) {
        return './assets/star-active.svg';
    } else {
        return './assets/star.svg';
    }
};

function updateFromStorage () {
  for (var i = 0; i < localStorage.length; i++) {
    var keyName = localStorage.key(i);
    var retrievedIdea = localStorage.getItem(keyName);
    var parsedIdea = JSON.parse(retrievedIdea);

    var oldIdeaFromStorage = new Idea(parsedIdea.title, parsedIdea.body, parsedIdea.id, parsedIdea.star, parsedIdea.comments);

    ideas.push(oldIdeaFromStorage);
  }
  upDateCardGrid();
};
