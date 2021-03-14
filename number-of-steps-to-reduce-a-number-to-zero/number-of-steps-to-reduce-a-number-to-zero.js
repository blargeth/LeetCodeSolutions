/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
  let counter = 0;
  let helper = (num) => {
    if (num === 0 ) {
      return;
    }
    counter++;
    if (num % 2 === 0) {
      helper(num / 2);
    } 
    else if (num % 2 !== 0) {
      helper(num - 1);
    }
  }
  helper(num);
  return counter;
};