const TwoDimention = require("./twoDimention");

class Rectangle extends TwoDimention {
  constructor(length, width) {
    super("Rectangle");

    this.length = length;
    this.width = width;
  }

  // Overloading
  introduce(who) {
    super.introduce();
    console.log(`${who}, This is ${this.name}!`);
  }

  // Overridding
  calculateArea() {
    super.calculateArea();
    let area = this.length * this.width;

    console.log(`${this.name} area is ${area} cm2 \n`);
  }

  calculateCircumference() {
    super.calculateCircumference();
    let circumference = 2 * (this.length + this.width);

    console.log(`${this.name} area is ${circumference} cm \n`);
  }
}

module.exports = Rectangle;
