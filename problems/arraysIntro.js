/**
 * Appends a fruit to an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */
<<<<<<< HEAD
const addFruitToEnd = (fruits, fruit) =>{
  fruits.push(fruit);
  return fruits;


}
=======
// / push method = appends element to the end of an Array
// unshift method = adds element to the beginning of an Array
// when you return push, you will get a number which represents the lenght of the Array
// when you return unshift, you will get a number which represents the lenght of the Array
// pop method = pops off the last element of an array
// shift method = removes first element of an array
// when you return either pop or shift , you will get the actual element that came off
// slicw returns the last element in an arry without mutating it

  const addFruitToEnd = (fruits,fruit) => {
    fruits.push(fruit)
    return fruits
  }
    
>>>>>>> 65f2b4bd4a3c615edee8f37838a14e0a352011a0

/**
 * Adds a fruit to the front of an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */
<<<<<<< HEAD
function addFruitToFront(fruits, fruit) {
  fruits.unshift(fruit);
  return fruits
  
}
=======
    const addFruitToFront = (fruits,fruit) => {
      fruits.unshift(fruit)
      return fruits
    } 
>>>>>>> 65f2b4bd4a3c615edee8f37838a14e0a352011a0

    /**
 * Removes the last fruit from an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */
function removeLast(fruits) {
  fruits.pop();
  return fruits;
}
/**
/**
 * Removes the last fruit from an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */
<<<<<<< HEAD
function removeLast(fruits) {
  fruits.pop();
  return fruits;
}
=======
  const removeLastFruit = (fruit) => {
      fruits.pop()
      return fruits
}


>>>>>>> 65f2b4bd4a3c615edee8f37838a14e0a352011a0
/**
 * Removes and returns the last fruit from from an array of fruits
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */
<<<<<<< HEAD
function removeLastandReturnLast(fruits) {
  return fruits.pop();
=======
  const removeLastandReturnLast = (fruits) => {
      return fruits.pop() ;
      
>>>>>>> 65f2b4bd4a3c615edee8f37838a14e0a352011a0
}

/**
 * Takes in an array and returns the length
 * @param {Array} array
 * @returns {number}
 */
<<<<<<< HEAD
function arrayLength(array) {
 return array.length;
=======
  const arrayLength = (array) => {
    return array.length
>>>>>>> 65f2b4bd4a3c615edee8f37838a14e0a352011a0
}

/**
 * Removes the first fruit in an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */
<<<<<<< HEAD
function removeFirst(fruits) {
 fruits.shift();
 return fruits;
}
=======
    const  removeFirst = (fruits) => {
       fruits.shift()
       return fruits 
 }
>>>>>>> 65f2b4bd4a3c615edee8f37838a14e0a352011a0

/**
 * Removes and returns the first fruit in an array of fruits.
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */
<<<<<<< HEAD
function removeFirstandReturnFirst(fruits) {
  return fruits.shift();
}
=======
    const removeFirstandReturnFirst = (fruits) => {
       return fruits.shift()

    }
>>>>>>> 65f2b4bd4a3c615edee8f37838a14e0a352011a0

/**
 * Returns a string made by joining all of the elements in an array of fruits with a '$' character.
 * @param {string[]} fruits
 * @returns {string}
 */
<<<<<<< HEAD
function arrayToString(fruits) {
  return fruits.join('$');
}
=======
  const arrayToString = (fruits) => {
    return fruits.join("$")

  }
>>>>>>> 65f2b4bd4a3c615edee8f37838a14e0a352011a0

/**
 * Takes in two arrays. And returns the longer array.
 * If the arrays are of the same length return "They are the same size"
 *
 * @param {Array} array1
 * @param {Array} array2
 * @returns {string|Array}
 */
<<<<<<< HEAD
function largerArray(array1, array2) {
  if (array1.length > array2.length){
    return array1
  } else if ( array1.length < array2.length){
    return array2
  } else {
    return "They are the same size"
  }
}
=======
    const largerArray = (array1, array2) => {
      if (array1.length > array2.length){
        return array1
      }else if (array1.length < array2.length){
        return array2
      }else{
        return "They are the same size"
      }
    }

>>>>>>> 65f2b4bd4a3c615edee8f37838a14e0a352011a0

/**
 * Takes in an array and returns the middle element.
 * If the array is even in length return the middle two elements in their own array.
 * @param {Array} array
 * @returns {*|Array}
 */
<<<<<<< HEAD
function middleElement(array) {
  let mid = [array[(array.length /2)-1], array[(array.length/2)]]
  if(array.length % 2 ===1){
    return array[(array.length -1)/2];
}else{
  return mid
    
}
}

=======
    const middleElement = (array) => {
        let mid = [array[(array.length /2)-1], array[(array.length/2)]]
        if(array.length % 2 ===1){
          return array[(array.length -1)/2];
      }else{
        return mid
          
      }
      }
      
    
>>>>>>> 65f2b4bd4a3c615edee8f37838a14e0a352011a0

/**
 * Takes in an array and returns the last element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */
<<<<<<< HEAD
function lastElementIndexing(array) {
  return array[array.length -1]
}
=======
      const lastElementIndexing = (array) => {
        return array[array.length -1]
       
      }
>>>>>>> 65f2b4bd4a3c615edee8f37838a14e0a352011a0

/**
 * Takes in an array and returns the first element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */
<<<<<<< HEAD
function firstElementIndexing(array) {
  return array[0]
}
=======
    const firstElementIndexing = (array) => {
      return array[0]
      
    }
>>>>>>> 65f2b4bd4a3c615edee8f37838a14e0a352011a0

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
