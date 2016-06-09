#! npm test ./test/4-longest.js

/**
 * Hit 'control + x' to run tests with Atom Script Runner
 */

/**
 * Returns the longest string out of an array of strings.
 * @param {Array} strings An array that might contain strings.
 * @returns {String} The longest string from within the input array.
 */
export default function longestString(strings) {
  var greatestLength = 0;
  var longest = "";
  strings.forEach(function(string){
    if (typeof string === 'string'){
      if (string.length > greatestLength){
        greatestLength = string.length;
        longest = string;
      }
    }
  });
  return longest;
}
