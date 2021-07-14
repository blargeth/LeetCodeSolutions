/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  
  //pseudo 
  // create a map
  // loop thru each item in the array of nums
  // check for duplicates => if there is, continue
  // initialize the values of 
  
  // create variables for left, right, and current values
     // (if the values dont exist, default them to 0 for the cout)
     // result will be the max of the previous value and the new calculated value
    
  
  let count = {};
  let result = 0;
  
  for (let num of nums) {
    if (count[num]) continue;
    let left = count[num - 1] || 0;
    let right = count[num + 1] || 0;
    let length = left + right + 1  // the extra 1 is the value itself
    result = Math.max(length, result);
    // console.log(num, 'num', left, right, num - left, num + right)
    count[num - left] = length;
    count[num + right] = length;
    count[num] = length;
  }
  
  return result;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //////////////// solution! ////////////////////////////////
  
  //   const M = {}; // {number: length}
  //   let ret = 0;
  //   for (let a of nums) {
  //       if (M[a]) continue; // duplicates
  //       const left = M[a - 1] || 0;
  //       const right = M[a + 1] || 0;
  //       const length = left + right + 1;
  //       ret = Math.max(ret, length);
  //       M[a] = length;
  //       M[a - left] = length;
  //       M[a + right] = length;
  //   }
  // console.log(M)
  //   return ret;
};