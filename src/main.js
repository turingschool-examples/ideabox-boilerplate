var ideas = JSON.parse(localStorage.getItem('ideas')) || [];
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var cardsDisplay = document.querySelector('.cards-display');
var searchInput = document.querySelector('.search-input');
var inputFields = document.querySelector('.input-fields');
var commentForm = document.querySelector('.comment-form');
var commentInput = document.querySelector('.comment-input');
var cardId = document.querySelector('.card-id');
var modal = document.querySelector('.modal');
var commentDisplay = document.querySelector('.comment-display');
var modalDisplayId = document.querySelector('.modal-display-id');
var modalDisplayIndex = document.querySelector('.modal-display-index');

var saveButton = document.querySelector('.save-button');
var showFavButton = document.querySelector('.show-stars');
var saveCommentButton = document.querySelector('.comment-save-button');
var showCommentsButton = document.querySelector('.view-comment');
var closeCommentsButton = document.querySelector('.close-comments-button');

window.onload = redrawCardsDisplay();
saveButton.addEventListener('click', saveIdea);
searchInput.addEventListener('keyup', filterCards);

titleInput.addEventListener('keyup', function () {
  if (bodyInput.value !== '') {
    toggleButton(saveButton, titleInput)
  }
});

bodyInput.addEventListener('keyup', function () {
  if (titleInput.value !== '') {
    toggleButton(saveButton, bodyInput)
  }
});

commentInput.addEventListener('keyup', function () {
  toggleButton(saveCommentButton, commentInput)
});

saveCommentButton.addEventListener('click', function (event) {
  saveComment(event);
  toggleButton(saveCommentButton, commentInput)
});

showFavButton.addEventListener('click', function (event) {
  if (showFavButton.innerText === "Show Starred Ideas") {
    showFavButton.innerText = "Show All Ideas"
    toggleFavorites(event);
  } else {
    showFavButton.innerText = "Show Starred Ideas";
    redrawCardsDisplay();
  }
});

cardsDisplay.addEventListener('click', function (event) {
  if (event.target.className === 'delete-button') {
    deleteCard(event);
    var tempIdea = createTempIdea(event);
    tempIdea.deleteFromStorage('ideas', tempIdea);
  } else if (event.target.classList.contains('favorite')) {
    toggleElement(event);
    updateStar(event)
  } else if (event.target.classList.contains('card-footer')) {
    inputFields.classList.toggle('hidden');
    commentForm.classList.toggle('hidden');
    cardId.innerText = event.target.parentNode.parentNode.parentNode.id;
  } else if (event.target.classList.contains('view-comment')) {
    showComments(event)
  }
});

modal.addEventListener('click', function (event) {
  if (event.target.id === 'close-comments-button') {
    modal.classList.add('hidden')
  } else if (event.target.className === 'comment-hand') {
    var commentMessage = event.target.parentNode.innerText.slice(3)
    var commentIndex = findCommentIndex(event, commentMessage)
    var tempComment = new Comment(commentMessage)
    tempComment.deleteFromStorage('ideas', modalDisplayIndex.innerText, commentIndex)
    ideas[modalDisplayIndex.innerText].comments.splice(commentIndex, 1)
    redrawComments(modalDisplayIndex.innerText)
  }
});

function openModal() {
  modal.classList.remove('hidden')
};

function findCommentIndex(event, commentMessage) {
  var modalCardIndex = findCardIndex(event, modalDisplayId.innerText)
  for (var i = 0; i < ideas[modalCardIndex].comments.length; i++) {
    if (ideas[modalCardIndex].comments[i] === commentMessage) {
      return i
    }
  }
};

function redrawComments(index) {
  commentDisplay.innerHTML = ""
  for (var i = 0; i < ideas[index].comments.length; i++) {
    commentDisplay.innerHTML += `<p class="comment-text"><span class="comment-hand">👉</span> ${ideas[index].comments[i]}</p>`
  }
};

function showComments(event) {
  var index = findCardIndex(event, event.target.parentNode.parentNode.id);
  commentDisplay.innerHTML = ""
  for (var i = 0; i < ideas[index].comments.length; i++) {
    commentDisplay.innerHTML += `<p class="comment-text"><span class="comment-hand">👉</span> ${ideas[index].comments[i]}</p>`
  }
  modalDisplayId.innerText = event.target.parentNode.parentNode.id;
  modalDisplayIndex.innerText = index
  openModal()
};

