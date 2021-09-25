/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  let stack = [0, 1, 1];
  let count = 2;
  let result = 0;
  
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  
  while (count !== n) {
    let newNum = stack[count] + stack[count - 1] + stack[count - 2];
    stack.push(newNum);
    result = newNum;
    count++;
  }
  return result;
};