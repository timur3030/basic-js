const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;

  matrix.forEach((arr, i) => {
    let pos = arr.length - 1;

    while (true) {
      let foundPos = arr.lastIndexOf(0, pos);
      if (foundPos === -1) break;
      for (let j = i; j < matrix.length; j += 1) {
        matrix[j].splice(foundPos, 1);
      }
      pos = foundPos - 1;
    }
    result += matrix[i].reduce(function (currentSum, currentNumber) {
      return currentSum + currentNumber;
    }, 0);
  });

  return result;
}

module.exports = {
  getMatrixElementsSum,
};
