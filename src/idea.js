class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }

//take in array as a parameter
  saveToStorage(array) {
    var tempArray = JSON.parse(localStorage.getItem(array)) || [];
    tempArray.push(this);
    localStorage.setItem(array, JSON.stringify(tempArray));
  }

  deleteFromStorage() {

  }

  updateIdea(title, body, star) {

  }
}
