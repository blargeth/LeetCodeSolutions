/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {

  let copyArr = [];
  
  // return a number of living neighbor cells
  let neighborReturner = ( currRow, currCol ) => {
    let sum = 0;
    let coords = [[-1, -1], 
                  [-1, 0], 
                  [-1, 1], 
                  [0, -1],
                  [0, 1],
                  [1, -1],
                  [1, 0], 
                  [1, 1]]

    for (let i = 0; i < 8; i++) {
      let x = currRow + coords[i][0];
      let y = currCol + coords[i][1];
      neighbor = [];
      if (x > -1 && y > -1 && x < board.length && y < board[0].length) {
        if (board[x][y] === 1) {
          neighbor.push(board[x][y])
          sum++;
        }
      }

    }
    //console.log(neighbor, 'neighbor')
    return sum;
  }
  
  // 2 for loops to go thru each item in the board
  for (let row = 0; row < board.length; row++) {
    copyArr.push([]);
    for (let col = 0; col < board[row].length; col++) {
      let aliveNeighbors = neighborReturner(row, col);
      console.log(aliveNeighbors, `(${row}, ${col})`)
      //alive conditions
      if (board[row][col] === 1) {
        if (aliveNeighbors < 2) {
          console.log('this cell is alive and has less than 2 neighbors')
          copyArr[row].push(0);
          console.log(copyArr, 'after the assignment')
        }
        else if (aliveNeighbors === 2 || aliveNeighbors === 3) {
          copyArr[row].push(1);
        } else {
          copyArr[row].push(0);
        }
      // dead conditions
      } else {
        if (aliveNeighbors === 3) {
          // copyArr[row][col] = 1;
          copyArr[row].push(1)
        } 
        else {
          // copyArr[row][col] = 0;
          copyArr[row].push(0)
        }
      }
    }
  }
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = copyArr[i][j];
    }
  }
  
  // return board;

};