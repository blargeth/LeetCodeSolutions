/**
 * @param {number[][]} points
 * @return {number}
 */


// note: moving diagonally is the preference --> itll be the the same as the greatest distance of the height or the length

var minTimeToVisitAllPoints = function(points) {
  // iterate over each point
    // define point 1 and point 2 within the iteration
    // find the max of the either the height or the length
    // add it to the result
  
  let result = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let [x1, y1] = points[i];
    let [x2, y2] = points[i + 1];
    // console.log( 'point 1 --> point 2')
    // console.log(x1, y1, "-->", x2, y2)
    
    // distance is the max of the distances between xs and ys
    let distance = Math.max(Math.abs(x1 -x2), Math.abs(y1-y2))
    result += distance;
  }
  return result;
};