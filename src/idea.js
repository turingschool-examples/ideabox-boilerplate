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
    localStorage.setItem("ideaCard", stringifiedObject);
  }

  deleteFromStorage() {
    localStorage.removeItem(`ideaCard`);
  }

// comments, remove from storage, adding to storage, or favorited:
  updateIdea(newIdea) {
    // this.title = newIdea.title;
    // this.body = newIdea.body;
    newIdea.star = true;
  }

}

// var idea1 = new Idea("A New Title", "Something brilliant!");
// idea1.saveToStorage(idea1);
//
// var idea1 = new Idea(${inputTitle.value}, "Something brilliant!");
