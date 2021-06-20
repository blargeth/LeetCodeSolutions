/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
  //initialize distances with the max number of distances that can be created by the integers in nums
  let distanceCount = {};
  nums.sort( (a, b) => a - b);
  
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      distanceCount[Math.abs(nums[i] - nums[j])] = (distanceCount[Math.abs(nums[i] - nums[j])] === undefined) ? 1 : distanceCount[Math.abs(nums[i] - nums[j])] += 1;
    }
  }
  // console.log(distanceCount)
  let result = k;
  
  for (let key in distanceCount) {
    if (distanceCount[key] > 0) {
      result = result - distanceCount[key];

    }
    if (result <= 0) {
      return key;
    }
    // console.log(i, result)
  }
};