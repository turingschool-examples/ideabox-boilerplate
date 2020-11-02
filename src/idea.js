class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }

  saveToStorage(newIdea) {
    var stringifiedObject = JSON.stringify(newIdea);
    localStorage.setItem("ideaCards", stringifiedObject);
  }

  deleteFromStorage() {
    localStorage.removeItem(`ideaCards`); //backticks?
  }

  // comments, remove from storage, adding to storage, or favorited:
  updateIdea() {
    var retrievedObject = localStorage.getItem("ideaCards");
    var parsedObject = JSON.parse(retrievedObject);
    for (var i = 0; i < parsedObject.length; i++) {
      var parsedId = parsedObject[i].id;
      var parsedTitle = parsedObject[i].title;
      var parsedBody = parsedObject[i].body;
      var parsedStar = parsedObject[i].star;
      var newObject = {
        id: parsedId,
        title: parsedTitle,
        body: parsedBody,
        star: parsedStar
      };
      list.push(newObject);
      // return newObject;
    }
  }
}

// updateIdea(newIdea) {
//   // this.title = newIdea.title;
//   // this.body = newIdea.body;
//   if (newIdea.star === false) {
//     newIdea.star = true;
//   } else {
//     newIdea.star = false;
//   }
// }
