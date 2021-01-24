function everyNthElement(arr, n) {
  return arr.reduce((acc, e, i) => {
    i === 0 || i % n === 0 ? acc.push(e) : (acc = acc);
    return acc;
  }, []);
}
