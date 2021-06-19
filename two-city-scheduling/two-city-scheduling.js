/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    
  // sort by MOST costly to go to each city ***
  // count how many go to each city
    // if u hit the cap, then go to the other city
  
  let sortedByCostDiff = costs.sort( (a,b) => {
    return Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]);
  })
  let currA = costs.length / 2;
  let currB = currA;
  let result = 0;
  
  for (let i = 0; i < sortedByCostDiff.length; i++) {
    if (sortedByCostDiff[i][0] >= sortedByCostDiff[i][1]) {
      if ( currB === 0) {
        result += sortedByCostDiff[i][0]; 
        currA--;
        continue;
      }
      result += sortedByCostDiff[i][1]; 
      currB--;
    } else {
      if ( currA === 0) {
        result += sortedByCostDiff[i][1]; 
        currB--;
        continue;
      }
      result += sortedByCostDiff[i][0]; 
      currA--;
    }
  }
  return result;
};