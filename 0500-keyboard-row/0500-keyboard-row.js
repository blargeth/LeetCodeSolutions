/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    //lowercase all letters
    //create rows in array
    
    const checkLetters = (word, array) => {
        result = true;
        for (let i = 0; i < word.length; i++) {
            if (array.includes(word[i])) continue;
            else {
                result = false
                break;
            }
        }
        return result;
    }
    
    const row1 = "qwertyuiop".split('');
    const row2 = "asdfghjkl".split('');
    const row3 = "zxcvbnm".split('');
    
    answer = [];
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        if (checkLetters(word, row1)) answer.push(words[i])
        if (checkLetters(word, row2)) answer.push(words[i])
        if (checkLetters(word, row3)) answer.push(words[i])
    }

    return answer
};