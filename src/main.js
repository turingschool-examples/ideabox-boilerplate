//====================================================
// Query Selectors
//====================================================

var savedButton = document.querySelector(".save-btn")
var titleInput = document.querySelector(".title-input")
var bodyInput = document.querySelector(".body-input")
var ideaContainer = document.querySelector(".idea-box-container")
var form = document.querySelector(".form-container")
var deleteButton = document.querySelector(".delete-x")
var starButton = document.querySelector(".star")
var showAllIdeasBtn = document.querySelector(".show-all-ideas-btn")
var showStarredIdeasBtn = document.querySelector(".starred-ideas-btn")
var ideaCard = document.querySelector(".idea-card")
var filterBox = document.getElementById("filter-box")
//====================================================
// Variables
//====================================================

var currentIdea
var savedIdeas = []
var showFavorite = false

//====================================================
// Event Listeners
//====================================================

window.addEventListener('load', pageLoad)

savedButton.addEventListener('click', function(event){
  event.preventDefault()
  saveCard()
  clearInput()
  disableSaveButton()
})

form.addEventListener('keyup', toggleSaveBtn)

deleteButton.addEventListener('click', deleteIdeaCard)

ideaContainer.addEventListener('click', updateCard)

starButton.addEventListener('click', toggleStar)

showAllIdeasBtn.addEventListener('click', showAllIdeas)

showStarredIdeasBtn.addEventListener('click', showFavorites)

filterBox.addEventListener('input', createCard)

//====================================================
// Functions
//====================================================

function pageLoad() {
  disableSaveButton()
}

function createCard(){
  ideaContainer.innerHTML = ''
  for (var i = 0; i < savedIdeas.length; i++ ) {
    if (savedIdeas[i].title.toLowerCase().includes(filterBox.value.toLowerCase()) || savedIdeas[i].body.toLowerCase().includes(filterBox.value.toLowerCase())) {
      if (savedIdeas[i].star === true && showFavorite === true) {
        drawSingleCard(savedIdeas[i])
      } else if (showFavorite === false ) { 
        drawSingleCard(savedIdeas[i])
      }
    }
  }
}

function drawSingleCard(idea) {
    var star ='star.svg' 
    var altStar = 'White star'
    if (idea.star) {
      star = 'star-active.svg'
      altStar = 'Orange star'
    }
  ideaContainer.innerHTML += 
  `<section class="idea-card" id=${idea.id}>
    <section class="top-bar">
      <img class="star" id=${idea.id} src=assets/${star} alt=${altStar}>
      <img class="delete-x" id=${idea.id} src="assets/delete.svg" alt="delete X">
    </section>
    <section class="card-description">
      <h3>${idea.title}</h3>
      <p>${idea.body}</p>
    </section>
    <section class="bottom-bar">
      <img class="comment-img" src="assets/comment.svg" alt="comment-img">
      <h4>Comment</h4>
    </section>
  </section>`
}

function saveCard(){
  currentIdea = new Idea(titleInput.value, bodyInput.value)
  savedIdeas.push(currentIdea)
  createCard()
}

function clearInput() {
  titleInput.value = ''
  bodyInput.value = ''
}

function disableSaveButton() {
  savedButton.disabled = true
}

function toggleSaveBtn() {
  if (titleInput.value !== '' && bodyInput.value !== '') {
    savedButton.disabled = false
  } else {
    savedButton.disabled = true
  }
}

function deleteIdeaCard(event) {
  for (var i = 0; i < savedIdeas.length; i++) {
  if(parseInt(event.target.id) === savedIdeas[i].id) {
    savedIdeas.splice(i, 1)
    }
  }
  createCard()
}

function updateCard(event) {
  if(event.target.classList.contains('delete-x')) {
    deleteIdeaCard(event)
  }
  if(event.target.classList.contains('star')) {
    toggleStar(event)
  }
}

function toggleStar(event) {
  for (var i = 0; i < savedIdeas.length; i++) {
    if (parseInt(event.target.id) === savedIdeas[i].id) {
      savedIdeas[i].updateIdea()
    }
  }  
  createCard()
}

function showFavorites() {
  showAllIdeasBtn.classList.remove('hidden')
  showStarredIdeasBtn.classList.add('hidden')
  showFavorite = true
  createCard()
}

function showAllIdeas() {
  showAllIdeasBtn.classList.add('hidden')
  showStarredIdeasBtn.classList.remove('hidden')
  showFavorite = false
  createCard()
}

