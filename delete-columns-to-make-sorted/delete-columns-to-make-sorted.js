/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let result = 0;
    for (let j = 0; j < strs[0].length; j++) {
      for (let i = 0; i < strs.length - 1; i++) {
        console.log(strs[i].charAt(j), strs[i + 1].charAt(j))
        if (strs[i].charAt(j) > strs[i + 1].charAt(j)) {
          result += 1;
          break;
        }
      }
    }
  return result;
};