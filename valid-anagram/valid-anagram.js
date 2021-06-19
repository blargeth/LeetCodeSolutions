/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let sObj = {};

  if (s.length !== t.length) {
    return false;
  }
  
  for (let i = 0; i < s.length; i++) {
    if (!sObj[s[i]]) {
      sObj[s[i]] = 1;
    } else {
      sObj[s[i]] += 1;
    }
    
    if (!sObj[t[i]]) {
      sObj[t[i]] = -1;
    } else {
      sObj[t[i]] -= 1;
    }
    
  }
  
  console.log(sObj)
  
  for (let key in sObj) {
    if (sObj[key] !== 0) {
      return false;
    }

  }
  return true;
};