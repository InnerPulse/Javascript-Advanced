// Constraints: Structure your code as an IIFE function.

(() => {
  String.prototype.ensureStart = function (str) {
    if (!this.startsWith(str)) {
      return str.concat(this);
    } else {
      return this.toString();
    }
  };

  String.prototype.ensureEnd = function (str) {
    if (!this.endsWith(str)) {
      return this.concat(str);
    }

    return this.toString();
  };

  String.prototype.isEmpty = function () {
    return !Boolean(this.length);
  };

  String.prototype.truncate = function (x) {
    if (x < 4) {
      return '.'.repeat(x);
    }

    if (this.length <= x) {
      return this.toString();
    }

    if (!this.includes(' ')) {
      return this.slice(0, x - 3).concat('...');
    } else {
      const toArr = this.split(' ').map((el) => el + ' ');
      let newString = '';

      while ((newString + toArr[0]).length < x) {
        newString += toArr.shift();
      }

      if (!newString) {
        return newString.concat(toArr[0].slice(0, x - 3)).concat('...');
      }

      return newString.trim().concat('...');
    }
  };

  // Constraints: 'format' method needs to be static, therefore
  // is attached to the String Object instead of it's prototype
  String.format = function (str, ...params) {
    params.forEach((key, index) => {
      str = str.replace(`{${index}}`, key);
    });
    return str;
  };
})();
