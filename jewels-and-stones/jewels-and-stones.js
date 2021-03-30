/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let jewelsObj = {};
  for (let i = 0; i <  jewels.length; i++){
    if (!jewelsObj[jewels[i]]) {
      jewelsObj[jewels[i]] = true;
    }
  }

  let result = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewelsObj.hasOwnProperty(stones[i])) {
      result = result + 1;
    }
  }
  return result;
};