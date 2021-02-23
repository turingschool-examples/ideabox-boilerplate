class Idea {
  constructor(obj) {
    this.id = Date.now();
    this.title = obj.title;
    this.body = obj.body;
    this.star = obj.star;
  }
  saveToStorage() {}
  deleteFromStorage() {}
  updateIdea() {}
}
