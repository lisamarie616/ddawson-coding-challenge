#! npm test ./test/3-file-extension.js

/**
 * Hit 'control + x' to run tests with Atom Script Runner
 */

/**
 * Returns the file extension of a filename.
 * @param {String} filename The string from which to extract the file extension
 * @returns {String} The file extension (with no period), or false if there is none.
 */
export default function getFileExtension(filename) {
  if (filename.indexOf('.') === -1){
    return false;
  } else {
    return filename.split('.').pop();
  }
}
