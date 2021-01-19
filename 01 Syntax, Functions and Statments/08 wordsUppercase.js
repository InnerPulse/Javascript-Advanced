function wordsUpercase(str) {
  return str
    .match(/[\w]+/g)
    .map((x) => x.toUpperCase())
    .join(", ");
}