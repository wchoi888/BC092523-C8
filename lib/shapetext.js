//creating class to render text on shapes

class ShapeText {
  constructor() {
    this.textColor = "white";
    this.text = "SVG";
  }
  setText(text) {
    this.text = text;
  }
  setTextColor(color) {
    this.textColor = color;
  }
  renderText() {
    return `<text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}
module.exports = ShapeText;
