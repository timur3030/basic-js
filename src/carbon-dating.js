const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (
    Number.isNaN(+sampleActivity) ||
    // !Number.isFinite(sampleActivity) ||
    typeof +sampleActivity !== "number" ||
    typeof sampleActivity !== "string" ||
    typeof sampleActivity === "boolean" ||
    typeof sampleActivity === "undefined" ||
    !sampleActivity
  ) {
    return false;
  }

  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY / +sampleActivity) / k;
  if (isFinite(t) && t >= 0) {
    return Math.ceil(t);
  } else {
    return false;
  }
}

module.exports = {
  dateSample,
};
