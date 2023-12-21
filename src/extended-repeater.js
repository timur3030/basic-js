const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let additionString = options.addition ? options.addition : "";
  const separator = options.separator ? options.separator : "+";
  const additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : "|";

  for (let i = 1; i < options.additionRepeatTimes; i += 1) {
    additionString += `${additionSeparator}${options.addition}`;
  }

  let string = str + additionString;

  for (let i = 1; i < options.repeatTimes; i += 1) {
    string += `${separator}${str}${additionString}`;
  }
  return string;
}

module.exports = {
  repeater
};
