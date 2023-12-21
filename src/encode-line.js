const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split("");
  let arrNew = [];
  let string = "";
  arr.forEach((item, i) => {
    if (item === arr[i + 1]) {
      arrNew = [...arrNew, item];
    } else {
      string += `${arrNew.length > 0 ? arrNew.length + 1 : ""}${item}`;
      arrNew = [];
    }
  });
  return string;
}

module.exports = {
  encodeLine,
};
