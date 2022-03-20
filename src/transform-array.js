const { NotImplementedError } = require('../extensions/index.js');

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

  let transormedArray = [];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '--discard-next') {
      i++
      if (arr[i+1] === '--double-prev') {
        i++
      }
    } else if (arr[i] === '--discard-prev') {
      transormedArray.splice([i-1], 1);
    } else if (arr[i] === '--double-next' && i+1 !== arr.length) {
      transormedArray.push(arr[i+1]);
    } else if (arr[i] === '--double-next' && i+1 === arr.length) {

    } else if (arr[i] === '--double-prev' && i !== 0) {
      transormedArray.push(arr[i-1]);
    } else if (arr[i] === '--double-prev' && i === 0) {

    } else {
      transormedArray.push(arr[i]);
    }
  }

  return transormedArray
}

module.exports = {
  transform
};
