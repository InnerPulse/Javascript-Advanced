class Rectangle {
  constructor(width, height, color) {
    (this.width = width),
      (this.height = height),
      (this.color = color.slice(0, 1).toUpperCase() + color.slice(1));
  }
  calcArea() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(4, 5, 'red');
