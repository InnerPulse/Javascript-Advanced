
function orbit(input) {
  const [width, height, a, b] = input;
  const matrix = new Array(width).fill(0).map((el) => (el = new Array(height).fill(0)));
  matrix[a][b] = 1;
  fill(a, b, 2)

  for (let i = a; i < matrix.length; i++) {
    for (let y = b + 1; y < matrix[i].length; y++) {
      fill(i, y, matrix[i][y] + 1);
    }
    for (let y = b - 1; y >= 0; y--) {
      fill(i, y, matrix[i][y] + 1);
    }
  }

  for (let i = a - 1; i >= 0; i--) {
    for (let y = b + 1; y < matrix[i].length; y++) {
      fill(i, y, matrix[i][y] + 1);
    }
    for (let y = b - 1; y >= 0; y--) {
      fill(i, y, matrix[i][y] + 1);
    }
  }

  function fill(i, y, num) {
    if (matrix[i - 1]) {
      if (matrix[i - 1][y] == 0) {
        matrix[i - 1][y] = num;
      }
      if (matrix[i - 1][y - 1] == 0) {
        matrix[i - 1][y - 1] = num;
      }
      if (matrix[i - 1][y + 1] == 0) {
        matrix[i - 1][y + 1] = num;
      }
    }

    if (matrix[i][y - 1] == 0) {
      matrix[i][y - 1] = num;
    }
    if (matrix[i][y + 1] == 0) {
      matrix[i][y + 1] = num;
    }

    if (matrix[i + 1]) {
      if (matrix[i + 1][y] == 0) {
        matrix[i + 1][y] = num;
      }
      if (matrix[i + 1][y - 1] == 0) {
        matrix[i + 1][y - 1] = num;
      }
      if (matrix[i + 1][y + 1] == 0) {
        matrix[i + 1][y + 1] = num;
      }
    }
  }

  matrix.forEach((el) => console.log(el.join(" ")));
}