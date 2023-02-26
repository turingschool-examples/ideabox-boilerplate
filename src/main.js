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
//====================================================
// Variables
//====================================================

var currentIdea
var savedIdeas = []

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


//====================================================
// Functions
//====================================================

function pageLoad() {
  disableSaveButton()
}

function createCard(){
  ideaContainer.innerHTML = ''
  for (var i = 0; i < savedIdeas.length; i++ ) {
    var star = 'star.svg' 
    if (savedIdeas[i].star) {
      star = 'star-active.svg'
    }
    ideaContainer.innerHTML += 
    `<section class="idea-card" id=${savedIdeas[i].id}>
      <section class="top-bar">
        <img class="star" id=${savedIdeas[i].id} src=assets/${star} alt="White Star">
        <img class="delete-x" id=${savedIdeas[i].id} src="assets/delete.svg" alt="delete X">
      </section>
      <section class="card-description">
        <h3>${savedIdeas[i].title}</h3>
        <p>${savedIdeas[i].body}</p>
      </section>
      <section class="bottom-bar">
        <img class="comment-img" src="assets/comment.svg" alt="comment-img">
        <h4>Comment</h4>
      </section>
    </section>`
  }
}

function saveCard(){
  currentIdea = new Idea(titleInput.value, bodyInput.value)
  savedIdeas.push(currentIdea);
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

function showStarredIdeas() {
for (var i = 0; i < savedIdeas.length; i++){
  if (savedIdeas[i].star === true && showStarredIdeasBtn.classList === 'hidden') {
    createCard()
  } else if (savedIdeas[i].star === false) {
    var cardToRemove = document.getElementById(`${savedIdeas[i].id}`)
    cardToRemove.classList.toggle('hidden')
  }
 }
}

function showFavorites() {
  showAllIdeasBtn.classList.remove('hidden')
  showStarredIdeasBtn.classList.add('hidden')
  showStarredIdeas()
}

function showAllIdeas() {
  showAllIdeasBtn.classList.add('hidden')
  showStarredIdeasBtn.classList.remove('hidden')
  createCard()
}

