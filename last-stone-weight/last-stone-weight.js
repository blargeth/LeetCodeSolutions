/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  let result = 0;
  
  let helper = (s) => {
    s.sort((a,b) => b - a);
    if ( s.length === 0) {
      result = 0;
      return;
    }
    if ( s.length === 1) {
      result = s[0];
      return;
    }
    if (s[0] === s[1]) {
      s.shift();
      s.shift();
    }
    if (s[0] - s[1] > 0) {
      s.push(s[0] - s[1]);
      s.shift();
      s.shift();
    }
    helper(s.sort((a,b) => b - a));
  }
  helper(stones);
  return result;
};