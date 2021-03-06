/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {

  let result = new Set();
  //hi this is a comment
  //and this is another comment
  let hasSubstring = function (word1, word2) {
    if (word1.length < word2.length) {
      let temp = word2;
      word2 = word1;
      word1 = temp;
    }
    if (word1.includes(word2)) {
      result.add(word2);
    }
  }
  
  //outer loop chooses first word, inner loop chooses second word
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      hasSubstring(words[i], words[j]);
    }
  }
  return [...result];
};