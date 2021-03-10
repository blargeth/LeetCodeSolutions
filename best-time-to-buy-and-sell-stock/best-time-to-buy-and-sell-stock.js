/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
  let maxBenefit = 0;
  let minVal = prices[0];
  for (let i = 0; i < prices.length; i++) {
    
    minVal = Math.min(prices[i], minVal)
    maxBenefit = Math.max(maxBenefit, prices[i] - minVal)
  }
  return maxBenefit;
};