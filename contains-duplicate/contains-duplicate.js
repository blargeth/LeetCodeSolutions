/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  
  //create hash
  // if the item exists in the hash, then return true
  // else return false
  
  let hash = {};
  
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) return true;
    else hash[nums[i]] = true;
  }
  
  return false;
  
  
  /////////// Previous code //////////////////
  
  //going to try reduce
  const obj = nums.reduce(( acc, val) => {
    (!acc[val]) ? acc[val] = 1 : acc[val] += 1;
    return acc;
  }, {})
  for (let key in obj) {
    if (obj[key] > 1) {
      return true;
    }
  }
  return false;
};