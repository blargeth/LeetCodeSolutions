/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
    

  
  
  //thought process: 
   
  // problems: combos! going to be a lot of going thru
  // "chains" bigger than a 3x
  
  
  
  //pseudo:
  
  // {optional} sanity check
  // variable to check to see if all the combos are done and you're actually at a stable state - isDone
  
  // double loop the check rows  -  "for each item on the board, check if theres 3 in a row" if there is, mark it as a negative of that number"
    // ALSO need to mark the board as not done (isDone = false)
  // double loop to check columns
    // same logic as checking rows
  
  //drop logic:
    // if board is not done (ie, !isDone)
    // store the "1 level down" index
    // iterate thru each item in the board and drop it down 1 if its a negative number
  
  
  /////////////////SOLUTION: with great logic

    let isDone = true;
    
    // mark rows
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length - 2; c++) {
            let num1 = Math.abs(board[r][c]);
            let num2 = Math.abs(board[r][c + 1]);
            let num3 = Math.abs(board[r][c + 2]);
            
            if (num1 === num2 && num2 === num3 && num1 !== 0) {
                board[r][c] = -num1;
                board[r][c + 1] = -num2;
                board[r][c + 2] = -num3;
                isDone = false;
            }
        }
    }
    //mark cols
    for (let r = 0; r < board.length - 2; r++) {
        for (let c = 0; c < board[0].length; c++) {
            let num1 = Math.abs(board[r][c]);
            let num2 = Math.abs(board[r + 1][c]);
            let num3 = Math.abs(board[r + 2][c]);
            
            if (num1 === num2 && num2 === num3 && num1 !== 0) {
                board[r][c] = -num1;
                board[r + 1][c] = -num2;
                board[r + 2][c] = -num3;
                isDone = false;
            }
        }
    }
    
    //drop
    if (!isDone) {
        for (let c = 0; c < board[0].length; c++) {
            let idx = board.length - 1;
            for (let r = board.length - 1; r >= 0; r--) {
                if (board[r][c] > 0) {
                    board[idx][c] = board[r][c];
                    idx--;
                }
            }
            for (let r = idx; r >= 0; r--) {
                board[r][c] = 0;
            }
        }
    }

    if (isDone) return board
    else return candyCrush(board);
  
};