/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let count = 0;
    grid.forEach((rowVal, i) => {
      rowVal.forEach((columnVal, j) => {
        if (rowVal[j] < 0) count ++;
      })
    })
  return count;
};