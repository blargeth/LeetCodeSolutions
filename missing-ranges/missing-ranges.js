/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */

const convert = (couplet) => {
  if (couplet[0] === couplet[1]) return couplet[0]+'';
  return couplet.join('->');
}

var findMissingRanges = function(nums, lower, upper) {
  let result = [];
  let added = [lower - 1, ...nums, upper + 1];
  for (let i = 0; i < added.length; i++) {
    let x = added[i+1] - added[i];
    if (added[i+1] === added[i]) continue;
    if (x >= 1 && added[i] + x - 1 >= added[i] + 1) {
      result.push(convert([added[i] + 1, added[i] + x - 1]));
    }

  }
  return result;
};