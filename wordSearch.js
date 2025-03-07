/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

function backtrack(board, n_rows, n_cols, row, col, suffix) {
  if (!suffix.length) return true;
  if (row < 0 || row >= n_rows) return false;
  if (col < 0 || col >= n_cols) return false;
  if (board[row][col] !== suffix[0]) return false;

  board[row][col] = "#";

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (const [row_offset, col_offset] of directions) {
    if (
      backtrack(
        board,
        n_rows,
        n_cols,
        row + row_offset,
        col + col_offset,
        suffix.substring(1),
      )
    ) {
      return true;
    }
  }

  board[row][col] = suffix[0];
  return false;
}

var exist = function (board, word) {
  const n_rows = board.length;
  const n_cols = board[0].length;
  for (let row = 0; row < n_rows; row++) {
    for (let col = 0; col < n_cols; col++) {
      if (backtrack(board, n_rows, n_cols, row, col, word)) return true;
    }
  }
  return false;
};

const test1 = {
  board: [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word: "ABCCED",
}; // output: true

const test2 = {
  board: [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word: "SEE",
}; // output: true

const test3 = {
  board: [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word: "ABCB",
}; // output: false

console.log(exist(test1.board, test1.word)); // true
console.log(exist(test2.board, test2.word)); // true
console.log(exist(test3.board, test3.word)); // false
