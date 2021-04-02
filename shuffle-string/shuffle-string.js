/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  let obj = {};
  let result = '';
  for (let i = 0; i < indices.length; i++) {
    obj[indices[i]] = s[i]; 
  }
  
  for (let i = 0; i < indices.length; i++) {
    result += obj[i]
  }
  return result;
};