function filterCards() {
  cardsDisplay.innerHTML = '';
  var input = searchInput.value.toUpperCase();
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].title.toUpperCase().includes(input) || ideas[i].body.toUpperCase().includes(input)) {
      displayCard(ideas[i])
    }
  }
};

function toggleFavorites(event) {
  cardsDisplay.innerHTML = ""
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].star) {
      displayCard(ideas[i])
    }
  }
};

function updateStar(event) {
  cardIndex = findCardIndex(event, event.target.closest('article').id);
  var ideasArray = JSON.parse(localStorage.getItem('ideas'))
  var currentIdea = ideasArray[cardIndex]
  currentIdea.star = !currentIdea.star;
  currentIdea = new Idea(currentIdea.title, currentIdea.body, currentIdea.id, currentIdea.star);
  ideas.splice(cardIndex, 1, currentIdea);
  currentIdea.updateIdea('ideas', currentIdea, cardIndex)
};

function findCardIndex(event, path) {
  var currentId = parseInt(path)
  return ideas.findIndex(function (element) {
    return element.id === currentId;
  })
};

function createTempIdea(event) {
  var curTitle = event.target.parentNode.nextElementSibling.firstElementChild.innerText
  var curBody = event.target.parentNode.nextElementSibling.lastElementChild.innerText
  var curId = event.target.parentNode.parentNode.id
  var curStar = event.target.parentNode.id
  return new Idea(curTitle, curBody, curId, curStar);
};

function deleteCard(event) {
  for (var i = 0; i < ideas.length; i++) {
    if (parseInt(event.target.closest('article').id) === ideas[i].id) {
      ideas.splice(i, 1)
      redrawCardsDisplay()
    }
  }
};

function redrawCardsDisplay() {
  cardsDisplay.innerHTML = ""
  for (var i = 0; i < ideas.length; i++) {
    displayCard(ideas[i])
  }
};

function saveIdea() {
  var newIdea = new Idea(titleInput.value, bodyInput.value)
  ideas.push(newIdea);
  newIdea.saveToStorage('ideas');
  displayCard(newIdea);
  clearInputs(bodyInput, titleInput);
  toggleButton(saveButton, bodyInput)
};

function toggleButton(button, input) {
  if (input.value === "") {
    button.disabled = true;
    button.classList.add('disabled');
  } else {
    button.disabled = false;
    button.classList.remove('disabled');
  }
};

function saveComment(event) {
  var message = commentInput.value;
  var index = findCardIndex(event, cardId.innerText);
  var newComment = new Comment(message)
  ideas[index].comments.push(message);
  newComment.saveToStorage('ideas', index);
  clearInputs(commentInput, commentInput);
};

function clearInputs(body, title) {
  body.value = '';
  title.value = '';
};

function toggleElement(event) {
  if (event.target.attributes.src.nodeValue === "./assets/star.svg") {
    event.target.attributes.src.nodeValue = "./assets/star-active.svg";
  } else {
    event.target.attributes.src.nodeValue = "./assets/star.svg";
  }
};

function checkStar(idea) {
  if (idea.star) {
    return "./assets/star-active.svg"
  } else {
    return "./assets/star.svg"
  }
};

function displayCard(newIdea) {
  var imageSource = checkStar(newIdea);
  cardsDisplay.innerHTML += `
    <article class="cards" id=${newIdea.id}>
      <header class="card-header" id=${newIdea.star}>
        <img src=${imageSource} class="favorite star" alt="A white star">
        <div class="delete-button"></div>
      </header>
      <div class="idea-text">
        <h1 class="idea-title">${newIdea.title}</h1>
        <p class="idea-body">${newIdea.body}</p>
      </div>
      <div class="card-footer-box">
        <div id="comment-word">
          <img src="./assets/comment.svg" class="card-footer" alt="A plus sign">
          <p class="comment card-footer">Comment</p>
        </div>
        <img src="./assets/comment-active.png" class="view-comment" id="comment-bubble" alt="A speech bubble">
      </div>
    </article>`
};