class Idea {
  constructor(title, body, star) {
    this.id = Date.now() + Math.random();
    this.title = title;
    this.body = body;
    this.star = star || false;
  }

  changeStarred() {
       this.star = !this.star;
    }


// should only have one job which is to save the instance to storage
  saveToStorage() {
    localStorage.setItem()
  }
    //take obj and save to local saveToStorage
    // use window.localStorage.setItem(keyword to save the item), JSON.stringify(item to save).

  deleteFromStorage() {
  }
    //use localStorage.removeItem() to remove from local storage

// should be able to update the idea’s title, body, or starred state
  updateIdea() {
    }

}
//get the item from local storage by calling getItem(name we saved it as)
    //take string that getItem() returns and use JASON.parse()
    //to turn it back into an obj/update the data
    //save it back into local storage iwth the same key we
