class Idea {
  constructor(title, body, id, star) {
    this.id = id || Date.now();
    this.title = title;
    this.body = body;
    this.star = star || false;
  }

//take in array as a parameter
  saveToStorage(array) {
    var tempArray = JSON.parse(localStorage.getItem(array)) || [];
    tempArray.push(this);
    localStorage.setItem(array, JSON.stringify(tempArray));
  }

  deleteFromStorage(array) {
    var tempArray = JSON.parse(localStorage.getItem(array));
    var currentIdea = new Idea(this.title, this.body);
    tempArray.splice(tempArray.findIndex(element => element.title === currentIdea.title), 1);
    localStorage.setItem(array, JSON.stringify(tempArray));
  }

  updateIdea(title, body, star) {

  }
}
