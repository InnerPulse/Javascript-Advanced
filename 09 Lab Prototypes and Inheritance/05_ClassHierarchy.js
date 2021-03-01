function classHierarchy() {
    class Figure {
        constructor(unit = 'cm') {
            this.defaultUnit = unit;
        }

        scale(x) {
            switch (this.defaultUnit) {
                case 'mm':
                    x = x * 10;
                    break;
                case 'm':
                    x = x / 1000;
                    break;
                default:
                    x;
                    break;
            }
            return x;
        }

        get area() {
            return null;
        }

        changeUnits(unit) {
            if (unit === 'm' || unit == 'cm' || unit == 'mm') {
                this.defaultUnit = unit;
            }
        }

        toString() {
            return `Figures units: ${this.defaultUnit}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this._radius = radius;
        }

        get radius() {
            return this.scale(this._radius);
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `Figures units: ${this.defaultUnit} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, unit) {
            super();
            this.defaultUnit = unit;
            this._width = width;
            this._height = height;
        }

        get width() {
            return this.scale(this._width);
        }

        get height() {
            return this.scale(this._height);
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `Figures units: ${this.defaultUnit} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    const c = new Circle(5);

    console.log(c.area); // 78.53981633974483
    console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

    const r = new Rectangle(3, 4, 'mm');

    console.log(r.area); // 1200
    console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

    r.changeUnits('cm');
    console.log(r.area); // 12
    console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

    c.changeUnits('mm');
    console.log(c.area); // 7853.981633974483
    console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50

    return { Figure, Circle, Rectangle };
}
