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

  /*
   * It seems you want a static method. Doing that looks like this:
   *
   *   static fromLocalStorage() {
   *     ...
   *   }
   *
   * Then you would do this:
   * 
   *   var ideas = Idea.fromLocalStorage()
   */
  updateIdea() {
    var retrievedObject = localStorage.getItem("ideaCards");
    /*
     * Maybe "ideas" (or "retrievedIdeas") is a better variable name here?  You
     * should prefer variable names describing the mental model you want the
     * reader of your code to have over names describing mundane operations.
     */
    var parsedObject = JSON.parse(retrievedObject);
    /*
     * JSON.parse has already given you an array of Ideas, so this work isn't
     * necessary.
     */
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

/*
 * This method is more like what I would think of as updating. If it's what you
 * want to do, I recommend calling the method "update"--because the things being
 * updated are already Ideas, it should be understood that Idea.update updates
 * ideas.
 *
 * Also, it's  worth asking yourself what updating should mean if you've got a
 * representation of this Idea in localStorage. (If I update an Idea, and
 * there's a version of it in localStorage, which one is the "right" one?)
 */

// updateIdea(newIdea) {
//   // this.title = newIdea.title;
//   // this.body = newIdea.body;
//   if (newIdea.star === false) {
//     newIdea.star = true;
//   } else {
//     newIdea.star = false;
//   }
// }
