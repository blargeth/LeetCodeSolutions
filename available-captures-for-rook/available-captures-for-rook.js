/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  let x;
  let y;
  let result = 0;
  // find piece positions
  board.forEach((row, i )=> {
    row.forEach((col, j) => {

        if (col === "R") {
          x = i;
          y = j;
      }
    })
  })
  
  // calculate pawn attacks
  //check above
  for (let i = x; i >= 0; i--) {
    if (board[i][y] === "B") {
      break;
    }
    if (board[i][y] === "p") {
      result = result + 1;
      break;
    }
  }
  //check below
  for (let i = x; i < board.length; i++) {
  if (board[i][y] === "B") {
    break;
  }
  if (board[i][y] === "p") {
    result = result + 1;
    break;
  }
}
  
  //check left
  for (let i = y; i >= 0; i--) {
  if (board[x][i] === "B") {
    break;
  }
  if (board[x][i] === "p") {
    result = result + 1;
    break;
  }
}
  //check right
  for (let i = y; i < board.length; i++) {
  if (board[x][i] === "B") {
    break;
  }
  if (board[x][i] === "p") {
    result = result + 1;
    break;
  }
}
  return result;
};