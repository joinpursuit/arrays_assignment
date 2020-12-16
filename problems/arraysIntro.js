/**
 * Appends a fruit to an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */


function addFruitToEnd(fruits,fruit) 
{
  fruits.push(fruit)
  return fruits
}

addFruitToEnd(['banana','mango'],'pinapple')


/**
 * Adds a fruit to the front of an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */
function addFruitToFront(fruits,fruit) 
{
  fruits.unshift(fruit)
  return fruits
}
addFruitToFront(['banana','mango'],'pinapple')


/**
 * Removes the last fruit from an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */
function removeLast(fruits) 
{
 fruits.pop(fruits[fruits.length-1])
 return fruits
}

console.log(removeLast(['cherry','watermelon','kiwi']))



/**
 * Removes and returns the last fruit from from an array of fruits
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */

function removeLastandReturnLast(fruits) 
{
  fruit = fruits.pop(fruits[fruits.length-1])
  return fruit
}

console.log(removeLastandReturnLast(['cherry','watermelon','kiwi']))


/**
 * Takes in an array and returns the length
 * @param {Array} array
 * @returns {number}
 */
function arrayLength(array) 
{
  return array.length
}

console.log(arrayLength('car','house','pool'))


/**
 * Removes the first fruit in an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */
function removeFirst(fruits) 
{
  fruits.shift()
  return fruits
}

console.log(removeFirst(['apple','melon','grapes']))

/**
 * Removes and returns the first fruit in an array of fruits.
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */
function removeFirstandReturnFirst(fruits) 
{
  fruit = fruits.shift()
  return fruit
}

removeFirstandReturnFirst(['apple','melon','grapes'])


/**
 * Returns a string made by joining all of the elements in an array of fruits with a '$' character.
 * @param {string[]} fruits
 * @returns {string}
 */
function arrayToString(fruits) 
{
    fruit = fruits.join('$')
    return fruit
}


/**
 * Takes in two arrays. And returns the longer array.
 * If the arrays are of the same length return "They are the same size"
 *
 * @param {Array} array1
 * @param {Array} array2
 * @returns {string|Array}
 */
function largerArray(array1,array2) 
{
    if (array1.length === array2.length)
    {
      return 'They are the same size'

    }else if (array1.length > array2.length)
    {
         return array1
    }else
    {
        return array2
    }
}


/**
 * Takes in an array and returns the middle element.
 * If the array is even in length return the middle two elements in their own array.
 * @param {Array} array
 * @returns {*|Array}
 */
function middleElement(array) 
{
   let n = Math.floor(array.length / 2)
   
  if (array.length %2 === 0 )
  {
    let middle = array.slice(n-1,n+1)
    return middle
  }else
    {
      let middle =  array.slice(n,n+1).join()
      //  I've tried everything even making it a number but with 'cat' I got NaN
      //let num = parseInt(middle,10)
      
      /*switch (middle)
      {
          case (typeof middle === "string"):
          
            return middle 
            break;
          case (num = true):
            return num
            break;
           */ 

           // After 4 hours of needed sleep, the mistake was obvious: I was overthinking, the problem just ask to print the 
           //middle value of array in the case of the array being odd
          return array[n]
      }
     }
    


middleElement([1,2,'cat',4,5])



/**
 * Takes in an array and returns the last element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */
function lastElementIndexing(array) 

{
    let tostrg = array.slice(array.length - 1,).join()
    return tostrg
}






/**
 * Takes in an array and returns the first element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */
function firstElementIndexing(array) 
{
  let tostrg = array.slice(0,1).join()
  return tostrg
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
