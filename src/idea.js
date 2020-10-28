class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }

// create a new instance of our idea class w/ a new id, new title, and new body
// change innerHTML
  saveToStorage(newIdea) {
    var stringifiedObject = JSON.stringify(newIdea);
    localStorage.setItem(`${this.id}`, stringifiedObject);
  }

  deleteFromStorage() {
    localStorage.removeItem(`${this.id}`);
  }

// remove from storage, adding to storage, or favorited:
  // updateIdea(newIdea) {
  //   this.title = newIdea.title;
  //   this.body = newIdea.body;
  //   this.star = newIdea.star;
  // }

}

var idea1 = new Idea("A New Title", "Something brilliant!");
idea1.saveToStorage(idea1);
