class Idea {
  constructor(title, body, star) {
    this.id = this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = undefined ? true : star;
  }
}
