const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};

  domains.forEach((str) => {
    let array = str.split(".");
    let current = "";

    for (let i = array.length - 1; i >= 0; i -= 1) {
      current += `.${array[i]}`;

      if (!result[current]) {
        result[current] = 1;
      } else {
        result[current] += 1;
      }
    }
  });

  return result;
}

module.exports = {
  getDNSStats,
};
