class Idea {
  constructor(title, input, star) {
    this.id = Date.now();
    this.title = title;
    this.text = input;
    this.isStar = star || false;
 }
  saveToStorage() {
        //to be complated later
  }

  deleteFromStorage() {
    // to be updated later
  }

  updateIdea() {
    // update title/body/star state
  }

}