class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.isStarred = false;
  }
  saveToStorage() {
    localStorage.setItem("ideas", JSON.stringify(ideas));
  }

  deleteFromStorage() {
   saveToStorage()
  }

  updateIdea(title, body) {
   saveToStorage()
  }
}
