const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // if (
  //   typeof date.getMonth !== "function" ||
  //   typeof date === "string" ||
  //   typeof date === "number" ||
  //   Array.isArray(date)
  // ) {
  //   throw new Error("Invalid date!");
  // }
  if (
    // date.getMonth() < 0 ||
    // date.getMonth() > 11 ||
    // typeof date.getMonth !== "function" ||
    !(date instanceof Date) ||
    // typeof date === "string" ||
    // typeof date === "number" ||
    // Array.isArray(date) ||
    // !date.hasOwnProperty("getMonth")
    // !Object.getPrototypeOf(date).hasOwnProperty("getDay")
    // !Object.getOwnPropertyNames(Object.getPrototypeOf(date)).includes("getDay") ||
    Object.prototype.toString.call(date) !== '[object Date]'
  ) {
    throw new Error("Invalid date!");
    // return "Unable to determine the time of year!";
  }
  // if (
    // date.getMonth() < 0 ||
    // date.getMonth() > 11 ||
    // typeof date.getMonth !== "function" ||
    // !(date instanceof Date) ||
    // typeof date === "string" ||
    // typeof date === "number" ||
    // Array.isArray(date)
    // !date.hasOwnProperty("getMonth")
    // !Object.getPrototypeOf(date).hasOwnProperty("getDay")
    // !Object.getOwnPropertyNames(Object.getPrototypeOf(date)).includes("getDay")
  // ) {
    // throw new Error("Invalid date!");
  //   return "Unable to determine the time of year!";
  // }
  if ((date.getMonth() >= 0 && date.getMonth() < 2) || date.getMonth() === 11) {
    return "winter";
  }
  if (date.getMonth() >= 2 && date.getMonth() < 5) {
    return "spring";
  }
  if (date.getMonth() >= 5 && date.getMonth() < 8) {
    return "summer";
  }
  if (date.getMonth() >= 8 && date.getMonth() < 11) {
    return "autumn";
  }
}

module.exports = {
  getSeason,
};
