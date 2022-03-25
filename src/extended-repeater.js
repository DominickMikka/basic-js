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

  if (typeof options.repeatTimes === 'undefined' || options.repeatTimes < 1) {
    options.repeatTimes = 1;
  }

  if (typeof options.separator === 'undefined') {
    options.separator = '+';
  }

  if (typeof options.additionSeparator === 'undefined') {
    options.additionSeparator = '|';
  }

  if (typeof str !== 'string') {
    str = String(str);
  }

  if (typeof options.addition !== 'undefined') {
    options.addition = String(options.addition);

    if (typeof options.additionRepeatTimes === 'undefined' || options.additionRepeatTimes < 1) {
      options.additionRepeatTimes = 1;
    }

  } 

  let string = '';
  let arr = [];
  let arrAditional = [];
  let stringAditional = '';

  if (options.additionRepeatTimes > 0) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      arrAditional.push(options.addition);
    }
    stringAditional = arrAditional.join(options.additionSeparator);
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    arr.push(`${str}${stringAditional}`);
  } 

  string = arr.join(options.separator);

  return string
}

module.exports = {
  repeater
};
