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
var titleInput = document.querySelector(".title-box");
var bodyInput = document.getElementById("body-input-box");
var ideaCardsGrid = document.querySelector(".idea-cards-grid");

var savedIdeasArray = [];

// As a user,
// - When I click “Show Starred Ideas”
// - I see only card that are favorited


showStarredButton.addEventListener("click", showButtonHandler);

function showButtonHandler(event) {
  if (showStarredButton.innerText === "Show Starred Ideas") {
    showStarredIdeasOnly();
  } else {
    showAllCards();
  }
}
function showStarredIdeasOnly() {

  favoritedStars = [];
  for (var i = 0; i < savedIdeasArray.length; i++) {
    var currentStarIdea = savedIdeasArray[i];
      if (currentStarIdea.star === true) {
         favoritedStars.push(currentStarIdea);
      }
    }
    updatePageHtml(favoritedStars);

showStarredButton.innerText = "Show All Ideas";

}


function showAllCards() {
  updatePageHtml(savedIdeasArray);

showStarredButton.innerText = "Show Starred Ideas";
}
  // return
  // var starredIdeasOnly = reinstatedIdea.filter(reinstatedIdea => reinstatedIdea.star = true);
  // starredIdeasOnly



      // var starredIdeasOnly = savedIdeasArray.filter(savedIdeasArray => savedIdeasArray.star = true);


// var deleteWhiteButton = document.querySelector("delete-white");
// deleteButtonWhite.addEventListener("click", deleteIdea);
//
// function deleteIdea() {
//   savedIdeasArray.pop();
// }
//
// var redStarFavorite = document.querySelector("red-star");
//
// redStarFavorite.addEventListener("click", toggleFavoriteColorStar )
// // favorited star
//
// function toggleFavoriteColorStar () {
//   redStar.classList.toggle("outlineStar")
// }


bodyElement.addEventListener("click", dropNavMenu);
saveButton.addEventListener("click", saveHandler);
form.addEventListener("input", enableSubmitButton);


function saveHandler(event) {
  if (!saveButton.disabled) {
    saveIdeas(event);
    updatePageHtml(savedIdeasArray);
  }
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
  var currentIdea = new Idea(undefined, titleInput.value, bodyInput.value, undefined);
  savedIdeasArray.push(currentIdea);
  saveToStorage();
  form.reset();
  saveButton.disabled = true;
  saveButton.classList.add("filter-save-button");
}
//every time we add a new card, we need to add html(placeholders in our html) to the page
function createIdeaHtml(ideaObject) {
  var starSource = ideaObject.star ? "assets/star-active.svg": "assets/star.svg";
  return ` <div class="idea-cards" id="${ideaObject.id}">
    <div class="idea-top">
      <img class="red-star" src=${starSource}>
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
  // checking id object is .star true or false on 81. source is 1/2 on 81.saved in var starSource
// line 81 i want to know if ideaobj.star (if) true return above, if not return after :
// <img class="red-star ${ideaObject.id}" src="assets/star.svg" alt="Active Star">
// <img class="red-star-active hidden ${ideaObject.id}" src="assets/star-active.svg" alt="Active Star">
// <svg xmlns="http://www.w3.org/2000/svg"
ideaCardsGrid.addEventListener("click", function(event) {
  var clickedElement = event.target.closest(".idea-cards");
  var targetClass = event.target.classList
  if (targetClass.contains("delete-white")){
     deleteCard(clickedElement);
  }
  if (targetClass.contains("red-star")) {
    targetClass.toggle("star-active");
    starIdea(clickedElement.id);
    if (targetClass.contains("star-active")){
      event.target.src = "assets/star-active.svg"
      } else {
      event.target.src = "assets/star.svg"
      }
    }
  })

function deleteCard(element) {
  retrieveFromStorage();
  var id = element.id;
  for (var i = 0; i < savedIdeasArray.length; i++ ) {
    if (savedIdeasArray[i].id === parseFloat(id)) {
      // remove from dom and remove fronm array
      savedIdeasArray.splice(i, 1);
      element.remove();
      // remove from local storage

    }
    saveToStorage();
  }
}// delete from the dom// event.target.remove();// remove it from the array

function starIdea(id) {
  // var idCard = Number(event.target.parentElement.parentElement.id);
  for(var i = 0; i < savedIdeasArray.length; i++ ) {
    var currentIdea = savedIdeasArray[i];
    if (currentIdea.id === parseFloat(id)) {
      // below is shorthand
      currentIdea.changeStarred();
    }
    // should updateTask be updateToDo?
  }
  saveToStorage();


    //   savedIdeasArray[i].star = true;
    //
    // if (savedIdeasArray[i].id === event.target.id) {
    //   savedIdeasArray[i].star = false;
    // }

}


// Add html to the page
// array get filled w obj of idea card, so need to populate
// run/loop through array and add each element to the dom. Each item/iteratio of loop we send through function to create the new html and then add html timeout the page.
function updatePageHtml(ideasArray) {
  ideaCardsGrid.innerHTML = "";
  // retrieveFromStorage();
  for (var i = 0; i < ideasArray.length; i++) {
    var ideaElement = createIdeaHtml(ideasArray[i])
    //for each item in array (i), creating html, for next iteration next html
    ideaCardsGrid.innerHTML += ideaElement
    //take this grid of added html and add to the function what we got to the grid
    // create an idea, put in array and then update page/html with every item in the array
  }

}
//make a new instance of idea class
// save that class in to array of savedIdeasArray
//put that instance of the class we just made use another function to update html of the dom.

function dropNavMenu(event) {
  var isBurger = (hamburgerButton.outerHTML === `<img class="menu-navigate" src="assets/menu.svg" alt="menu">`)
  if(event.target.classList.contains("menu-navigate")) {
    toggleHiddenMenu();
    if (isBurger) {
      hamburgerButton.src = "assets/menu-close.svg";
    } else {
      hamburgerButton.src = "assets/menu.svg"
    }
  }
}

function toggleHiddenMenu() {
    document.querySelector(".bottom-menu-4").classList.toggle("hidden-small")
    // ideas.classList.toggle("filter")
}

window.onload = retrieveFromStorage();
// fuction upDateStorage() {}

function deleteFromStorage() {

}

function saveToStorage() {
  localStorage.clear();
  localStorage.setItem('savedIdeasArray', JSON.stringify(savedIdeasArray));
  updatePageHtml(savedIdeasArray);
}

function retrieveFromStorage() {
  savedIdeasArray = JSON.parse(localStorage.getItem('savedIdeasArray')) || [];
  for(var i = 0; i < savedIdeasArray.length; i++) {
    var currentIdea = savedIdeasArray[i]
    var reinstatedIdea = new Idea(currentIdea.id, currentIdea.title, currentIdea.body, currentIdea.star);
    savedIdeasArray[i] = reinstatedIdea;
    }

  updatePageHtml(savedIdeasArray)
}



// function persistLocalStorage() {
// }
