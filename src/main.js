var burgerButton = document.querySelector(".hamburger-img")
var body = document.querySelector(".purple-1")
var showIdeas = document.querySelector(".show-starred")
var ideas = document.querySelector(".ideas")
var menuItems = document.querySelector('.menu-items');
var hamburgerImg = document.querySelector('.hamburger-img')
var miniMenuXButton = document.querySelector('.mini-menu-x-button');
var miniMenuX = document.querySelector('.mini-menu-x');
var miniMenu = document.querySelector('.mini-menu');
var list = []
var saveButton = document.querySelector('.save');
var ideaTitleInput = document.querySelector('.input-title');
var ideaBodyInput = document.querySelector('.input-body');
var ideaCards = document.querySelector('.idea-cards')
// var miniMenuX = document.querySelector('.mini-menu-x');


body.addEventListener("click", buttonHandler)

function buttonHandler(event) {
  if(event.target === showIdeas){
    alert("You clicked me");
  } else if (event.target === burgerButton) {
    console.log(event.target);
    displayStarredIdeasMenu();
  } else if (event.target === miniMenuX) {
    hideStarredIdeasMenu();
  } else if (event.target === saveButton) {
    validateInputs();
  }
}

function displayStarredIdeasMenu() {
  menuItems.style.display = "flex";
  miniMenuXButton.style.display = 'flex';
  hamburgerImg.style.display = 'none';
  burgerButton.style.display = 'none';
}

function hideStarredIdeasMenu() {
  menuItems.style.display = 'none';
  hamburgerImg.style.display = 'flex';
  burgerButton.style.display = 'flex';
}

function validateInputs(){
  if (ideaTitleInput.value !== "" && ideaBodyInput.value !== ""){
    saveNewIdea()
  }
}

function saveNewIdea() {
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
              <img src="assets/star-active.svg" alt="Orange Active Star Icon">
              <img src="assets/delete.svg" alt=" X delete">
            </section>
            <section class="idea-box-mid">
              <h3>${currentIdea.title}</h3>
              <p>${currentIdea.body}</p>
            </section>
            <section class="idea-box-bottom">
              <img src="assets/comment.svg" alt="Plus Icon add a comment">
              <p>Comment</p>
            </section>
          </section>`
          ideaCards.insertAdjacentHTML('afterbegin', currentIdeaDetails)

  }

}
