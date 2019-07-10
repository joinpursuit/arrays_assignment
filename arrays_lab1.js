// # Arrays Lab
//
// To complete this lab (as for most labs), do the following:
//
// 1. Fork this repo.
// 2. Clone **your** forked repo.
// 3. Create a file called `arrays_lab.js` inside your cloned repo.
// 4. Copy the description of the exercise as a comment.
// 5. Underneath the commented description write your code.
// 6. Ensure your solutions work properly!
// 7. Open PR against this repo.
//
// ___
//
// ## Exercises
//
// 1. Log the last element of an array.
let partySupplies = ['cake', 'food', 'utensils', 'balloons', 'decoration', 'music'];
console.log(partySupplies[partySupplies.length - 1]);
//
// // 2. Change the first element of an array to "something else".
partySupplies[0] = 'something else'
console.log(partySupplies)
//
// // 3. Add "mango" to the end fruits array ["strawberry", "bannana"].
let fruits = ['strawberry', 'banana']
fruits.push('mango')
console.log(fruits)
//
// // 4. Add "blueberry" to the front of the same fruits array.
fruits.unshift('blueberry')
console.log(fruits)
//
// // 5. Remove the last element of the fruits array.
fruits.pop()
console.log(fruits)
//
// // 6. console.log the length of the fruits array.
console.log(fruits.length)
//
// 7. Remove the first element of the fruits array.
fruits.shift()
console.log(fruits)

// // 8. Join all the elements in the fruits array with a '$'.

console.log(fruits.join('$'))

//9. Given two arrays, write code that logs the larger array.
// If the arrays are the same length, log "They are the same size"

// ```js
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]
//
// // log [1,5,2,4]
// ```
let longestArr = [["cows", "horses", "donkeys", "sheep"] , ["cat", "dog", "bird","fish"]]
if (longestArr[0].length > longestArr[1].length) {
  console.log(longestArr[0])
}else if (longestArr[0].length < longestArr[1].length) {
  console.log(longestArr[1])
}else
console.log("they are the same size")


// 10. Given an array, log its middle element.
//If the middle of the array is between two elements, log both of them.
//
// ```js
// let hasExactMiddleArr = [1,5,3]
//
// // log 5
//
// let hasNoExactMiddleArr = [1,4,6,9]
//
// // log 4,6
//
// ```
let animals = ['crab', 'dog', 'cat', 'bat', 'octopus', 'chinchilla', 'cow', 'horse', 'donkey', 'sheep', 'goat'];
let middleElement1 = animals[Math.floor((animals.length - 1) / 2)]
let middleElement2 = animals[Math.round((animals.length - 1) / 2)]
if (animals.length % 2 === 0) {
  console.log(middleElement1 + " " + middleElement2)
}else
console.log(middleElement2)


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
let wellness = ['I', 'am', 'feeling', 'much', 'better']
for (let i = 0; i < wellness.length; i++){
  console.log(wellness[i])
}

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
let wellnessi = ['I', 'am', 'feeling', 'much', 'better']
let i = 0
while (i < wellnessi.length) {
  console.log(wellnessi[i])
  i++;
}

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
let wellnessii = ['I', 'am', 'feeling', 'much', 'better']
for (let value of wellnessii) {
  console.log(value)
}


//
// 14. Given an array of numbers, write code that logs the sum of
//all the numbers
//
// ```js
// let firstArrToSum = [1, 2, 3, 4, 5, 6]
// //  21
//
// let secondArrToSum = [1, 2, 3, 4, 5, -6]
// //  9
// ```
//
// let ages = [20, 34, 24, 28, 41, 45, 27, 30]
// let sumAges = 0
// for (i = 0; i < ages.length; i++) {
//   sumAges += ages[i]
// }
// console.log(sumAges)
//
// //
// // 15. Given an array of numbers, write code that logs all the odd numbers
// //
// // ```js
// //
// // let evenAndOddArr = [1,5,2,4,11,12,99,100]
// //
// // // 1, 5, 11, 99
// // ```
// let agez = [20, 34, 24, 28, 41, 45, 27, 30]
// let odds =[]
// for (let i = 0; i < agez.length; i++) {
//   if ((agez[i] % 2) === 1) {
//     odds.push(agez[i])
// console.log(agez[i])
//   }
//
// }

// 16. Given an array of numbers, write code that logs the
//sum of all the even numbers
//
// ```js
//
// let evenAndOddArrToSum = [1,5,2,3,11,4,6]
//
// // 12
// ```
let agex = [20, 34, 24, 28, 41, 45, 27, 30]
let evens = []
let sumAgex = 0
for(let i = 0; i < agex.length; i++) {
  if ((agex[i] % 2) === 0) {
    sumAgex += agex[i]
    console.log(sumAgex)
  }
}

//
// 17. Write code such that noDupeList has all the same
// numbers as dupeFriendlyList, but has no more than one of each number.
//
// ```js
// let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// let noDupeList = []
//
// // noDupleList = [4, 2, 6, 9, 1]
//
// ```
//
// 18. Make an array that contains all elements that appear exactly once in
// someRepeatsAgain
//
// ```js
// let someRepeatsAgain = [25,11,30,31,50,28,4,37,13,20,24,38,28,14,44,33,7,43,39,35,36,42,1,40,7,14,23,46,21,39,11,42,12,38,41,48,20,23,29,24,50,41,38,23,11,30,50,13,13,16,10,8,3,43,10,20,28,39,24,36,21,13,40,25,37,39,31,4,46,20,38,2,7,11,11,41,45,9,49,31,38,23,41,16,49,29,14,6,6,11,5,39,13,17,43,1,1,15,25]
//
// // [ 44, 33, 35, 12, 48, 8, 3, 2, 45, 9, 5, 17, 15 ]
//
//
// ```


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
// 4
