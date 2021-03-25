/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  arr.sort((a,b) => a-b);
  let smallestDiff = arr[1] - arr[0];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] < smallestDiff) {
      smallestDiff = arr[i] - arr[i - 1];
    }
  }
  
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === smallestDiff) {
      result.push([arr[i-1], arr[i]]);
    }
  }
  return result
};