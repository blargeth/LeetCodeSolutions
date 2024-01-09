/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    
    // create a result array of the same length
    // loop thru indices and place them there
    let length = s.length - 1
    let result = Array(length)
    
    for (let i = 0; i < s.length; i++) {
        result[indices[i]] = s[i];
    }
    return result.join('');
};