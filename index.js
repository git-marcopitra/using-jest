/**
 * @name sumNumbers
 * @param {number[]} numbers
 * @returns {number}
 */
const sumNumbers = (numbers) =>
  numbers.reduce((accumulator, number) => accumulator + number, 0);

module.exports = {
  sumNumbers,
};
