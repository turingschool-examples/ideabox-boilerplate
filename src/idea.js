class Idea {
    constructor(title, body) {
        this.id = Date.now();
        this.title = title;
        this.body = body;
        this.star = false;
        this.comments = [];
    }
    toggleStar() {
        this.star = !this.star;
    }
    saveToStorage() {
      var stringifiedIdea = JSON.stringify(this);
      var storedIdea = localStorage.setItem(`${this.id}`, stringifiedIdea);
    }

    deleteFromStorage() {
      var retrievedIdea = localStorage.removeItem(`${this.id}`);
    }

    updateIdea() {

    }

};
