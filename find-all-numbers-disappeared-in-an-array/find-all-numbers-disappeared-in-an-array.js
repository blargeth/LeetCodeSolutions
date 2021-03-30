/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let setNums = new Set(nums);
  
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (!setNums.has(i + 1)) {
      result.push(i+1)
    }
  }

  return result;
};