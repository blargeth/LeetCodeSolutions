/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  
  let start = -1;
  let count = 0;
  
  let array = nums.filter(num => num === target).length - 1;
  if (array === -1) {
    return [-1, -1]
  } 
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        if (count === 0 ) {
          start = i;
          break;
        }
      }
    }

  return [start, start + array]
};