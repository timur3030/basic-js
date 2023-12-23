const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let index = 0;
  let one = s1.split(""),
    two = s2.split("");

  for (let i = 0; i < one.length; i += 1) {
    index = two.indexOf(one[i], index);
    if (index !== -1) {
      index += 1;
      result += 1;
    } else {
      break;
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount,
};
