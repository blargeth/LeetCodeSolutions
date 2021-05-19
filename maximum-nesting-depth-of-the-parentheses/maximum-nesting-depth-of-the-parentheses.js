/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depthTracker = [];
    let max = 0;
  
  for (let i = 0; i < s.length; i++) {
    if ( s[i] === '(' ) {
      depthTracker.push('(');
    }
    if (depthTracker.length > max) {
      max += 1;
    }
    if ( s[i] === ')' ) {
      depthTracker.pop();
    }
  }
  return max;
};