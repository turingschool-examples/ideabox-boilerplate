var ideas = JSON.parse(localStorage.getItem('ideas')) || [];
var starredIdeas = JSON.parse(localStorage.getItem('starredIdeas')) || [];


var saveButton = document.querySelector('.save-button');
saveButton.addEventListener('click', saveIdea);

function saveIdea() {
  var titleInput = document.querySelector('.title-input').value;
  var bodyInput = document.querySelector('.body-input').value;
  var newIdea = new Idea(titleInput, bodyInput)
  ideas.push(newIdea);
  clearInputs(titleInput, bodyInput);
  newIdea.saveToStorage('ideas');
}

function clearInputs(titleInput, bodyInput) {
  titleInput = '';
  bodyInput = '';
}




//Pseudocode
//1. saveButton should only use class constructor and push data to the arrays
//2. verify inputs have required inputs for error handling when a user clicks the save button
//3. once the save button is pushed, idea title/body are being pushed into new array
// title input/body input = new Idea. helper function
//4. instantiating new instance of Idea class
//5. push new instance of Idea class to the ideas array (an array of objects)
//6. add save to localStorage
//7. clear out input boxes - call function inside saveIdea function
