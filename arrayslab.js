// // ## Exercises

// // ## 1. Problem One - Fruits array

// // a. Add "mango" to the end of a fruits array ["strawberry", "banana"].
// let fruits = ['strawberry', "banana"]
// fruits.push("mango");
// console.log(fruits)
// // b. Add "blueberry" to the front of the same fruits array.
// fruits.unshift('blueberry')
// console.log(fruits)
// // c. Remove the last element of the fruits array.
// fruits.pop()
// console.log(fruits)
// // d. console.log the length of the fruits array.
// console.log(fruits.length)
// // e. Remove the first element of the fruits array.
// fruits.shift()
// console.log(fruits)
// // f. Join all the elements in the fruits array with a '$'.
// console.log(fruits.join('$'))

// ## 2. Problem Two - Larger array

// Given two arrays, write code that logs the larger array.  
// If the arrays are the same length, log "They are the same size"
// let arr1 = [1, 2, 3, 4,]
// let arr2 = [5, 6, 7, 8, 9, 10]
// if (arr1.length === arr2.length) {
//     console.log ('they are the same size')
// } else console.log ('they are not the same size')

// ## 3. Problem Three - Middle element

// Given an array, log its middle element.  
// If the middle of the array is between two elements, log both of them.
//let hasExactMiddleArr = [1,5,3]
//console.log(hasExactMiddleArr.length)
//console.log(hasExactMiddleArr[1])
// let hasNoExactMiddleArr = ['A', 'B', 'D', '8'] // use if else conditional, and modulo % 2 to compare
// if (hasNoExactMiddleArr.length % 2 === 0){
//     console.log (hasNoExactMiddleArr[1,2]);
// } else {
//     console.log (hasNoExactMiddleArr [1]);
// }



// console.log(hasNoExactMiddleArr.length)
// console.log(hasNoExactMiddleArr[1,2])


// ```js
//let hasExactMiddleArr = [1,5,3]

// // logs 5

// let hasNoExactMiddleArr = [1,4,6,9]

// // logs 4,6

// ## 4. Problem Four - Iterate over an array

// a. Write code that logs every value in an array using a `for` loop

// ```js
let logMeOutFor = ["I", "am", "a", "happy", "array"]
let i = ""
for (i = 0; i < logMeOutFor.length; i++) {
    console.log(logMeOutFor[i])  

} 
// /* I
//   am
//   a
//   happy
//   array
// */
// ```