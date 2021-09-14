/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  
  
  
  
  
  
  
  ////////// SOLUTION///////////////////
  
  //pseudo:
  // create a result array
  // create a variable that calculates the product of all previous iterations
  // iterate thru and update each item in the list with the product
  // reinitialize variable to calculate the product going backwards
  // iterate backwards
  
  
  let products = Array(nums.length).fill(1)
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    products[i] = product
    product = product * nums[i];
  }
  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    products[i] *= product
    product = product * nums[i]
  }
  return products;
};