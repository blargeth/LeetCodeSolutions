/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = true;
    } else {
      obj[s[i]] = 'bleh';
    }
  }
  
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === true) {
      return i;
    }
    
  }
  return -1;
};