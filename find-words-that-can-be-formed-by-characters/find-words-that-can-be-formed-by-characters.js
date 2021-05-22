/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let map1 = {};
  let result = 0;
  for (let i = 0; i < chars.length; i++) {
    if (!map1[chars[i]]) {
      map1[chars[i]] = 1;
    } else {
      map1[chars[i]] += 1;
    }
  }
  
  for (let i = 0; i < words.length; i++) {
    if (canFormWord( words[i], map1 )) {
      // console.log(words[i], map1)
      result += words[i].length;
    }
  }
  return result;
};

function canFormWord ( word, mapping ) {
  let newMap = Object.create(mapping)
  for (let i = 0; i < word.length; i++) {
    if (!newMap[word[i]]) {
      return false;
    } else {
      newMap[word[i]] -= 1;
      if (newMap[word[i]] < 0) {
        return false;
      }
    }
  }
  return true;
}