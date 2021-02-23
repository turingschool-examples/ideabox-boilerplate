class Idea {
  constructor(title, text, star) {
    this.id = Date.now();
    this.title = title;
    this.text = text;
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