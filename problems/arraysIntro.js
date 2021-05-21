const fruits = ["tangerine", "nectarine", "apple"];
const array = [1, 2, 3 ]

// /**
//  * Appends a fruit to an array of fruits and returns the array.
//  * @param {string[]} fruits
//  * @param {string} fruit
//  * @returns {string[]}
//  */

function addFruitToEnd(fruits, fruit) {
  return [...fruits, fruit];
}

// /**
//  * Adds a fruit to the front of an array of fruits and returns the array.
//  * @param {string[]} fruits
//  * @param {string} fruit
//  * @returns {string[]}
//  */
function addFruitToFront(fruits, fruit) {
  fruits.unshift(fruit);
  return fruits;
}

// /**
//  * Removes the last fruit from an array of fruits and returns the array.
//  * @param {string[]} fruits
//  * @returns {string[]}
//  */
function removeLast(strArr) {
  strArr.pop();
  return strArr;
}

// /**
//  * Removes and returns the last fruit from from an array of fruits
//  * @param {string[]} fruits
//  * @returns {string} The fruit that was removed
//  */

function removeLastandReturnLast(strArr) {
  const lastFruit = strArr.pop();
  return lastFruit;
}

// /**
//  * Takes in an array and returns the length
//  * @param {Array} array
//  * @returns {number}
//  */

function arrayLength(array) {
  return array.length;
}

// /**
//  * Removes the first fruit in an array of fruits and returns the array.
//  * @param {string[]} fruits
//  * @returns {string[]}
//  */
function removeFirst(strArr) {
  strArr.shift();
  return strArr;
}

// /**
//  * Removes and returns the first fruit in an array of fruits.
//  * @param {string[]} fruits
//  * @returns {string} The fruit that was removed
//  */
console.log(fruits);
function removeFirstandReturnFirst(array) {
  return array.shift();
}

// /**
//  * Returns a string made by joining all of the elements in an array of fruits with a '$' character.
//  * @param {string[]} fruits
//  * @returns {string}
//  */
function arrayToString(arr) {
  return `${arr}`;
}

// /**
//  * Takes in two arrays. And returns the longer array.
//  * If the arrays are of the same length return "They are the same size"
//  *
//  * @param {Array} array1
//  * @param {Array} array2
//  * @returns {string|Array}
//  */
function largerArray(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return arr1;
  } else if (!(arr1.length >= arr2.length)) {
    return arr2;
  } else {
    return 'They are the same size';
  }
}
largerArray(fruits, array)

/**
//  * Takes in an array and returns the middle element.
//  * If the array is even in length return the middle two elements in their own array.
//  * @param {Array} array
//  * @returns {*|Array}
//  */

function middleElement(arr) {
  if (arr.length % 2 !== 0) {
    console.log();
    return arr[Math.ceil(arr.length / 2) - 1];
  } else {
    console.log(arr[5]);
    return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
  }
}
middleElement(array);

/**
//  * Takes in an array and returns the last element without altering or mutating the array
//  * @param {Array} array
//  * @returns {*}
//  */
function lastElementIndexing(arr) {
  return arr[arr.length - 1];
}

/**
 * Takes in an array and returns the first element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */
function firstElementIndexing(arr) {
  return arr[0];
}
firstElementIndexing(array);

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
