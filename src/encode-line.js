const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let array = str.split('');
  let result = [];
  let count = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i+1] === array[i]) {
      count++;
    } else {
      result.push(count + array[i]);
      count = 1
    }
  }
  return result.map((string) => {
    if (string.includes('1')) {
      return string.slice(1);
    }
    return string
  }).join('');
}

module.exports = {
  encodeLine
};
