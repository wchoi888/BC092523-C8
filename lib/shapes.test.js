//including all required classes

const Circle = require("./circle");
const Triangle = require("./triangle");
const Square = require("./square");

// creating test cases for shapes
test("Render Triangle", () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
  );
});
test("Render Square", () => {
  const shape = new Square();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    '<rect width="150" height="150" x="75" y="35" fill ="blue" />'
  );
});

test("Render Circle", () => {
  const shape = new Circle();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    '<circle cx="150" cy="100" r="80" fill ="blue" />'
  );
});
