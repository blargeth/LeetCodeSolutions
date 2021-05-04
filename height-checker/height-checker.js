/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    
  let expected = heights.slice().sort((a, b) => a - b);
  result = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      result += 1;
    }
  }
  return result;
};