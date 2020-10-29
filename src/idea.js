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

    }

    deleteFromStorage() {

    }

    updateIdea() {

    }

};