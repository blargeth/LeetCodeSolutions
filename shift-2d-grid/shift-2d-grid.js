/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  let rows = grid.length;
  let cols = grid[0].length;
  let arr = grid.flat();
  
  let rotate = k % (rows * cols);
  if (rotate === 0) return grid;
  
  let partOne = arr.slice(-rotate)
  let partTwo = arr.slice(0, -rotate)
  let result = partOne.concat(partTwo);

  let final = grid.slice();
  
  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
     final[i][j] = result[count];
      count ++;
    }
  }

  return final;
};