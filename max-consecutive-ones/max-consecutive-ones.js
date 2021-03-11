/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let currMax = 0;
  
  if(nums.length === 1 && nums[0] === 1) {
    return 1;
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currMax++;
    } else if (nums[i] === 0) {
      if (currMax > max) {
        max = currMax;
      }
      currMax = 0;
    }
    if (i === nums.length - 1) {
      if (currMax > max) {
        max = currMax;
      }
    }
  }
  return max;
};