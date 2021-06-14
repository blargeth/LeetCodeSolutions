/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  let hash = {};
  
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = true;
    } else {
      hash[nums[i]] = false;
    }
  }
  let result = 0;
  for (let key in hash) {
    // console.log(key, result, hash)
    if (hash[key] === true) {
      result = result + parseInt(key);
    }
  }
  
  return result;
};