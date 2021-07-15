/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    
  //create a map of {names : [index, [cities]]}    
  
  //2 checks: amount > 1000, and 
  // if the minutes are within 60 minutes in a different city
  
  
  ///////////////// SOLUTION:
  
  
const names = [];
const times = [];
const amounts = [];
const cities = [];
const isInvalid = [];
  
  // Populate lists
  for(let transaction of transactions){
     let [name,time,amount,city] = transaction.split(",");
        names.push(name);
        times.push(time);
        amounts.push(amount);
        cities.push(city);
        isInvalid.push(false);
  };

// Flag Invalid Entries
    for(let prev = 0; prev < transactions.length; prev++){
        if(parseInt(amounts[prev]) > 1000){
           isInvalid[prev] = true;
        } 
        for(let curr = prev+1; curr < transactions.length; curr++){
            if(Math.abs(parseInt(times[curr]) - parseInt(times[prev])) <= 60 
               && names[prev] === names[curr] && cities[curr] !== cities[prev]){
                isInvalid[prev] = true;
                isInvalid[curr] = true;
            }
        }
    }

// Accumulate flagged/invalid transactions
    const output = [];
    for(let idx = 0; idx < isInvalid.length; idx++){
        let transaction = transactions[idx];
        if(isInvalid[idx]) output.push(transaction);
    }
    return output;
  
};