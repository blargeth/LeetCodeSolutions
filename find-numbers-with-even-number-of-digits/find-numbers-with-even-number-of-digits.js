/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let result = 0;
  
  for (let i = 0; i < nums.length; i++) {
    let stringLength = nums[i].toString().length;
    if (stringLength % 2 === 0) {
      result += 1;
    }
  }
  return result;
};