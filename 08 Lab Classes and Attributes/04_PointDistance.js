class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    if (typeof value !== 'number') {
      throw new TypeError('x-coordinate must be a number');
    }
    this._x = value;
  }

  get y() {
    return this._y;
  }

  set y(value) {
    if (typeof value !== 'number') {
      throw new TypeError('y-coordinates must be a nuмber');
    }
    this._y = value;
  }

  static distance(a, b) {
    if (a instanceof Point == false || b instanceof Point == false) {
      throw new TypeError('Parameters must be of type Point');
    }
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(9, 8);
console.log(Point.distance(p1, p2)); // 5