/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    total += arr[i];
    for (let j = i + 2; j < arr.length; j += 2) {
      // console.log( arr[j], 'j', j)
      let subArray = arr.slice(i, j + 1)
      // console.log(subArray, 'subarry')
      total += sumUp(subArray)
    }
  }
  return total;
};

function sumUp (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}