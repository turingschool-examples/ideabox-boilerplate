class Idea {
  constructor(titleInput, bodyInput) {
    this.id = Date.now();
    this.title = titleInput;
    this.body = bodyInput;
    this.starred = false;
  }



  saveToStorage() {
  // this is json stuff
  }

  deleteFromStorage() {
// more json stuff
  }

  updateIdea() {
// overwrite existing idea card -- erase and s
  }

  toggleStarred() {
    if (this.starred) {
       this.starred = false
    } else {
       this.starred = true
    }
  }
}
