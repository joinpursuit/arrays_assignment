/**
 * Appends a fruit to an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */
function addFruitToEnd(fruits, fruit) {
  fruits.push(fruit)
  return fruits
}
addFruitToEnd(['apple', 'banana'], 'mango')
/**
 * Adds a fruit to the front of an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */
function addFruitToFront(fruits, fruit) {
  fruits.unshift(fruit)
  return fruits
}
addFruitToFront(['apple', 'banana'], 'mango')
/**
 * Removes the last fruit from an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */
function removeLast(fruits) {
  fruits.pop()
  return fruits
}
removeLast(['apple', 'banana'])
/**
 * Removes and returns the last fruit from from an array of fruits
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */
function removeLastandReturnLast(fruits) {
  return fruits.pop()
}
removeLastandReturnLast(['apple', 'banana'])
/**
 * Takes in an array and returns the length
 * @param {Array} array
 * @returns {number}
 */
function arrayLength(array) {
  return array.length
}
arrayLength([1,2,3])
/**
 * Removes the first fruit in an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */
function removeFirst(fruits) {
  fruits.shift()
  return fruits
}
removeFirst(['apple', 'banana'])
/**
 * Removes and returns the first fruit in an array of fruits.
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */
function removeFirstandReturnFirst(fruits) {
  return fruits.shift()
}
removeFirstandReturnFirst(['apple', 'banana'])
/**
 * Returns a string made by joining all of the elements in an array of fruits with a '$' character.
 * @param {string[]} fruits
 * @returns {string}
 */
function arrayToString(fruits) {
  return fruits.join('$')
}
arrayToString(['apple', 'banana'])
/**
 * Takes in two arrays. And returns the longer array.
 * If the arrays are of the same length return "They are the same size"
 *
 * @param {Array} array1
 * @param {Array} array2
 * @returns {string|Array}
 */
function largerArray(array1, array2) {
  if(array1.length > array2.length) {
    return array1
  } else if (array1.length < array2.length) {
    return array2
  } else if (array1.length === array2.length){
    return 'They are the same size'
  }
}
largerArray([1,2,3], [4,5,6])
/**
 * Takes in an array and returns the middle element.
 * If the array is even in length return the middle two elements in their own array.
 * @param {Array} array
 * @returns {*|Array}
 */
function middleElement(array) {
  if(array.length % 2 === 0) {
    return [array[(array.length/2)-1], array[array.length/2]]
  } else if (!array.length % 2 === 0) {
    return array[(array.length-1)/2]
  }
}
middleElement([1,2,3,4])
/**
 * Takes in an array and returns the last element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */
function lastElementIndexing(array) {
  return array[array.length -1]
}
lastElementIndexing([1,2,3])
/**
 * Takes in an array and returns the first element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */
function firstElementIndexing(array) {
  return array[0]
}
firstElementIndexing([1,2,3])
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
