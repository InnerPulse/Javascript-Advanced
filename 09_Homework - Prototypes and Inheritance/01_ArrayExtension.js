// Constraints: Structure your code as an IIFE function.

(() => {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (x) {
        const result = [];

        // one way
        for (let i = x; i < this.length; i++) {
            result.push(this[i]);
        }

        return result;

        // another way
        return this.reduce((a, c) => {
            if (this.indexOf(c) >= x) {
                a.push(c);
            }
            return a;
        }, []);
    };

    Array.prototype.take = function (x) {
        return this.reduce((a, c, i) => {
            if (i < x) {
                a.push(c);
            }
            return a;
        }, []);
    };

    Array.prototype.sum = function () {
        return this.reduce((a, c) => (a += c), 0);
    };

    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
})();

const arrayExample = [1, 2, 3, 4, 5];

// console.log(arrayExample.last());       // 5
// console.log(arrayExample.skip(4));      // [ 5 ]
// console.log(arrayExample.take(1));      // [ 1 ]
// console.log(arrayExample.sum());        // 15
// console.log(arrayExample.average());    // 3
