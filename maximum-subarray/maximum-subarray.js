/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  
  let currentSum = nums[0];
  let maxSum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    currentSum = Math.max(curr, currentSum + curr);
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
  
};