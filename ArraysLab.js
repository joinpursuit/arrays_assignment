// # Arrays Lab
//
// ___
//
// ## Exercises
//
// 1. Log the last element of an array.
// =======================================
// a.
// let arr = [ 'dog', 'cat', 'horse']
// console.log(arr.slice(2))
// b.
// let arr = [ 'dog', 'cat', 'horse']
// console.log(arr.splice(2))
// ===========================================================================
// 2. Change the first element of an array to the string "something else".
//let str = [ 'eggs', 'banana', 'milk', 'rice'];
// str.splice(0,1, 'fish')
// console.log(str)
//===========================================================================
// 3. Add "mango" to the end of a fruits
//array ["strawberry", "banana"].
// let arr = ["strawberry", "banana"];
// arr.push("mango")
// console.log(arr);
// ===========================================================================
// 4. Add "blueberry" to the front of the same fruits array.
// let arr = ["strawberry", "banana"]
// arr.unshift("blueberry")
// console.log(arr);
// ===========================================================================
//5. Remove the last element of the fruits array.
// let arr = ["blueberry", "strawberry", "banana"]
// arr.pop()
//console.log(arr)
//=============================================================================
// 6. console.log the length of the fruits array.
//let arr = ["blueberry", "strawberry", "banana"]
//console.log(arr.length)
//=============================================================================
// 7. Remove the first element of the fruits array.
// let arr = ["blueberry", "strawberry", "banana"]
// arr.shift()
// console.log(arr)
//=============================================================================
// 8. Join all the elements in the fruits array with a '$'.
// let arr = ["blueberry", "strawberry", "banana"]
// console.log(arr.join("$"))
// ==========================================================================
//
// 9. Given two arrays, write code that logs the larger array.
//  if the arrays are the same length, log "They are the same size"
//
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]
//
// // log [1,5,2,4]
//
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]
// if (firstArr.length > secondArr.length){
//     console.log(firstArr);
//   } else if (firstArr.length < secondArr.length) {
//   console.log(secondArr)
// } else {
// console.log( "They are the same size")
// }
// =====================================================================================
// 10. Given an array, log its middle element.
// If the middle of the array is between two elements, log both of them.
//let hasExactMiddleArr = [1,5,3]
//
// // log 5
//
// let hasNoExactMiddleArr = [1,4,6,9]
//
// // log 4,6
//=============================================
// a)
//  let arr = [1,5,3];
//  function middle(i) {
//    if ( arr[i] !== undefined) {
//      return middle(i+1);
//    } else {
//      return arr[Math.floor(i/2)];
//  }
// }
// console.log(middle(0));
// ==============================================
// b)
let arr = [1,4,6,9];
function middle(i) {
  if ( arr[i] !== undefined) {
    return middle(i+1);
  } else {

  } {
    return arr[Math.floor(i/2)]; return arr[Math.floor(i/2)-1];
}
}
console.log(middle(0)); 
//
// // log 4,6
//
// ```
//
// 11. Write code that logs every value in an array using a for loop
//
// ```js
// let logMeOutFor = ["I", "am", "a", "happy", "array"]
//
// /* I
//   am
//   a
//   happy
//   array
// */
// ```
//
// 12. Write code that logs every value in an array using a while loop
//
// ```js
// let logMeOutWhile = ["I", "am", "a", "happy", "array"]
//
// /* I
//   am
//   a
//   happy
//   array
// */
// ```
//
//
// 13. Write code that logs every value in an array using a for/of loop
//
// ```js
// let logMeOutForOf = ["I", "am", "a", "happy", "array"]
//
// /* I
//   am
//   a
//   happy
//   array
// */
// ```
//
//
// 14. Given an array of numbers, write code that logs the sum of all the numbers
//
// ```js
// let firstArrToSum = [1, 2, 3, 4, 5, 6]
// //  21
//
// let secondArrToSum = [1, 2, 3, 4, 5, -6]
// //  9
// ```
//
//
// 15. Given an array of numbers, write code that logs all the odd numbers
//
// ```js
//
// let evenAndOddArr = [1,5,2,4,11,12,99,100]
//
// // 1, 5, 11, 99
// ```
//
// 16. Given an array of numbers, write code that logs the sum of all the even numbers
//
// ```js
//
// let evenAndOddArrToSum = [1,5,2,3,11,4,6]
//
// // 12
// ```
//Bonus
// 17. Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.
//
// ```js
// let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// let noDupeList = []
//
// // noDupleList = [4, 2, 6, 9, 1]
//
// ```
//
// 18. Make an array that contains all elements that appear exactly once in someRepeatsAgain
//
// ```js
// let someRepeatsAgain = [25,11,30,31,50,28,4,37,13,20,24,38,28,14,44,33,7,43,39,35,36,42,1,40,7,14,23,46,21,39,11,42,12,38,41,48,20,23,29,24,50,41,38,23,11,30,50,13,13,16,10,8,3,43,10,20,28,39,24,36,21,13,40,25,37,39,31,4,46,20,38,2,7,11,11,41,45,9,49,31,38,23,41,16,49,29,14,6,6,11,5,39,13,17,43,1,1,15,25]
//
// // [ 44,33,35,42,12,48,30,50,8,3,10,28,24,36,21,1000,40,37,4,46,20,2,7,45,9,31,38,23,41,16,49,29,14,6,11,5,39,13,17,43,1,15,25 ]
//
//
// ```
//
// 19. Given an array of strings, find the the string with the most "a"s in it.
//
// ```js
// let mostAStrings = ["apes", "abba", "apple"]
//
// //"abba"
// ```
//
// 20. Find the second smallest number in an Array of Ints
//
// ```js
// let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]
//
// // 4
// ```
//
