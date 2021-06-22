/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  
  const helper = ( s, pair1, pair2 ) => {
    let stack = 0;
    let string = '';
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] === pair1) {
        stack++;
      } else if (s[i] === pair2) {
        if (stack === 0) continue;
        stack--;
      }
      string += s[i];
    }
    return string; 
  }

  let modString = helper(s, '(',')');
  let blah = helper(modString.split('').reverse().join(''), ')', '(');
  return blah.split('').reverse().join('');
  
};