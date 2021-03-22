/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    
  let iCount = 0;
  let dCount = S.length;
  let result = [];
  for (let i = 0; i <= S.length; i++) {
    if (S[i] ==="I") {
      result.push(iCount);
      iCount++
    } else {
      result.push(dCount);
      dCount --;
    }
  }
  return result;
};