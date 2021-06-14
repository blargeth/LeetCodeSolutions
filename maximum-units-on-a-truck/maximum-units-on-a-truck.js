/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a,b) => b[1] - a[1]);
  let total = 0;
  let index = 0;
  
  // console.log(boxTypes)
  for (let i = 0; i < truckSize; i++) {
    // console.log(total, index, i)

    if (boxTypes[index][0] !== 0) {
      total = total + boxTypes[index][1];
      boxTypes[index][0]--;
    } else {
      index ++;
      // if all the boxes are added up
      if (index >= boxTypes.length) return total;
      total = total + boxTypes[index][1];
      boxTypes[index][0]--;
    }
  }
  
  return total;
};