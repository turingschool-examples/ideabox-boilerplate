class Idea {
  constructor(title, body, star) {
    this.id = this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = undefined ? true : star;
  }
  saveToStorage() {
    //should only have one job which is to save the instance to storage
  }
  deleteFromStorage() {

  }
  updateIdea() {
    //should be able to update the idea’s title, body, or starred state
  }
}
