/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let maxWealth = 0
  accounts.forEach( account => {
    let currWealth = account.reduce((accum, curr) => accum + curr, 0)
    if ( currWealth > maxWealth ) {
        maxWealth = currWealth 
        }
      return maxWealth;
    });

  return maxWealth;
};