/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
  let count = 0;
  let result = [];
  
  for (let i = 0; i < target.length; i++) {
    count += 1;
    result.push('Push');
    while (count < target[i] ) {
      result.push('Pop')
      result.push('Push')
      count ++;
    }
    
  }
  
  return result;
};