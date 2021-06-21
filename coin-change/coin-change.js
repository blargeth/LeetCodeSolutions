/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  
  let tabulation = Array(amount + 1).fill(Infinity);
  //create first item in the array that will store the minimum number of coins to get to that sum
  tabulation[0] = 0;
  
  for (let i = 0; i < tabulation.length; i++) {
    for (let coin of coins) {
      if ( coin <= i ) {
        let coinTotal = i - coin;
        let newMin = tabulation[coinTotal] + 1;
        //track the minimum number of coins to get to that total
        tabulation[i] = Math.min(newMin, tabulation[i]);
      }
    }
  }
  //result will be the last thing or -1 if no coins can make it
  return tabulation[tabulation.length - 1] === Infinity ? -1 : tabulation[tabulation.length - 1];
  
};