/**
 * @param {number[][]} costs
 * @return {number}
 */




// i array of costs
// o total of the minimum of cost to fly the peeps
// c array of input is even, cost length is between 2 and 100, cost is between 1 and 1000
// e if there are at least 1/2 of the people already in city A, then they have to go to city B and vice versa


// plan: decide whether person in the ith index goes to A or B
  // cost efficiency : cost B - cost A 

  // [20 - 10, 200 - 30, 50 - 400, 20 - 30] =>
  // [ 10, 170, -350, -10]
  // sort it by most cost effective ==> 
  // [ 2,   1,  3 ,    0 ]

  // [ [2, 170], [1, 10], [3, -10], [0, -350]]
  // counter for people going to city A, once that hits 2n, then the rest go to B
  

var twoCitySchedCost = function(costs) {
    
  //initialize array
  let costEff = []; 
  //create the cost array to be sorted later
  for (let i = 0; i < costs.length; i++) {
    costEff.push([i, costs[i][1] - costs[i][0]]);
  }
  
  costEff.sort( (a, b) => b[1] - a[1] );
  
  let countA = 0;
  let countB = 0;
  let half = costs.length / 2;
  
  let result = 0
  
  for (let i = 0; i < costEff.length; i++) {
    
    if ( countA < half ) {
      result += costs[costEff[i][0]][0];
      countA += 1;
    } else {
      result += costs[costEff[i][0]][1];
      countB += 1;      
    }    
    
  }
  
  return result;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // sort by MOST costly to go to each city ***
  // count how many go to each city
    // if u hit the cap, then go to the other city
  
  // let sortedByCostDiff = costs.sort( (a,b) => {
//     return Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]);
//   })
//   let currA = costs.length / 2;
//   let currB = currA;
//   let result = 0;
  
//   for (let i = 0; i < sortedByCostDiff.length; i++) {
//     if (sortedByCostDiff[i][0] >= sortedByCostDiff[i][1]) {
//       if ( currB === 0) {
//         result += sortedByCostDiff[i][0]; 
//         currA--;
//         continue;
//       }
//       result += sortedByCostDiff[i][1]; 
//       currB--;
//     } else {
//       if ( currA === 0) {
//         result += sortedByCostDiff[i][1]; 
//         currB--;
//         continue;
//       }
//       result += sortedByCostDiff[i][0]; 
//       currA--;
//     }
//   }
//   return result;
};