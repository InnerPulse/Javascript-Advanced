function rotate(arr, n) {
  const copy = [...arr];
  for (let index = n; index > 0; index--) {
    copy.unshift(copy.pop());
  }
  return copy.join(" ");
}