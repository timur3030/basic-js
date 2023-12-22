const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newArr = [];
  let j = 1;
  let k = 1;
  for (let i = 0; i < names.length; i += 1) {
    if (!newArr.includes(names[i])) {
      newArr[i] = names[i];
    } else if (
      names.filter((item) => item === names[i]).length === 1 &&
      newArr.includes(names[i])
    ) {
      newArr[i] = `${names[i]}(${j})`;
      j += 1;
    } else {
      newArr[i] = `${names[i]}(${k})`;
      k += 1;
    }
  }
  return newArr;
}

module.exports = {
  renameFiles,
};
