class Comment {
  constructor(commentBody) {
    this.commentBody = commentBody;
  }

  saveToStorage(array, index) {
    var tempArray = JSON.parse(localStorage.getItem(array)) || [];
    tempArray[index].comments.push(this.commentBody);
    localStorage.setItem(array, JSON.stringify(tempArray));
  }

  deleteFromStorage() {

  }
}