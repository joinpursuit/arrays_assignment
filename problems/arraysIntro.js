/**
 * Appends a fruit to an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */
function addFruitToEnd(fruits, fruit) {
  fruits.push (fruit)
  return (fruits)
}

/**
 * Adds a fruit to the front of an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */
function addFruitToFront(fruits, fruit) {
  fruits.unshift (fruit)
  return (fruits)
}

/**
 * Removes the last fruit from an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */
function removeLast(fruits) {
  fruits.pop()
  return (fruits)
}

/**
 * Removes and returns the last fruit from from an array of fruits
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */
function removeLastandReturnLast(fruits) {
  return fruits.pop();
}

/**
 * Takes in an array and returns the length
 * @param {Array} array
 * @returns {number}
 */
function arrayLength(array) {
  return array.length
}

/**
 * Removes the first fruit in an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */
function removeFirst(fruits) {
  fruits.shift()
  return (fruits)
}

/**
 * Removes and returns the first fruit in an array of fruits.
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */
function removeFirstandReturnFirst(fruits) {
  return fruits.shift()
}

/**
 * Returns a string made by joining all of the elements in an array of fruits with a '$' character.
 * @param {string[]} fruits
 * @returns {string}
 */
function arrayToString(fruits) {
  fruits.join('$')
  return (fruits)
}

/**
 * Takes in two arrays. And returns the longer array.
 * If the arrays are of the same length return "They are the same size"
 *
 * @param {Array} array1
 * @param {Array} array2
 * @returns {string|Array}
 */
function largerArray(array1, array2) {
  if (array1.lenght > array2.length) {
    return array1
  }
  else if (array1.length === array2.length) {
    return "They are the same size"
  } else {
    return array2
  }
}
console.log(largerArray([1,2, 5, 8],[3, 4, 5, 6]))
console.log(largerArray([1,2],[3, 4, 5, 6]))

/**
 * Takes in an array and returns the middle element.
 * If the array is even in length return the middle two elements in their own array.
 * @param {Array} array
 * @returns {*|Array}
 */

function middleElement(array) {
    function takeElement(i){
      let value = a[['pop', 'shift'][i]]();
      return 0 in a
      ? takeElement( 1 - i )
      : value;

    }
    let a = array.slice();
    return takeElement(0);  
  }
console.log(middleElement([9, 2, 6, 4,7]));
// let mid = [array.length / 2];
  // let mid2 = [mid - 1];
  //   if (array.length % 2 === 0) {
  //     return (mid.concat(mid2))
  
  //   }

//   function middleElement(array) {
//     let middleIndex = (array.length- 1)/2
//        let middleElement = array[middleIndex]
//     if (array.length % 2 === 0) {

//        return middleElement

//     }
//   }
// console.log(middleElement([1, 2, 3, 4]))

/**
 * Takes in an array and returns the last element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */
function lastElementIndexing(array) {
return (array[array.length-1]) 
}
console.log(lastElementIndexing([1,2,3, 5]))
/**
 * Takes in an array and returns the first element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */
function firstElementIndexing(array) {
  return (array[0]) 
}
console.log(firstElementIndexing([1,2]))


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
}