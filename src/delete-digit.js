const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digits = Array.from(String(n), Number);
  const numbers = [];
  for (let i = 0; i < digits.length; i++) {
    numbers.push(Number([...digits.slice(0, i), ...digits.slice(i + 1)].join('')));
  }
  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};
