/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    if (s.length <= 1) return 0;
    let prevStreak = 0; 
    let countStreak = 1;
    let result = 0;

    for (let i = 1; i < s.length; i++) { 
      
        if (s[i - 1] === s[i]) 
          countStreak++; 
        else { 
          prevStreak = countStreak; 
          countStreak = 1;     
        }
      
        if (prevStreak >= countStreak) 
          result++;
    }
  
    return result;   
};