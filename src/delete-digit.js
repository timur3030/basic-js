const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return +`${n}`.replace(`${n}`.split("").sort()[0], "") >
    +`${n}`.replace(`${n}`.split("").sort()[1], "")
    ? +`${n}`.replace(`${n}`.split("").sort()[0], "")
    : +`${n}`.replace(`${n}`.split("").sort()[1], "");
}

module.exports = {
  deleteDigit,
};
