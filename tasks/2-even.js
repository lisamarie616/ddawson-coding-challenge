#! npm test ./test/2-even.js

/**
 * Hit 'control + x' to run tests with Atom Script Runner
 */

/**
 * Returns true if the input is even
 * @param {Number} i The integer to check.
 * @returns {Boolean} Whether the input is even.
 */
export default function isNumberEven(i) {
  return (i % 2 == 0);
}
