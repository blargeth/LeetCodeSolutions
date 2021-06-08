/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  let result = s;
  
  let helper = ( word ) => {

    for (let i = 0; i < word.length - 1; i++) {
      if (word[i] === word[i+1]) {
        let removedDupes = word.split('');
        removedDupes.splice(i, 2);
        result = removedDupes.join('');
        helper(result);
        break;
      }
    }
    
    return result;
  }
  
  return helper(s);
};