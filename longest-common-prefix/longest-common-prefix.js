/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  
  let i = 1;
  while (true) {
    const reducer = (accum, current) => {

      return [...accum, current.slice(0, i)]
    }
    
    let prefixes = strs.reduce(reducer, []);
    let test = prefixes[0];
    if (!prefixes.every((item) => test === item) || i > test.length) return test.slice(0, i - 1);
    // console.log(prefixes);
    
    i++;
  }

};