/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  let length = nums.length;
  let counter = 0;
  let dupes = 0;
  
  for (let i = 0; i < length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      counter += 1;
      nums[counter] = nums[i+1]; 
    } else {
      dupes += 1;
    }
  }
  // console.log(counter)
  return nums.length - dupes;
};