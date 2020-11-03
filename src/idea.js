class Idea {
  constructor(title, body, star, id) {
    this.title = title;
    this.body = body;
    this.star = star || false;
    this.id = id || Date.now();
  }

  updateIdea(newIdea) {
      if (newIdea.star === false) {
        newIdea.star = true;
      } else {
        newIdea.star = false;
      }
    }

  saveToStorage() {
   
  }

  deleteFromStorage() {
    
  }

  
}

  //   var retrievedObject = localStorage.getItem("ideaCards");
  //   var parsedObject = JSON.parse(retrievedObject);
  //   console.log(parsedObject);
  //   for (var i = 0; i < parsedObject.length; i++) {
  //     if (listId === parsedObject[i].id) {
  //     parsedObject.splice(i, 1);
  //     }
  //   } this.saveToStorage(parsedObject);
  // }

  // comments, remove from storage, adding to storage, or favorited:

  
