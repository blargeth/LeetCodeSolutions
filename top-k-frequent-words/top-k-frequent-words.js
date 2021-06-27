/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {

  let obj = {};
  
  for (let i = 0; i < words.length; i++) {
    (obj[words[i]] === undefined) ? obj[words[i]] = 1 : obj[words[i]] += 1;
  }
  // console.log(obj)
  
  const arrObj = []
  for (let keys in obj){
    arrObj.push(keys)
  }

  arrObj.sort( (a, b) => {
    if (obj[a] === obj[b]) {
      return (a < b) ? -1 : 1;
    } else {
      return (obj[a] < obj[b]) ? 1 : -1;
    }
  })

  // console.log(arrObj)
  
  return arrObj.slice(0,k);
  // words.sort( (a, b) => {
  //   if (obj[a] === obj[b]) {
  //     return (a < b) ? -1 : 1;
  //   } else {
  //     return (obj[a] < obj[b]) ? 1 : -1;
  //   }
  // })
  // console.log(words)
};