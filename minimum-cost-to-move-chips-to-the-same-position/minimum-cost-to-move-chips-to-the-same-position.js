/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
  let evens = 0, odds = 0;  
  for (let i = 0; i < position.length; i++) {

    if (position[i] % 2 === 0 ) {
      evens += 1;
    } else {
      odds += 1;
    }
  }
  
  return Math.min(evens, odds);
};