/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  
  let obj = {};
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]] += 1;
    }
  }
  for (let keys in obj) {
    if (obj[keys] > max) {
      max = obj[keys];
    }
  }
  let result = []
  for (let keys in obj) {
    if (obj[keys] === max) {
      result.push(keys)
    }
  }
  let ans = Infinity;
  
  for (let i = 0; i < result.length; i++) {
    
    let first = nums.indexOf(parseInt(result[i]));
    let last = nums.lastIndexOf(parseInt(result[i]));
    let curr = nums.slice(first, last + 1).length;
    if (curr < ans) {
      ans = curr;
    }

  }

  return ans;
};