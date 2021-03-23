/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let index = 0;
  let aCount = 0;
  
  while (index < s.length) {
    if (s[index] === 'A') {
      aCount ++;
    }
    if (index >= 2 && s[index] ==='L' && s[index - 1] ==='L' && s[index - 2] ==='L') {
      return false;
    }
    
    if (aCount === 2) {
      return false;
    }
    index++;
  }
  return true;
};