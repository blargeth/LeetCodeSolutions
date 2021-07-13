/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    
  // const mapPaths = new Map(paths);
  // console.log(mapPaths)
  // for (let key of mapPaths) {
  //   let start = key[1];
  //   while (mapPaths.has(start)) {
  //     start = mapPaths.get(start);
  //   }
  //   return start;
  // }

  if (paths.length === 1) {
    return paths[0][1];
    
  }
  
  let map = {};
  for (let i = 0; i < paths.length; i++) {
    if (!map[paths[i][0]]) map[paths[i][0]] = 1;
    else map[paths[i][0]]++;
    if (!map[paths[i][1]]) map[paths[i][1]] = -1;
    else map[paths[i][1]]--;
    
  }
  for (let key in map) {
    if (map[key] === -1) return key
  }
};