/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
  let result = 0;
  let converter = (ruleKey === 'type') ? 0 
  : (ruleKey === 'color') ? 1
  : (ruleKey === 'name') ? 2 : undefined;
  for (let i = 0; i < items.length; i++) {
    if (items[i][converter] === ruleValue) {
      result += 1;
    }
  }
  return result;
  
};