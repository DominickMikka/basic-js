const { NotImplementedError } = require('../extensions/index.js');

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

  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }

  if (Object.getOwnPropertySymbols(date).length > 0) {
    throw new Error('Invalid date!');
  }

  let seasonString = date.toString();
  let season = '';
  
  if (seasonString.includes('Dec') || seasonString.includes('Jan') || seasonString.includes('Feb')) {
    season = 'winter';
  } else if (seasonString.includes('Mar') || seasonString.includes('Apr') || seasonString.includes('May')) {
    season = 'spring';
  } else if (seasonString.includes('Jun') || seasonString.includes('Jul') || seasonString.includes('Aug')) {
    season = 'summer';
  } else if (seasonString.includes('Sep') || seasonString.includes('Oct') || seasonString.includes('Nov')) {
    season = 'autumn';
  } else {
    throw new Error('Invalid date!');
  }

  return season;
}

module.exports = {
  getSeason
};
