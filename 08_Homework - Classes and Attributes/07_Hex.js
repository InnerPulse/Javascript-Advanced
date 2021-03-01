class Hex {
    constructor(x) {
        this.x = x;
    }

    valueOf() {
        return this.x;
    }

    toString() {
        return '0x' + this.x.toString(16).toUpperCase();
    }

    plus(x) {
        const number = Number.isInteger(x) ? x : parseInt(x, 16);
        return new Hex(this.x + number);
    }

    minus(x) {
        const number = Number.isInteger(x) ? x : parseInt(x, 16);
        return new Hex(this.x - number);
    }

    parse(hexadecimal) {
        return parseInt(hexadecimal, 16);
    }
}

const hex = new Hex(255);
console.log(hex.toString()); // 0xFF

hex.valueOf() + 1 == 256;

const a = new Hex(10);
const b = new Hex(5);
console.log(a.plus(b)); // Hex { x: 15 }
console.log(a.plus(b).toString() === '0xF'); // true
