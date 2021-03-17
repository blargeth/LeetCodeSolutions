/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  
  s.sort( (a, b) => { return a - b});
  
  let satisfiedKids = g.filter(greedLevel => {
    for (let i = 0; i < s.length; i++) {
      if (greedLevel <= s[i]) {
        s.splice(i,1);
        return true;
      }
    }
    return false;
  }).length;
  
  return satisfiedKids;
};