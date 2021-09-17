/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  
  
  // create an object to hold the complement of the sum
  // iterate thru each item in nums
    // check if the current item is greater than 0 (if it exists)
      // if it does, return the indexes
  // set the complement equal to the index
  
  
  let obj = {};
  
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (obj[num] >= 0) return [obj[num], i];
    obj[target - num] = i;
  }
  
  
  
  
  
  
  
  
  
  
  
  //i array and integer
  //o couplet - with the indices of the solution
  //c there will ALWAYS be a solution, cant use 1 item twice
  //e a number in nums is greater than target? can possibly disregard
  
  
  // [ 15    2   11   7    1   ]  target is 9
  //   x                   y             
  // { 2: [7, 0], 11: [-2, 1], 15: [-6, 2],          .... "number": [nums[i], i]  }    [3, 0]
   
  // by using a map that will store the complements and the index
  

  
  
  
  
  
  
  
  
  
  
  
//   const map = new Map();
  
//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(nums[i], i);
//   }
};