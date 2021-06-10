/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let helper = (word) => {
    return word.split('').reverse().join('');
  }
  let words = s.split(' ');
  let result = [];
  
  for (let i = 0; i < words.length; i++) {
    result.push(helper(words[i]));
  }
  
  return result.join(' ');
};