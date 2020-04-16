class Idea {
  constructor(id, title, body, star) {
    this.id = id || (Date.now() + Math.random());
    this.title = title;
    this.body = body;
    this.star = star || false;
  }

  changeStarred() {
    this.star = !this.star;
  }
  saveToLocalStorage() {
    localStorage.setItem('savedIdeasArray', JSON.stringify(savedIdeasArray));
  }
  retrieveFromLocalStorage() {
    savedIdeasArray = JSON.parse(localStorage.getItem('savedIdeasArray')) || [];
    for(var i = 0; i < savedIdeasArray.length; i++) {
      var currentIdea = savedIdeasArray[i];
      var reinstatedIdea = new Idea(currentIdea.id, currentIdea.title, currentIdea.body, currentIdea.star);
      savedIdeasArray[i] = reinstatedIdea;
    }
    return savedIdeasArray;
  }
  deleteFromStorage() {
    this.retrieveFromLocalStorage();
    for(var i = 0; i < savedIdeasArray.length; i++) {
      var currentIdea = savedIdeasArray[i]
      if (currentIdea.id === this.id) {
        savedIdeasArray.splice(i, 1);
        this.saveToLocalStorage();
      }
    }
  }
  updateIdea(id, title, body, star) {
    this.retrieveFromLocalStorage();
    for(var i = 0; i < savedIdeasArray.length; i++) {
      if (savedIdeasArray[i].id === id) {
        savedIdeasArray.splice(i, 1); 
        var updatedIdea = new Idea(id, title, body, star)
        savedIdeasArray.push(updatedIdea);
        updatedIdea.saveToLocalStorage();
      }
      return savedIdeasArray;
    }
  }
}
