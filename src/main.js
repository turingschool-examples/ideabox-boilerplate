// Query Selectors
var savedButton = document.querySelector(".save-btn")
var titleInput = document.querySelector(".title-input")
var bodyInput = document.querySelector(".body-input")
var ideaContainer = document.querySelector(".idea-card")


// Variables
  var currentIdea
  var savedIdeas = [];
// Event Listeners

savedButton.addEventListener('click', function(event){
event.preventDefault()
saveCard()
})

// Functions


function createCard(){
  ideaContainer.innerHTML = ''
  for (var i = 0; i < savedIdeas.length; i++ )
  ideaContainer.innerHTML += 
  // <section class="idea-card" id="dateNow">
    `<section class="top-bar">
      <img class="star" src="assets/star.svg" alt="White Star">
      <img class="delete-x" src="assets/delete.svg" alt="delete X">
    </section>
    <section class="card-description">
      <h3>${savedIdeas[i].title}</h3>
      <p>${savedIdeas[i].body}</p>
    </section>
    <section class="bottom-bar">
      <img class="comment-img" src="assets/comment.svg" alt="comment-img">
      <h4>Comment</h4>
    </section>`
  // </section>

}
function saveCard(){
  currentIdea = new Idea(titleInput.value, bodyInput.value)
  savedIdeas.push(currentIdea);
  createCard()
}
