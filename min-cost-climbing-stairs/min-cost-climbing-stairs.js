/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
   
  let oneStep = 0;
  let twoSteps = 0;
  
  for (let i = 2; i < cost.length + 1; i++) {
    let temp = oneStep;
    oneStep = Math.min(oneStep + cost[i - 1], twoSteps + cost[i - 2]);
    twoSteps = temp;
  }
  
  return oneStep;
};