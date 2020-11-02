class Idea {
  constructor(title, body, id, star) {
    this.id = id || Date.now();
    this.title = title;
    this.body = body;
    this.star = star || false;
    this.comments = [];
  }

  saveToStorage(array) {
    var tempArray = JSON.parse(localStorage.getItem(array)) || [];
    tempArray.push(this);
    localStorage.setItem(array, JSON.stringify(tempArray));
  }

  deleteFromStorage(array, idea) {
    var tempArray = JSON.parse(localStorage.getItem(array));
    var indexOfIdea = tempArray.findIndex(function (element) {
      return element.id === parseInt(idea.id);
    });
    tempArray.splice(indexOfIdea, 1);
    localStorage.setItem(array, JSON.stringify(tempArray));
  }

  updateIdea(array, idea, index) {
    var tempArray = JSON.parse(localStorage.getItem(array));
    tempArray.splice(index, 1, idea)
    localStorage.setItem(array, JSON.stringify(tempArray));
  }
}