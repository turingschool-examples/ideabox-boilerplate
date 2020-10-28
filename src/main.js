var inputTitle = document.querySelector("#title")
var inputBody = document.querySelector("#body")
var inputButton = document.querySelector("#save-button")
var cardDisplay = document.querySelector(".card-display")

var list = [];

inputButton.addEventListener("click", Idea.saveToStorage);




// function displayInputs() {
  // var retrievedObject = localStorage.getItem('name1');
  // var parsedObject = JSON.parse(retrievedObject);
//   displayArea.innerHTML = `<p>Name: ${parsedObject.name} <br> Email: ${parsedObject.email}</p>`;
// }
