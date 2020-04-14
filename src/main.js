var bodyElement = document.querySelector("body");
var menuElement = document.querySelector(".menu");
var dropDownMenuElement = document.querySelector(".drop-down-menu")
var hamburgerButton = document.querySelector(".menu-navigate");
var filterStarredIdeasElement = document.querySelector(".header-text-filter");
var showStarredButton = document.querySelector(".show-starred");
var menuCloseButton = document.querySelector(".menu-close");
var ideas = document.querySelector(".ideas");
var form = document.querySelector('.form');

var saveButton = document.querySelector(".save-button");
var savedIdeasArray = [];
var titleInput = document.querySelector(".title-box");
var bodyInput = document.getElementById("body-input-box");
var ideaCardsGrid = document.querySelector(".idea-cards-grid");

saveButton.addEventListener("click", saveHandler);

function saveHandler(event) {
  if (!saveButton.disabled) {
    saveIdeas(event);
    updatePageHtml();
  }
  //  else {
  //   enableSubmitButton();
  // }
}
// put an event listener for mouse over on the save button.
// event handler will do 3 things.
  //one is check the inputs on the form
    // if they are empty then the button is disabled
    // when the button is disabled, a filter or lighter color is applied
  //


// function enableSubmitButton() {
//   if (bodyInput.value !== ""  &&  titleInput.value !== "") {
//     saveButton.disabled = false;
//   } else {
//     saveButton.disabled = true;

//   }
// }
form.addEventListener("input", enableSubmitButton)
saveButton.disabled = true;
function enableSubmitButton() {
  if (bodyInput.value !== ""  &&  titleInput.value !== "") {
    saveButton.disabled = false
    saveButton.classList.remove("filter-save-button")
  } else {
    saveButton.classList.add("filter-save-button")
    saveButton.disabled = true
  }
}







function saveIdeas(event) {
  event.preventDefault();
  var currentIdea = new Idea(titleInput.value, bodyInput.value);
  savedIdeasArray.push(currentIdea);
  form.reset();
  saveButton.disabled = true;
  saveButton.classList.add("filter-save-button");
// make new instance of idea class using the inputs from the page, take that class we are creating from page and put that instance of class into array.
}
//every time we add a new card, we need to add html(placeholders in our html) to the page
function createIdeaHtml(ideaObject) {
  return ` <div class="idea-cards" id="${ideaObject.id}">
    <div class="idea-top">
      <img class="red-star" src="assets/star.svg" alt="Active Star">
      <img class="red-star-active hidden" src="assets/star-active.svg" alt="Active Star">
      <img class="delete-white" src="assets/delete.svg" alt="White Delete Icon">
    </div>
    <div class="all-text">
    <h1 class="idea-title">${ideaObject.title}</h1><br />
      <p class="idea-text">${ideaObject.body}</p>
    </div>
    <div class="idea-bottom">
      <img class="comment-circle idea-bottom" src="assets/comment.svg" alt="Add Comment">
      <p class="comment">Comment</p>
    </div>
  </div>
  `
}
ideaCardsGrid.addEventListener("click", function(event) {
  var clickedElement = event.target.closest(".idea-cards");
  if (event.target.classList.contains("delete-white")){
    deleteCard(clickedElement);
  }
  if (event.target.classList.contains("red-star")){
    event.target.classList.toggle("hidden");
    document.querySelector(".red-star-active").classList.toggle('hidden');
    starIdea(clickedElement.id);
  }
  if (event.target.classList.contains("red-star-active")){
    event.target.classList.toggle("hidden");
    document.querySelector(".red-star").classList.toggle('hidden')
    starIdea(clickedElement.id);
  }
})

function deleteCard(element) {
  var id = element.id;
  for (var i = 0; i < savedIdeasArray.length; i++ ) {
    var currentIdea = savedIdeasArray[i];
    if (currentIdea.id === parseFloat(id)) {
      // remove from dom and remove fronm array
      savedIdeasArray.splice(i, 1);
      element.remove();
    }
  }
}

function starIdea(id) {
  for (var i = 0; i < savedIdeasArray.length; i++ ) {
    var currentIdea = savedIdeasArray[i];
    debugger
    if (currentIdea.id === parseFloat(id)) {
      currentIdea.changeStarred();
    }
  }

}
// Add html to the page
// array get filled w obj of idea card, so need to populate
// run/loop through array and add each element to the dom. Each item/iteratio of loop we send through function to create the new html and then add html timeout the page.

function updatePageHtml() {
  ideaCardsGrid.innerHTML = "";
  for (var i = 0; i < savedIdeasArray.length; i++) {
    var ideaElement = createIdeaHtml(savedIdeasArray[i])
    //for each item in array (i), creating html, for next iteration next html
    ideaCardsGrid.innerHTML += ideaElement
    //take this grid of added html and add to the function what we got to the grid
    // create an idea, put in array and then update page/html with every item in the array
    //
  }

}


// bullet 1:
// - When I click “Save”,
// - If I entered information in both the “Title” and “Body” input fields,
// - I should see a new idea card with the provided title and body appear in the idea list
//make a new instance of idea class
// save that class in to array of savedIdeasArray
//put that instance of the class we just made use another function to update html of the dom.

bodyElement.addEventListener("click", dropNavMenu);

function dropNavMenu(event) {
  var isBurger = (hamburgerButton.outerHTML === `<img class="menu-navigate" src="assets/menu.svg" alt="menu">`)
  if(event.target.classList.contains("menu-navigate")) {
    toggleHiddenMenu();
    if(isBurger) {
      hamburgerButton.src = "assets/menu-close.svg";
    } else {
      hamburgerButton.src = "assets/menu.svg"
    }
  }
}
function toggleHiddenMenu() {
    document.querySelector(".bottom-menu-4").classList.toggle("hidden-small")
    ideas.classList.toggle("filter")
}
