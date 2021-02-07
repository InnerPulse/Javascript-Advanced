class Stringer {
  constructor(string, length) {
    this.innerString = string;
    this.innerLength = length;
  }

  increase(x) {
    this.innerLength += x;
  }

  decrease(x) {
    this.innerLength = this.innerLength - x < 0 ? 0 : this.innerLength - x;
  }

  toString() {
    if (this.innerString.length > this.innerLength) {
      return this.innerString.substring(0, this.innerLength) + '...';
    } else if (this.innerLength == 0) {
      return '...';
    }
    return this.innerString;
  }
}

const test = new Stringer('Test', 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
