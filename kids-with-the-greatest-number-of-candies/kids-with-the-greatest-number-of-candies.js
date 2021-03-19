/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  const maxCandies = Math.max(...candies);
  let candyMap = [];
  candies.forEach((candy, i) => {
      candyMap.push(candy + extraCandies >= maxCandies)
  })
  return candyMap;
};