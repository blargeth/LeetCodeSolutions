/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let sum = 0;
  let realSum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum = sum + nums[i];
      realSum = realSum + i+1
    }
  return realSum - sum;
};