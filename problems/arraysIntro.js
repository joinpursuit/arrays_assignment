/**
 * Appends a fruit to an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */
<<<<<<< HEAD
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
    
=======
const addFruitToEnd = (fruits, fruit) =>{
  fruits.push(fruit);
  return fruits;


}
>>>>>>> b73800124e721979c07986576c2fbac80948f667

/**
 * Adds a fruit to the front of an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */
<<<<<<< HEAD
    const addFruitToFront = (fruits,fruit) => {
      fruits.unshift(fruit)
      return fruits
    } 
=======
function addFruitToFront(fruits, fruit) {
  fruits.unshift(fruit);
  return fruits
  
}
>>>>>>> b73800124e721979c07986576c2fbac80948f667

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
  const removeLastFruit = (fruit) => {
      fruits.pop()
      return fruits
}


=======
function removeLast(fruits) {
  fruits.pop();
  return fruits;
}
>>>>>>> b73800124e721979c07986576c2fbac80948f667
/**
 * Removes and returns the last fruit from from an array of fruits
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */
<<<<<<< HEAD
  const removeLastandReturnLast = (fruits) => {
      return fruits.pop() ;
      
=======
function removeLastandReturnLast(fruits) {
  return fruits.pop();
>>>>>>> b73800124e721979c07986576c2fbac80948f667
}

/**
 * Takes in an array and returns the length
 * @param {Array} array
 * @returns {number}
 */
<<<<<<< HEAD
  const arrayLength = (array) => {
    return array.length
=======
function arrayLength(array) {
 return array.length;
>>>>>>> b73800124e721979c07986576c2fbac80948f667
}

/**
 * Removes the first fruit in an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */
<<<<<<< HEAD
    const  removeFirst = (fruits) => {
       fruits.shift()
       return fruits 
 }
=======
function removeFirst(fruits) {
 fruits.shift();
 return fruits;
}
>>>>>>> b73800124e721979c07986576c2fbac80948f667

/**
 * Removes and returns the first fruit in an array of fruits.
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */
<<<<<<< HEAD
    const removeFirstandReturnFirst = (fruits) => {
       return fruits.shift()

    }
=======
function removeFirstandReturnFirst(fruits) {
  return fruits.shift();
}
>>>>>>> b73800124e721979c07986576c2fbac80948f667

/**
 * Returns a string made by joining all of the elements in an array of fruits with a '$' character.
 * @param {string[]} fruits
 * @returns {string}
 */
<<<<<<< HEAD
  const arrayToString = (fruits) => {
    return fruits.join("$")

  }
=======
function arrayToString(fruits) {
  return fruits.join('$');
}
>>>>>>> b73800124e721979c07986576c2fbac80948f667

/**
 * Takes in two arrays. And returns the longer array.
 * If the arrays are of the same length return "They are the same size"
 *
 * @param {Array} array1
 * @param {Array} array2
 * @returns {string|Array}
 */
<<<<<<< HEAD
    const largerArray = (array1, array2) => {
      if (array1.length > array2.length){
        return array1
      }else if (array1.length < array2.length){
        return array2
      }else{
        return "They are the same size"
      }
    }

=======
function largerArray(array1, array2) {
  if (array1.length > array2.length){
    return array1
  } else if ( array1.length < array2.length){
    return array2
  } else {
    return "They are the same size"
  }
}
>>>>>>> b73800124e721979c07986576c2fbac80948f667

/**
 * Takes in an array and returns the middle element.
 * If the array is even in length return the middle two elements in their own array.
 * @param {Array} array
 * @returns {*|Array}
 */
<<<<<<< HEAD
    const middleElement = (array) => {
        let mid = [array[(array.length /2)-1], array[(array.length/2)]]
        if(array.length % 2 ===1){
          return array[(array.length -1)/2];
      }else{
        return mid
          
      }
      }
      
    
=======
function middleElement(array) {
  let mid = [array[(array.length /2)-1], array[(array.length/2)]]
  if(array.length % 2 ===1){
    return array[(array.length -1)/2];
}else{
  return mid
    
}
}

>>>>>>> b73800124e721979c07986576c2fbac80948f667

/**
 * Takes in an array and returns the last element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */
<<<<<<< HEAD
      const lastElementIndexing = (array) => {
        return array[array.length -1]
       
      }
=======
function lastElementIndexing(array) {
  return array[array.length -1]
}
>>>>>>> b73800124e721979c07986576c2fbac80948f667

/**
 * Takes in an array and returns the first element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */
<<<<<<< HEAD
    const firstElementIndexing = (array) => {
      return array[0]
      
    }
=======
function firstElementIndexing(array) {
  return array[0]
}
>>>>>>> b73800124e721979c07986576c2fbac80948f667

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
