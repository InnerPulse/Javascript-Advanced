function diagonalAttack(input) {
  const matrix = input.map((arr) => arr.split(" ").map(Number));
  const print = (matrix) => {
    matrix.forEach((line) => console.log(line.join(" ")));
  };
  const rearrange = (matrix, sum) => {
    for (let i = 0; i < matrix.length; i++) {
      for (let y = 0; y < matrix[i].length; y++) {
        if (y !== i && y !== matrix[i].length - 1 - i) {
          matrix[i][y] = sum;
        }
      }
    }
    print(matrix);
  };

  const diagonals = matrix.reduce(
    (acc, c, i, arr) => {
      acc.a.push(arr[i][i]);
      acc.b.push(arr[i][arr.length - 1 - i]);
      return acc;
    },
    { a: [], b: [] }
  );

  diagonals.a.reduce((acc, c) => (acc += c)) === diagonals.b.reduce((acc, c) => (acc += c))
    ? rearrange(
        matrix,
        diagonals.a.reduce((acc, c) => (acc += c))
      )
    : print(matrix);
}