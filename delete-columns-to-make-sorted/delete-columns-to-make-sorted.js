/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let result = 0;
    const wordLength = strs[0].length;
    const arrLength = strs.length - 1;
    for (let j = 0; j < wordLength; j++) {
      for (let i = 0; i < arrLength; i++) {
        // console.log(strs[i].charAt(j), strs[i + 1].charAt(j))
        if (strs[i][j] > strs[i + 1][j]) {
          result += 1;
          break;
        }
      }
    }
  return result;
};