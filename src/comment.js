class Comment {
  constructor(commentBody) {
    this.commentBody = commentBody;
    //comment will be an object that takes up a space in the idea class. must have ID to match it to the idea
    //argument that we pass in would be Idea.id
  }

  saveToStorage(array, index) {
    var tempArray = JSON.parse(localStorage.getItem(array)) || [];
    tempArray[index].comments.push(this.commentBody);
    localStorage.setItem(array, JSON.stringify(tempArray));
  }

  deleteFromStorage() {

  }
}
