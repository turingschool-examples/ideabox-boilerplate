class Idea {
    constructor(title, body, id = Date.now(), star = false, comments = []) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.star = star;
        this.comments = comments;

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
        var retrievedIdea = localStorage.removeItem(`${this.id}`);
        var stringifiedIdea = JSON.stringify(this);
        var storedIdea = localStorage.setItem(`${this.id}`, stringifiedIdea);
    }

};
