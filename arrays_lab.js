// # Arrays Lab
//
// // To complete this lab (as for most labs), do the following:
// //
// // 1. Fork this repo.
// // 2. Clone **your** forked repo.
// // 3. Create a file called `arrays_lab.js` inside your cloned repo.
// // 4. Copy the description of the exercise as a comment.
// // 5. Underneath the commented description write your code.
// // 6. Ensure your solutions work properly!
// // 7. Open PR against this repo.
// //
// // ___
// //
// // ## Exercises
// //
// // 1. Log the last element of an array.

let fruitArray = ['apple', 'grapes', 'orange']
console.log(fruitArray.slice(2));

// // // 2. Change the first element of an array to the string "something else".
// //
let fruitArray1 = ['apple', 'grapes', 'orange']
fruitArray1[0] = 'something else'
console.log(fruitArray1)
// //
// // // 3. Add "mango" to the end of a fruits array ["strawberry", "banana"].
// //
let fruitArray3 = ['strawberry','banana' ]
fruitArray3.push('mango')// Adding mango to the last character of the array
console.log(fruitArray3)// printing new array
//
// // // 4. Add "blueberry" to the front of the same fruits array.
// //
// let fruitArray3 = ['strawberry','banana' ]
fruitArray3.unshift('blueberry'); // adding blueberryto the front of the same 
console.log(fruitArray3)
// //
// // // 5. Remove the last element of the fruits array.
 fruitArray3.pop()
 console.log(fruitArray3)
//  )
// // // 6. console.log the length of the fruits array.
// //
// //
console.log(fruitArray3.length);
//
// // // 7. Remove the first element of the fruits array.

fruitArray3.shift()
console.log(fruitArray3)
//
// // // 8. Join all the elements in the fruits array with a '$'.
// //
console.log(fruitArray3.join('$'))


// // 9. Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"
// //

let firstArr = [20,21,22,23]
let secondArr = [20,21,2,3]

console.log(firstArr.length)
console.log(secondArr.length)

if (firstArr.length === secondArr.length) {
console.log( "They are the same size")
}
if (firstArr.length > secondArr.length) {
console.log(firstArr)
} else {
console.log(secondArr)
}

// ```js
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]
//
// // log [1,5,2,4]
// ```
//
// 10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.
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
  //        [0,1,2,3,4,5]
let arr2 = [1,2,3,4,5,6]
  console.log(arr2.length)
let middleNumber =  Math.floor(arr2.length / 2) //3
if(arr2.length % 2 === 0) {
  console.log(arr2[middleNumber], arr2[middleNumber - 1]);
}else {
console.log(arr2[middleNumber])
}


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
//
let everyArr = [1,4,7,9,3,4]
for(let i =0; i<= everyArr.length-1; i++) {
console.log(everyArr[i]);
}

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
let ladyBug =[ "You","make", "me", "smile"]
 for(let i = 0; i <=ladyBug.length-1; i++) {
   console.log(ladyBug[i])
 }


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
let goodDog = ["I", "am", "hungry", "for", "turkey", "food"]
let i = 0;

 while(i <= goodDog.length-1) {
 console.log(goodDog[i]);
 i++
}

for (i = 0; i <= goodDog.length-1; i++) {
console.log(goodDog[i]);
}

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

let firstArrToSum = [19,23,20,9,7];
let sum = 0;
for (let i = 0; i < firstArrToSum.length; i++) {
  sum += firstArrToSum[i]; }
console.log(sum)




//
// 15. Given an array of numbers, write code that logs all the odd numbers

let allArrZ = [13,12,8,9,7,4] // the given values of the array
// let i = 0; //specifying to start at index 0 of the array
for (i= 0; i < allArrZ.length; i++) { // indicating to start at the index positions
if (allArrZ[i] % 2 !== 0) { // start at array allArr index 0 and if array values / 2 !== 0 its odd #
  console.log(allArrZ[i]) // print array index values that !== 0
  }
}

// ```js
//
// let evenAndOddArr = [1,5,2,4,11,12,99,100]
//
// // 1, 5, 11, 99
// ```
//
// 16. Given an array of numbers, write code that logs the sum of all the even numbers


let allArr = [13,12,8,9,7,4] // the given arrays values
let sum2 = 0; // specifying to start at the index 0 which hold the value of 13

for (i= 0; i < allArr.length; i++) { // start at index # 0 and add by one (i++) until its length # (5)
if (allArr[i] % 2 === 0) { // this indicates that if the statement index value (12) / 2 === 0 is true log
 sum2 += allArr[i] //then add the index value to the sum2 which now = 0 but plus 12 = 12 and move on to the next index value
  }
}
console.log(sum2)// print the sum2, which after adding all true statements  equals 24
//
// ```js
//
// let evenAndOddArrToSum = [1,5,2,3,11,4,6]
//
// // 12

// ```
//       Bonus
// 17. Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.
//
// ```js
// let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// let noDupeList = []
//
// // noDupleList = [4, 2, 6, 9, 1]


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
// ``
