/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let stack = [];
  let result = '';
  for (let i = 0; i < S.length; i++) {
    if ( S[i] === '(' ) {
      stack.push('(');
    }
    if ( stack.length !== 1 ) {
      result += S[i];
    }
    if ( S[i] === ')' ) {
      stack.pop();
    }
  }
  return result;
};