/**
 * Appends a fruit to an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */

function addFruitToEnd(fruits, fruit) {
  //append = add something 
fruits.push(fruit); //push method adds fruits to the end

return fruits

}

/**
 * Adds a fruit to the front of an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */
function addFruitToFront(fruits, fruit) {

  fruits.unshift(fruit) //unshift will add a element to the front

  return fruits
}

/**
 * Removes the last fruit from an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */
function removeLast(fruits, fruit) {

fruits.pop(fruit) //pop method will remove a element from the back

return fruits

}

/**
 * Removes and returns the last fruit from from an array of fruits
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */
function removeLastandReturnLast(fruits) {

  return fruits.pop() //here we are returning the popped fruit not the whole array
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
//use shift to remove from the beginning
fruits.shift(fruits);

return fruits 

}

/**
 * Removes and returns the first fruit in an array of fruits.
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */
function removeFirstandReturnFirst(fruits) {
//Here we return the fruit shifted
return fruits.shift()

}

/**
 * Returns a string made by joining all of the elements in an array of fruits with a '$' character.
 * @param {string[]} fruits
 * @returns {string}
 */
function arrayToString(fruits) {
//Join will convert and array to a string

return fruits.join('$')


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
//use if statement 
if (array1 > array2) {
  return array1
} else if (array2 > array1) {
  return array2
} else {
  return 'They are the same size'
}
}

/**
 * Takes in an array and returns the middle element.
 * If the array is even in length return the middle two elements in their own array.
 * @param {Array} array
 * @returns {*|Array}
 */
function middleElement(array) {  //divide array in half and getting the element of the middle and the one before it 

  if (array.length % 2 === 0) {
    return (array[array.length/2]) //should be able to be divided in half with one middle 
  } else if (array.length % 2 === 1){
    return (array[array.length/2], (array[array.length/2 -1])) //to get m
  }    //if array lenght divded by 2 = 1
}

/**
 * Takes in an array and returns the last element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */
function lastElementIndexing(array) {
  return (array[array.length - 1]) //-1 always gets last element
}

/**
 * Takes in an array and returns the first element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */
function firstElementIndexing(array) {
  return array[0] //array indexes start at 0
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
