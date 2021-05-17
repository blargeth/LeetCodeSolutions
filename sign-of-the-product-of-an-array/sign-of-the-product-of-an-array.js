/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  let isNeg = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return 0;
    }
    if (nums[i] < 0) {
      isNeg = !isNeg;
    }
  }
  return isNeg ? -1 : 1;
};