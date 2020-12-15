/**
 * Appends a fruit to an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */
function addFruitToEnd(fruits, fruit) {
  fruits.push(fruit);
  return fruits;
}

/**
 * Adds a fruit to the front of an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */
function addFruitToFront(fruits, fruit) {
  fruits.unshift(fruit);
  return fruits;
}

/**
 * Removes the last fruit from an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */
function removeLast(fruits) {
  let removeLast = fruits.pop();
  return fruits;
}

/**
 * Removes and returns the last fruit from from an array of fruits
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */
function removeLastandReturnLast(fruits) {
  let removeLast = fruits.pop();
  return removeLast;
}

/**
 * Takes in an array and returns the length
 * @param {Array} array
 * @returns {number}
 */
function arrayLength(array) {
  return array.length;
}

/**
 * Removes the first fruit in an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */
function removeFirst(fruits) {
  fruits.shift();
  return fruits;
}
/**
 * Removes and returns the first fruit in an array of fruits.
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */
function removeFirstandReturnFirst(fruits) {
  let removeFirst = fruits.shift();
  return removeFirst;
}

/**
 * Returns a string made by joining all of the elements in an array of fruits with a '$' character.
 * @param {string[]} fruits
 * @returns {string}
 */
function arrayToString(fruits) {
  return fruits.join("$");
}

/**
 * Takes in two arrays. And returns the longer array.
 * If the arrays are of the same length return "They are the same size"
 *
 * @param {Array} array1
 * @param {Array} array2
 * @returns {string|Array}
 */
//If the 2 are equal return "They are the same size", if otherwise return the greater array
function largerArray(array1, array2) {
  if (array1.length === array2.length) {
    return "They are the same size";
  } else if (array1.length > array2.length) {
    return array1;
  } else {
    return array2;
  }
}

/**
 * Takes in an array and returns the middle element.
 * If the array is even in length return the middle two elements in their own array.
 * @param {Array} array
 * @returns {*|Array}
 */
//
function middleElement(array) {
  array.length/2
  
  

}
middleElement([1,2,3,4,5]) 


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
