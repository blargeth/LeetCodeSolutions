/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let result = [];
  for (let i = left; i <= right; i++) {
    if (checkSelfDividing(i)) {
      result.push(i)
    }
  }
  return result;
};

function checkSelfDividing ( number ) {
  let arrNum = number.toString().split('');
  if (arrNum.includes('0')) return false;
  for (let i = 0; i < arrNum.length; i++) {
    if (number % Number(arrNum[i]) !== 0) {
      return false;
    }
  }
  return true;
}