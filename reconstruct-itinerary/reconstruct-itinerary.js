/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  

  /////////////SOLUTION!
  
  
// [
//   [ 'JFK', 'SFO' ],
//   [ 'JFK', 'ATL' ],
//   [ 'SFO', 'ATL' ],
//   [ 'ATL', 'JFK' ],
//   [ 'ATL', 'SFO' ]
// ]

  
  
  
    // tickets.sort((a, b) => a[1].localeCompare(b[1]));
  tickets.sort( (a,b) => a[1] < b[1] ? -1 : 1)

    const matrix = {};
    
    // build an adjacency matrix
    for(let [start, end] of tickets) {
        if(!matrix[start]) {
            matrix[start] = {}
            matrix[start][end] = 1;
        } else if(!matrix[start][end]) {
            matrix[start][end] = 1;
        } else matrix[start][end]++;
    }
    
    function callDFS(start, path, count) {
        // when all tickets are used return
        if(count === tickets.length) return path;
        
        // loop over all the destinations for a given starting airport
        for(let end in matrix[start]) {
            if(matrix[start][end] > 0) {
                matrix[start][end]--;
                const val = callDFS(end, [...path, end], count+1);
                if(val) return val;
                matrix[start][end]++;
            }
        }
        return false;
    }
    return callDFS('JFK', ['JFK'], 0);
  

  
};