/**
 * Takes in an array of fruits and a fruit.
 * The fruit should be added to the end of the array.
 * @param {array} fruits
 * @param {string} fruit
 * @return {array}
 */

function addFruitToEnd(fruits, fruit) {
  fruits.push(fruit)
  return fruits
}
/**
 * Takes in an array of fruits and a fruit.
 * The fruit should be added to the front of the array.
 * @param {array} fruits
 * @param {string} fruit
 * @return {array}
 */

function addFruitToFront(fruits, fruit) {
  fruits.unshift(fruit)
  return fruits
}

/**
 * Takes in an array of fruits. And removes last fruit in the array.
 * @param {array} fruits
 * @return {array}
 */

function removeLast(fruits) {
  fruits.pop()
  return fruits
}

/**
 * Takes in an array of fruits. And removes last fruit in the array and
 * returns the fruit that was removed.
 * @param {array} fruits
 * @return {string} fruit that was removed
 */

function removeLastandReturnLast(fruits) {
  return fruits.pop()
}

/**
 * Takes in an array and returns the length
 * @param {array}
 * @return {number}
 */

function arrayLength(array) {
  return array.length
}

/**
 * Takes in an array of fruits. And removes the first fruit in the array.
 * Returns the new array.
 * @param {array} fruits
 * @return {array}
 */

function removeFirst(fruits) {
  fruits.shift()
  return fruits
}

/**
 * Takes in an array of fruits. And removes first fruit in the array and
 * returns the fruit that was removed.
 * @param {array} fruits
 * @return {string} fruit that was removed
 */

function removeFirstandReturnFirst(fruits) {
  const firstFruit = fruits[0]
  fruits.shift()
  return firstFruit
}

/**
 * Takes in an array of fruits. And returns a string where all
 * elements have been joined by '$'.
 * @param {array} fruits
 * @return {string} joined array
 */

function arrayToString(fruits) {
  return fruits.join("$")
}

/**
 * Takes in two arrays. And returns the longer array.
 * If the arrays are of the same length return "They are the same size"
 *
 * @param {array} array1
 * @param {array} array2
 * @return {array || string}
 */

function largerArray(array1, array2) {
  if (array1.length === array2.length) { return "They are the same size" }
  return (array1.length > array2.length) ? array1 : array2
}

/**
 * Takes in an array. And returns the middle element.
 * If the array is even in length return the middle two elements in their own array.
 * @param {array} array
 * @return {any}
 */

function middleElement(array) {
  if (array.length % 2 === 0) {
    return [array[(array.length / 2) - 1], array[array.length / 2]]
  }
  return array[Math.floor(array.length / 2)]
}

/**
 * Takes in an array and returns the last element without altering or mutating the array
 *
 */

function lastElementIndexing(array) {
  return array[array.length - 1]
}

/**
 * Takes in an array and returns the first element without altering or mutating the array
 *
 */

function firstElementIndexing(array) {
  return array[0]
}

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
