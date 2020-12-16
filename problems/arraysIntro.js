/**
 * Appends a fruit to an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */
 function addFruitToEnd(fruits,fruit) {
   fruits.push(fruit)
   return fruits
 }
console.log(addFruitToEnd(["cherry" , "apple"] , "orange"))
/**
 * Adds a fruit to the front of an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */
function addFruitToFront(fruits,fruit) {
fruits.unshift(fruit)
return fruits
}
console.log(addFruitToFront(["apple" , "orange"] , "cherry"))

/**
 * Removes the last fruit from an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */
function removeLast(fruits,fruit) {
fruits.pop()
return fruits
}
console.log(removeLast(["cherry" , "apple"]))
/**
 * Removes and returns the last fruit from from an array of fruits
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */
function removeLastandReturnLast(fruits) {
 return fruits.pop()
}
console.log(removeFirstandReturnFirst(["cherry" , "apple"]))

/**
 * Takes in an array and returns the length
 * @param {Array} array
 * @returns {number}
 */
function arrayLength(array) {
return array.length 
}
arrayLength(["cherry" , "apple"])
/**
 * Removes the first fruit in an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */
function removeFirst(fruits) {
  fruits.shift()
  return fruits
}
console.log(removeFirst(["cherry" , "apple"]))
/**
 * Removes and returns the first fruit in an array of fruits.
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */
function removeFirstandReturnFirst(fruits) {
  return fruits.shift()
}
console.log(removeFirstandReturnFirst(["cherry" , "apple"]))
/**
 * Returns a string made by joining all of the elements in an array of fruits with a '$' character.
 * @param {string[]} fruits
 * @returns {string}
 */
function arrayToString(fruits) {
return fruits.join('$')
}
console.log(arrayToString(["animal" , "sdsdsd"]))
/**
 * Takes in two arrays. And returns the longer array.
 * If the arrays are of the same length return "They are the same size"
 *
 * @param {Array} array1
 * @param {Array} array2
 * @returns {string|Array}
 */
function largerArray(array1,array2) {
  if (array1 > array2) {
    return array1
  }
  if (array1 < array2) {
    return array2
  }
  else {
    return "They are the same size"
  }
}
console.log(largerArray())
/**
 * Takes in an array and returns the middle element.
 * If the array is even in length return the middle two elements in their own array.
 * @param {Array} array
 * @returns {*|Array}
 */
function middleElement(array) {
  let splice = array.splice(1,1) 
  return splice 
  }

console.log(middleElement([1,2,3,]))

/**
 * Takes in an array and returns the last element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */
function lastElementIndexing(array) {
  return array[array.length - 1]
}
console.log(lastElementIndexing([1,2,3,4]))
/**
 * Takes in an array and returns the first element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */
function firstElementIndexing(array) {
  return array[0]
}
console.log(firstElementIndexing([1,2,3,4]))
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
