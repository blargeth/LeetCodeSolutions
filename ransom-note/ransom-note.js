/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
  let obj = {};
  
  for (let i = 0; i < magazine.length; i++) {
    if (!obj[magazine[i]]) {
      obj[magazine[i]] = 1
    } else {
      obj[magazine[i]] +=1;
    }
  }
  
  for (let i = 0; i < ransomNote.length; i++) {
    if (obj.hasOwnProperty(ransomNote[i])) {
      obj[ransomNote[i]] --;
      if (obj[ransomNote[i]] < 0) {
        return false;
      }
    } else return false;
  }
  return true;
};