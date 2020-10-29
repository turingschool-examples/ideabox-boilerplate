var ideas = JSON.parse(localStorage.getItem('ideas')) || [];
var starredIdeas = JSON.parse(localStorage.getItem('starredIdeas')) || [];
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var cardsDisplay = document.querySelector('.cards-display');

var saveButton = document.querySelector('.save-button');
saveButton.addEventListener('click', saveIdea);
titleInput.addEventListener('keyup', toggleSaveButton);
bodyInput.addEventListener('keyup', toggleSaveButton);

function saveIdea() {
  var newIdea = new Idea(titleInput.value, bodyInput.value)
  ideas.push(newIdea);
  newIdea.saveToStorage('ideas');
  displayCard();
  clearInputs(titleInput, bodyInput);
  toggleSaveButton()
}

function clearInputs() {
  titleInput.value = '';
  bodyInput.value = '';
}

function displayCard() {
  cardsDisplay.innerHTML += `
    <article class="cards">
      <header>
        <img src="./assets/star-active.svg" alt="A red star">
        <img src="./assets/delete.svg" alt="An X">
      </header>
      <div class="idea-text">
        <h1 class="idea-title">${titleInput.value}</h1>
        <p class="idea-body">${bodyInput.value}</p>
      </div>
      <div class="card-footer">
        <img src="./assets/comment.svg" alt="">
        <p class="comment">Comment</p>
      </div>
    </article>`
}

function toggleSaveButton() {
  if (titleInput.value === '' || bodyInput.value === '') {
    saveButton.disabled = true;
    saveButton.classList.add('disabled');
  } else {
    saveButton.disabled = false;
    saveButton.classList.remove('disabled');
  }
}


//Pseudocode - Iteration 2
// 1. Utilize new idea class to populate our HTML element that is the card
// 2. Need to take newIdea.title/body and iterpolate that into HTML
// 3. Update cards display area HTML with our new card





//Pseudocode - iteration 1
//1. saveButton should only use class constructor and push data to the arrays
//2. verify inputs have required inputs for error handling when a user clicks the save button
//3. once the save button is pushed, idea title/body are being pushed into new array
// title input/body input = new Idea. helper function
//4. instantiating new instance of Idea class
//5. push new instance of Idea class to the ideas array (an array of objects)
//6. add save to localStorage
//7. clear out input boxes - call function inside saveIdea function
