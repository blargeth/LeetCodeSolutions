/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {

//   let result = '1';
  
//   while (n = n - 1 > 1) {
//     let next = '';
//     let count = 1;
//     let current = n[0];
    
//     for (let i = 0; i < result.length + 1; i++) {
//       if (current !== result[i]) {
//         next += `${count}${current}`
//         current = result[i];
//         count = 1;
        
//       } else {
//         count += 1;
//       }
//     }; 
//   }
  
//   return result;
  
  if (n === 1) {
    return "1";
  }
  const result = countAndSay(n - 1);
  const store = [];
  for (let i = 0; i < result.length; i++) {
    const currentChar = result[i];
    let count = 1;
    while (i < result.length - 1 && result[i] === result[i + 1]) {
      count++;
      i++;
    }
    store.push(`${count}${currentChar}`);
  }

  return store.join("");
};