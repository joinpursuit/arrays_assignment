/**
 * Appends a fruit to an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */
function addFruitToEnd(fruits,fruit) {
  fruits.push(fruit);
  return (fruits)
}

/**
 * Adds a fruit to the front of an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */
function addFruitToFront(fruits,fruit) {
  fruits.unshift(fruit)
  return (fruits)
}
/**
 * Removes the last fruit from an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */
function removeLast() {}

/**
 * Removes and returns the last fruit from from an array of fruits
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */
function removeLastandReturnLast() {}

/**
 * Takes in an array and returns the length
 * @param {Array} array
 * @returns {number}
 */
function arrayLength() {}

/**
 * Removes the first fruit in an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */
function removeFirst() {}

/**
 * Removes and returns the first fruit in an array of fruits.
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */
function removeFirstandReturnFirst() {}

/**
 * Returns a string made by joining all of the elements in an array of fruits with a '$' character.
 * @param {string[]} fruits
 * @returns {string}
 */
function arrayToString() {}

/**
 * Takes in two arrays. And returns the longer array.
 * If the arrays are of the same length return "They are the same size"
 *
 * @param {Array} array1
 * @param {Array} array2
 * @returns {string|Array}
 */
function largerArray() {}

/**
 * Takes in an array and returns the middle element.
 * If the array is even in length return the middle two elements in their own array.
 * @param {Array} array
 * @returns {*|Array}
 */
function middleElement() {}

/**
 * Takes in an array and returns the last element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */
function lastElementIndexing() {}

/**
 * Takes in an array and returns the first element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */
function firstElementIndexing() {}

module.exports = {
  addFruitToEnd,
  addFruitToFront,
  removeLast,
  removeLastandReturnLast,
  arrayLength,
  removeFirst,
  removeFirstandReturnFirst,
  arrayToString,
  largerArray,
  middleElement,
  lastElementIndexing,
  firstElementIndexing,
};
