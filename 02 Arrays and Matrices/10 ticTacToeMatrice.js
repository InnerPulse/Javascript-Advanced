function ticTacToe(input) {
  const logs = [];
  const next = ["X", 0];
  const [...moves] = input;
  const board = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  const messages = {
    taken: "This place is already taken. Please choose another!",
    even: "The game ended! Nobody wins :(",
    print: (board) => {
      board.forEach((arr) => {
        console.log(arr.join("\t"));
      });
    },
  };

  while (moves.length) {
    next[1] % 2 === 0 ? (next[0] = "X") : (next[0] = "O");
    next[1]++;
    const x = moves.shift().split(" ").map(Number);

    if (board[x[0]][x[1]] === false) {
      board[x[0]][x[1]] = next[0];
    } else {
      logs.push(messages.taken);
      again(next[0]);
    }

    //check for win
    if (win(board)) {
      logs.forEach((log) => console.log(log));
      return messages.print(board);
    }

    // check for free places
    if (board[0].concat(board[1], board[2]).every((el) => el !== false)) {
      logs.push(messages.even);
      logs.forEach((log) => console.log(log));
      return messages.print(board);
    }
  }

  function again(next) {
    const x = moves.shift().split(" ").map(Number);
    if (!x) {
      return;
    }
    if (board[x[0]][x[1]] === false) {
      board[x[0]][x[1]] = next;
    } else {
      logs.push(messages.taken);
      again(next);
    }
  }

  function win(board) {
    let validWin = false;
    const rows = [[], [], []];
    const columns = [[], [], []];
    const diagonals = [[], []];

    for (let i = 0; i < board.length; i++) {
      // rows
      for (let row = 0; row < board[i].length; row++) {
        rows[i].push(board[i][row]);
      }
      // columns
      for (let column = 0; column < board[i].length; column++) {
        columns[i].push(board[column][i]);
      }
      // diagonals !
      diagonals[0].push(board[i][i]);
      diagonals[1].push(board[i][board[i].length - 1 - i]);
    }

    whoWin(rows);
    whoWin(columns);
    whoWin(diagonals);

    function whoWin(matrix) {
      matrix.forEach((arr) => {
        const check = arr.every((el) => el === arr[0] && el !== false);
        if (check) {
          validWin = true;
          logs.push(`Player ${arr[0]} wins!`);
          return;
        }
      });
    }
    return validWin;
  }
  logs.forEach((log) => console.log(log));
  messages.print(board);
}