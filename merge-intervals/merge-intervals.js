/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
 
  // sort the intergals by beg[i] 
  // iterate thru each interval starting at the index = 1
  // check if the end of i - 1 === the beginning of i
  // splice the interval array to replace the 2 intervals with the new 1
  
  
//   intervals.sort( (a, b) => a[0] - b[0])

//   for (let i = 1; i < intervals.length; i++) {
//     if ( intervals[i-1][1] >= intervals[i][0] ) {
//       intervals.splice(i - 1, 2, [intervals[i-1][0], Math.max(intervals[i][1], intervals[i-1][1] )])
//       i--;
//     }
//     return intervals;
//   }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  intervals.sort( (a,b) => a[0] - b[0]);
  
  for (let i = 1; i < intervals.length; i++) {
    if ( intervals[i - 1][1] >= intervals[i][0] ) {
      intervals.splice(i - 1, 2, [intervals[i-1][0], Math.max(intervals[i][1],intervals[i - 1][1] )] );
      i--;
    }
  }
  return intervals;
};