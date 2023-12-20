const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let array = [];
  for (let i = 0; i < arr.length; i += 1) {
    // if (
    //   typeof arr[i] === "object" &&
    //   !Array.isArray(arr[i]) &&
    //   arr[i] !== null
    // ) {
    //   array = [...array, arr[i], arr[i]];
    //   continue;
    // }
    if (arr.length === 1) {
      array = [...array, arr[i], arr[i]];
      break;
    }
    if (
      (arr[i] === "--double-next" || arr[i] === "--double-prev") &&
      (i + 1 === arr.length || i === 0)
    ) {
      continue;
    }
    if (arr[i] === "--double-next") {
      array = [...array, arr[i + 1]];
    } else if (arr[i] === "--discard-next") {
      i += 1;
      continue;
    } else if (arr[i] === "--double-prev" && arr[i - 1] !== array[i - 1]) {
      continue;
    } else if (arr[i] === "--double-prev") {
      array = [...array, arr[i - 1]];
    } else if (arr[i] === "--discard-prev" && arr[i - 1] !== array[i - 1]) {
      continue;
    } else if (arr[i] === "--discard-prev") {
      array.pop();
      continue;
    } else {
      array = [...array, arr[i]];
    }
  }
  return array;
}

module.exports = {
  transform,
};
