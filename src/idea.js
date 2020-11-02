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
    localStorage.setItem("ideaCards", stringifiedObject);
  }

  deleteFromStorage() {
    localStorage.removeItem(`ideaCards`); //backticks?
  }

  // comments, remove from storage, adding to storage, or favorited:
  updateIdea(newIdea) {
    // this.title = newIdea.title;
    // this.body = newIdea.body;
    if (newIdea.star === false) {
      newIdea.star = true;
    } else {
      newIdea.star = false;
    }
  }

}
