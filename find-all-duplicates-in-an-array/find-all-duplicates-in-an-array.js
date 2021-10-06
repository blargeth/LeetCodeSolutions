/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let count = {};
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (!count[num]) count[num] = 1;
        else result.push(num);
    }
    return result;
};