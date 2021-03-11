/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
  let longest = releaseTimes[0];
  let currLongest = 0;
  let result = keysPressed[0];
    for (let i = 1; i < releaseTimes.length; i++) {
      currLongest = releaseTimes[i] - releaseTimes[i-1];
      if (currLongest === longest){
        if (keysPressed[i] > result) {
          result = keysPressed[i];
        }
      }     
      if (currLongest > longest) {
        result = keysPressed[i];
        longest = currLongest;
      }

    }
  return result;
};