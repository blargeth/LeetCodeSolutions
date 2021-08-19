/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // iterate thru each letter in the haystack
  //when u get to a letter that is the same as the first letter in needle,
    // check the other letters
      // if the other letters are != at any point, then stop and keep going
  if (needle.length > haystack.length) return -1;  
  if (haystack === '') return 0;
  if (needle === '' && haystack.length >= 0) return 0;
 
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (needle.length === 1) return i;
      for (let j = 1; j < needle.length; j++) {
        // console.log(i,j, i+j)
        if (needle[j] !== haystack[i+j]) break;
        if (j === needle.length - 1) return i;
      }
    }
  }
  return -1;
};