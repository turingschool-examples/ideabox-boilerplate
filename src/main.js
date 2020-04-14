var burgerButton = document.querySelector(".hamburger-img");
var body = document.querySelector(".purple-1");
var showIdeas = document.querySelector(".show-starred");
var ideas = document.querySelector(".ideas");
var menuItems = document.querySelector('.menu-items');
var miniMenuXButton = document.querySelector('.mini-menu-x-button');
var miniMenuX = document.querySelector('.mini-menu-x');
var miniMenu = document.querySelector('.mini-menu');
var saveButton = document.querySelector('.save');
var ideaTitleInput = document.querySelector('.input-title');
var ideaBodyInput = document.querySelector('.input-body');
var ideaCards = document.querySelector('.idea-cards');
var inactiveStar = document.querySelector('.inactive-star');
var list = []

body.addEventListener("click",buttonHandler);

ideaTitleInput.addEventListener('keyup', validateInputs);
ideaBodyInput.addEventListener('keyup', validateInputs);
ideaCards.addEventListener('click', function(event) {
  console.log(event);
})

function buttonHandler(event) {
  if(event.target === showIdeas){
    alert("You clicked me placeholder");
  } else if (event.target === burgerButton) {
    displayStarredIdeasMenu();
  } else if (event.target === miniMenuX) {
    hideStarredIdeasMenu();
  } else if (event.target === saveButton) {
    saveNewIdea()
    
  }
}

function displayStarredIdeasMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.add('menu-open');

}

function hideStarredIdeasMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.remove('menu-open');

}

function validateInputs() {
  saveButton.disabled = ideaTitleInput.value === "" || ideaBodyInput.value === "";
}

function saveNewIdea() {
  saveButton.disabled = true;
  var newIdea = new Idea(ideaTitleInput.value, ideaBodyInput.value);
  ideaTitleInput.value = ""
  ideaBodyInput.value = ""
  list.push(newIdea);
  displayIdeaCard();
}

function displayIdeaCard() {
  ideaCards.innerHTML = '';
  for (var i = 0; i < list.length; i++){
    var currentIdea = list[i]
    var currentIdeaDetails =  `<section class="idea-card-unit" id='${currentIdea.id}'>
    <section class="idea-box-top">
    <button class="idea-box-top-buttons inactive-star"><img src="assets/star.svg" alt="Inactive Star Icon"></button>
    <button class="idea-box-top-buttons"><img src="assets/delete.svg" alt=" X delete"></button>
    </section>
    <section class="idea-box-mid">
    <h3>${currentIdea.title}</h3>
    <p>${currentIdea.body}</p>
    </section>
    <section class="idea-box-bottom">
    <button class="idea-box-bottom-button"><img src="assets/comment.svg" alt="Plus Icon add a comment"></button>
    <p>Comment</p>
    </section>
    </section>`
    ideaCards.insertAdjacentHTML('afterbegin', currentIdeaDetails)
    
  }
}

