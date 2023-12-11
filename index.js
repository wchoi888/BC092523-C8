// including require packages for the application

const inquirer = require("inquirer");
const Circle = require("./lib/circle");
const Triangle = require("./lib/triangle");
const Square = require("./lib/square");
const ShapeText = require("./lib/shapetext");
const WriteToFile = require("./lib/WriteToFile");

// creating an array of questions for user input
const questions = [
  {
    type: "list",
    name: "shapeType",
    message: "Please select the shape you want to generate",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "Input",
    name: "shapeColor",
    message: "Please enter the color of the shape",
  },
  {
    type: "Input",
    name: "inputText",
    message: "Please enter 3 characters",
  },
  {
    type: "Input",
    name: "inputColor",
    message: "Please enter the text color",
  },
];

//creating function for user to enter necessary input to render shape

function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);

    let shape;
    switch (data.shapeType) {
      case "Triangle":
        shape = new Triangle();
        break;
      case "Circle":
        shape = new Circle();
        break;
      case "Square":
        shape = new Square();
        break;
      default:
        console.log("invalid shape type");
        return;
    }
    shape.setColor(data.shapeColor);

    let content = shape.render();
    let text = new ShapeText();
    text.setText(data.inputText);
    text.setTextColor(data.inputColor);
    content += text.renderText();
    let fileWrite = new WriteToFile();
    fileWrite.write(content);
    console.log(content);
  });
}

init();
