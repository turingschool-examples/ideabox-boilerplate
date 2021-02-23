class Idea {
    constructor(title, text, star) {
        this.id = Date.now();
        this.title = title;
        this.text = text;
        this.isStar = star || false;
    }
}

// 