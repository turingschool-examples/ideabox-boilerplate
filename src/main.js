var ideas = JSON.parse(localStorage.getItem('ideas')) || [];
var starredIdeas = JSON.parse(localStorage.getItem('starredIdeas')) || [];
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var cardsDisplay = document.querySelector('.cards-display');

var saveButton = document.querySelector('.save-button');
saveButton.addEventListener('click', saveIdea);
titleInput.addEventListener('keyup', toggleSaveButton);
bodyInput.addEventListener('keyup', toggleSaveButton);
window.onload = redrawCardsDisplay()

cardsDisplay.addEventListener('click', function (event) {
  if (event.target.className === "delete-button") {
    deleteCard();
    createTempIdea();
  }
  if (event.target.classList.contains("favorite")) {
    toggleElement();
  }
})

function createTempIdea() {
  var curTitle = event.target.parentNode.nextElementSibling.firstElementChild.innerText
  var curBody = event.target.parentNode.nextElementSibling.lastElementChild.innerText
  var curId = event.target.parentNode.parentNode.id
  var curStar = event.target.parentNode.id
  var tempIdea = new Idea(curTitle, curBody, curId, curStar);
  console.log(tempIdea)
}

function deleteCard() {
  for (var i = 0; i < ideas.length; i++) {
    if (parseInt(event.target.closest('article').id) === ideas[i].id) {
      ideas.splice(i, 1)
      redrawCardsDisplay()
    }
  }
}

function redrawCardsDisplay() {
  cardsDisplay.innerHTML = ""
  for (var i = 0; i < ideas.length; i++) {
    displayCard(ideas[i])
  }
}

function saveIdea() {
  var newIdea = new Idea(titleInput.value, bodyInput.value)
  ideas.push(newIdea);
  newIdea.saveToStorage('ideas');
  displayCard(newIdea);
  clearInputs(titleInput, bodyInput);
  toggleSaveButton()
}

function clearInputs() {
  titleInput.value = '';
  bodyInput.value = '';
}

function toggleElement() {
  document.querySelector(".star").classList.toggle("hidden")
  document.querySelector(".star-active").classList.toggle("hidden")
}

function displayCard(newIdea) {
  cardsDisplay.innerHTML += `
    <article class="cards" id=${newIdea.id}>
      <header id=${newIdea.star}>
        <img src="./assets/star.svg" class="favorite star" alt="A white star">
        <img src="./assets/star-active.svg" class="favorite star-active hidden" alt="A red star">
        <img src="./assets/delete.svg" class="delete-button" alt="An X">
      </header>
      <div class="idea-text">
        <h1 class="idea-title">${newIdea.title}</h1>
        <p class="idea-body">${newIdea.body}</p>
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

//Pseudocode - Iteration 4
// 1. Add window on load listener
// 2. Populate card display
// 3. send deletion to local storage
//

//Pseudocode - Iteration 3
// 1. Delete button should delete the card
// 2. Star should toggle on click and save to favorites array
// 3. all without refreshing the page


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
