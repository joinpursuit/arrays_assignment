/**
 * Appends a fruit to an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */
const addFruitToEnd = (fruits, fruit) => {
   fruits.push(fruit)
   return fruits
}



/**
 * Adds a fruit to the front of an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */
const addFruitToFront = (fruits, fruit) => {
  fruits.unshift(fruit)
  return fruits
}

/**
 * Removes the last fruit from an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */
const removeLast = (fruits) => {
  fruits.pop()
  return fruits
}

/**
 * Removes and returns the last fruit from from an array of fruits
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */
const removeLastandReturnLast = (fruits) => {
  let fruit = fruits.pop()
  return fruit
}

/**
 * Takes in an array and returns the length
 * @param {Array} array
 * @returns {number}
 */
const arrayLength = (array) => {
  return array.length
}

/**
 * Removes the first fruit in an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */
const removeFirst = (fruits) => {
  fruits.shift()
  return fruits
}

/**
 * Removes and returns the first fruit in an array of fruits.
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */
const removeFirstandReturnFirst = (fruits) => {
  let fruit = fruits.shift()
  return fruit
}

/**
 * Returns a string made by joining all of the elements in an array of fruits with a '$' character.
 * @param {string[]} fruits
 * @returns {string}
 */
const arrayToString = (fruits) => {
  let fruitsString = fruits.join('$')
  return fruitsString
}

/**
 * Takes in two arrays. And returns the longer array.
 * If the arrays are of the same length return "They are the same size"
 *
 * @param {Array} array1
 * @param {Array} array2
 * @returns {string|Array}
 */
const largerArray = (array1, array2) => {
  if(array1.length > array2.length) {
    return array1
  } else if (array1.length === array2.length) {
    return "They are the same size"
  } else {
    return array2
  }
}

/**
 * Takes in an array and returns the middle element.
 * If the array is even in length return the middle two elements in their own array.
 * @param {Array} array
 * @returns {*|Array}
 */
const middleElement = (array) => {
 
  let newArray = array.slice(Math.floor((array.length - 1)/2), Math.ceil((array.length - 1)/2)+1)
 
  if(array.length % 2 === 0) {
    return newArray 
  } else {
    return array [(array.length - 1)/2]
  }
  
}

/**
 * Takes in an array and returns the last element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */
const lastElementIndexing = (array) => {
  return array[array.length-1]
}

/**
 * Takes in an array and returns the first element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */
const firstElementIndexing = (array) => {
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
