function jansNatation(params) {
  let throwError = false;
  const numberCollection = [];
  const operatons = {
    "+": (x, y) => {
      return x + y;
    },
    "-": (x, y) => {
      return x - y;
    },
    "*": (x, y) => {
      return x * y;
    },
    "/": (x, y) => {
      return x / y;
    },
  };
  params.forEach((el) => {
    if (!isNaN(el)) {
      numberCollection.push(el);
    } else {
      const operation = operatons[el];
      const [x, y] = numberCollection.splice(-2);
      if ((x || x === 0) && (y || y === 0)) {
        numberCollection.push(operation(x, y));
      } else {
        throwError = true;
        console.log(`Error: not enough operands!`);
      }
    }
  });

  if (throwError === false) {
    numberCollection.length === 1
      ? console.log(numberCollection[0])
      : console.log(`Error: too many operands!`);
  }
}