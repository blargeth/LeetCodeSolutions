/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    if (nums.length <= 1) {return nums;}

	// iterate through array 
    for (let i = 1; i < nums.length; i++){
		// replace current value in array with summation of current value & value of previous index
        nums[i] += nums[i-1];
    }
    return nums; // O(n) runtime using existing input array
};