/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1
    } else {
      obj[nums[i]] += 1
    }
  }
  let mostFreq = 0;
  let result;
  for (let keys in obj) {
    if (obj[keys] > mostFreq) {
      mostFreq = obj[keys];
      result = keys;
    }
  }
  
  return result
};