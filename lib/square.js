// creating class to render square shape

const Shape = require("./shapes");

class Square extends Shape {
  render() {
    return `<rect width="150" height="150" x="75" y="35" fill ="${this.color}" />`;
  }
}

module.exports = Square;
