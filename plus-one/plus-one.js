/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

  let length = digits.length - 1;
  digits[length] += 1;
  
  while (digits[length] === 10) {
    if (digits[0] === 10) {
      digits.unshift(1);
      digits[1] = 0;
      break;
    }
    digits[length] = 0;
    digits[length - 1] += 1;
    length -= 1;
  }
  


  return digits;
};