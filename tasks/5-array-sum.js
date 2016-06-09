#! npm test ./test/5-array-sum.js

/**
 * Hit 'control + x' to run tests with Atom Script Runner
 */

/** Hints:
  * The best way to check for an array in Js is `Array.isArray(val)`
  * The best way to check for a number is `typeof(num) === 'number'`
  */

/**
 * Sums all integers in a nested array, no matter how many levels deep.
 * @param {Array} strings An array.
 * @returns {Number} The sum of all integers contained in the input, at any level.
 */
export default function arraySum(array) {
  var sum = 0;
  array.forEach(function(i){
    if (typeof(i) === 'number'){
      sum += i;
    } else if (Array.isArray(i)) {
      sum += arraySum(i);
    }
  });
  return sum;
}
