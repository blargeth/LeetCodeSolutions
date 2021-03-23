/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
  let a = 1;
  let b = n - a;
  
  let aNoZeros = a.toString().split('').filter(item => item ==='0').length;
  let bNoZeros = b.toString().split('').filter(item => item ==='0').length;
  
  while (aNoZeros >= 0 || bNoZeros >= 0) {
    if (aNoZeros === 0 && bNoZeros === 0) {
      return [a, b];
    }
    a += 1;
    b -= 1;
    aNoZeros = a.toString().split('').filter(item => item ==='0').length;
    bNoZeros = b.toString().split('').filter(item => item ==='0').length;
  }
  
};