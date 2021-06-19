/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

  const result = [];

  const iterator = ( current, start ) => {
    result.push(current);
    for (let i = start; i < nums.length; i++) {
      iterator( current.concat(nums[i]), i + 1)
    }
  }
  
  iterator([], 0);
  return result;
  
};