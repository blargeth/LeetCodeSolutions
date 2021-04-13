/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  //check if k is pos or neg or 0
  //push result to array
  
  let sumUp = (array, start) => { 
    let sum = 0;
    for (let i = start + 1; i <= (start + k); i++) {
      sum += array[i];
    }
    return sum;
  }
  
  let sumDown = (array, start) => { 
    let sum = 0;
    for (let i = start + code.length - 1 ; i >= (start + code.length + k); i--) {
      console.log(array[i], i)
      sum += array[i];
    }
    return sum;
  }
  
  if (k === 0 ) {
    return new Array(code.length).fill(0);
  }
  let newArray = code.concat(code);
  let result = [];
  
  if ( k < 0) {
    for (let i = 0; i < code.length; i++) {
      result.push(sumDown(newArray, i))
    }
  }
  
  if (k > 0) {
    for (let i = 0; i < code.length; i++) {
      result.push(sumUp(newArray, i))
    }
  }
  return result;
};

