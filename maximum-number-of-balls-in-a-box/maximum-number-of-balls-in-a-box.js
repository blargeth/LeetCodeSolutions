/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    
  let toDigitSum = (number) => {
    let sum = 0;
    while (number >= 1) {
      let digit = number % 10;
      sum += digit;     
      number = (number - digit ) / 10;
    }
    return sum;
  }
  
  let hashbrown = {};
  
  for (let i = lowLimit; i <= highLimit; i++) {
    let sum = toDigitSum(i);
    if (!hashbrown[sum]) {
      hashbrown[sum] = 1
    } else {
      hashbrown[sum] += 1;
    }
  }

  let result = 0;
  for (let key in hashbrown) {
    if (hashbrown[key] > result) result = hashbrown[key];
  }

  return result;
};