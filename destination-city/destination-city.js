/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    
  const mapPaths = new Map(paths);
  
  for (let key of mapPaths) {
    let start = key[1];
    while (mapPaths.has(start)) {
      start = mapPaths.get(start);
    }
    return start;
  }

};