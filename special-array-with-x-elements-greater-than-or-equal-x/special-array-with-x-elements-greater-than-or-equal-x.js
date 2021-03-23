/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    
  for (let i = 0 ; i < nums.length; i++) {
    let test = nums.filter(item => item >= i + 1)
    console.log(test)
    if (test.length === i + 1) {
      return i + 1;
    }
  }
  return -1
};