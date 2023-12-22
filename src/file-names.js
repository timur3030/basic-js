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
  // let arr = [];
  // let index = 0;
  // names.forEach((name) => {
  //   index = arr.filter((item) => item === name).length;
  //   if (index > 0) {
  //     if (names.filter((el) => el === name).length === 1) {
  //       arr.push(`${name}(${index + 1})`);
  //     } else {
  //       arr.push(`${name}(${index})`);
  //     }
  //   } else {
  //     arr.push(name);
  //   }
  // });
  // return arr;
  let newArr = [];
  // let sorted = arr.filter(elem => elem !== -1).sort((a, b) => a- b);
  let j = 1;
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
      newArr[i] = `${names[i]}(${i})`;
    }
    // names.filter((item) => item === names[i]).length;
    // if (arr[i] === -1) {
    //   newArr[i] = arr[i]
    // } else {
    //   newArr[i] = sorted[j];
    //   j += 1;
    // }
  }
  return newArr;
}

module.exports = {
  renameFiles,
};
