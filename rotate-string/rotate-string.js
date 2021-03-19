/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  
  if (A.length !== B.length) return false;
  if (A === '' && B ==='') return true;
  let rotatedA = A;
  for (let i = 0 ; i < A.length; i++) {
    rotatedA = rotatedA.substring(1, rotatedA.length) + rotatedA[0];
    if (rotatedA === B) return true;
  }
  return false;
};