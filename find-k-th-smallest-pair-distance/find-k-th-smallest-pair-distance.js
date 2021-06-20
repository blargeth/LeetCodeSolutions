/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
  //initialize distances with the max number of distances that can be created by the integers in nums
  let distanceCount = new Array( Math.max(...nums)).fill(0);
  //fill the array with the count of the distances
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      distanceCount[Math.abs(nums[i] - nums[j])] += 1;
    }
  }
  // console.log(distanceCount)
  let result = k;
  
  for (let i = 0; i < distanceCount.length; i++) {
    if (distanceCount[i] > 0) {
      result = result - distanceCount[i];

    }
    if (result <= 0) {
      return i;
    }
    // console.log(i, result)
  }
};