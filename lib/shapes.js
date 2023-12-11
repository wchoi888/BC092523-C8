// creating a parent shape class for other shapes

class Shape {
  constructor() {
    this.color = "black";
  }
  setColor(color) {
    this.color = color;
  }
}

module.exports = Shape;
