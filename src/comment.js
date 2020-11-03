class Comment {
  constructor(commentBody) {
    this.commentBody = commentBody;
  }

  saveToStorage(array, index) {
    var tempArray = JSON.parse(localStorage.getItem(array)) || [];
    tempArray[index].comments.push(this.commentBody);
    localStorage.setItem(array, JSON.stringify(tempArray));
  }

  deleteFromStorage(array, idIndex, commentIndex) {
    var tempArray = JSON.parse(localStorage.getItem(array));
    var indexOfIdea = tempArray.findIndex(function (element) {
      return element.id === parseInt(idea.id);
    });
    tempArray.splice(indexOfIdea, 1);
    localStorage.setItem(array, JSON.stringify(tempArray));
  }

}