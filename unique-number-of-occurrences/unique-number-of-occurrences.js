/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let obj = {};
  
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) obj[arr[i]] = 1;
    else obj[arr[i]] += 1;
  }
  
  let dupeCount = {};
  
  for (let key in obj) {
    if (!dupeCount[obj[key]]) dupeCount[obj[key]] = 1;
    else return false;
  } 
  return true;
};