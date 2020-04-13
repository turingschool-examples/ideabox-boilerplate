class Idea {
  constructor(title, body, star) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = undefined ? false : star;
  }
}
