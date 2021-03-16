/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  
  let isPal = x.toString();
  let length = isPal.length - 1;
  for (let i = 0; i < (isPal.length - 1) / 2;i++) {
    if (isPal[i] !== isPal[length - i]) {
      return false;
    }
  }
  return true;
};