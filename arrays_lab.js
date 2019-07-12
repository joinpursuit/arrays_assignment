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
let vacations = ['Greece', 'Colombia', 'Brazil', 'Netherlands', 'Bangladesh'];
console.log(vacations[vacations.length -1])

// 2. Change the first element of an array to the string "something else".
let colors = ['red', 'purple', 'orange', 'turquoise'];
colors[0]='something else';
console.log(colors);

// 3. Add "mango" to the end of a fruits array ["strawberry", "banana"].
let fruits = ['strawberry', 'banana', 'kiwi', 'watermelon'];
fruits.push('mango');
console.log(fruits);

// 4. Add "blueberry" to the front of the same fruits array.
fruits.unshift('blueberry');
console.log(fruits);

// 5. Remove the last element of the fruits array.
fruits.pop();
console.log(fruits);

// 6. console.log the length of the fruits array.
console.log(fruits.length)

// 7. Remove the first element of the fruits array.
fruits.shift();
console.log(fruits);

// 8. Join all the elements in the fruits array with a '$'.
let coinFruits = fruits.join('$');
console.log(coinFruits);

// 9. Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"
//
// ```js
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]
//
// // log [1,5,2,4]
// ```
let food =['tacos', 'mangu', 'Mac & Cheese', 'sushi', 'tomatos']
let bev =['water','apple juice', 'gingerale','tequila']
if (food.length < bev.length){
  console.log('Bev is larger')
} else if (bev.length < food.length){
  console.log('Food is larger')
}else{
  console.log('They are the same size')
}

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
// //
// // ```
let mix = ['a', 'e', 'i', 'o', 'u', 'y']
if (mix.length % 2 === 0){
  console.log(mix[mix.length/2] + ',' + mix[(mix.length/2) -1])
} else{
  console.log(mix[Math.floor(mix.length/2)])
}


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

let bday = ['Happy', 'Birthday','to', 'you', 'happy', 'birthday', 'to', 'you']
for(let i = 0; i < bday.length; i++){
console.log(bday[i])
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
let deep = ['I', 'am', 'a', 'happy', 'array']
let x= 0
while(x < deep.length) {
  console.log(deep[x])
  x++;
}

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

let logMeOutForOf = ["I", "am", "a", "happy", "array"]
for(let value of logMeOutForOf){
  console.log(value);
}
//
// // 14. Given an array of numbers, write code that logs the sum of all the numbers
// //
// // ```js
// // let firstArrToSum = [1, 2, 3, 4, 5, 6]
// // //  21
// //
// // let secondArrToSum = [1, 2, 3, 4, 5, -6]
// // //  9
// // ```
let sumOfArr = [1,3,89,2,11]
let total = 0
for(let t = 0; t < sumOfArr.length; t++){
total+=sumOfArr[t]
}
console.log(total)



// 15. Given an array of numbers, write code that logs all the odd numbers
//
// ```js
//
// let evenAndOddArr = [1,5,2,4,11,12,99,100]
//
// // 1, 5, 11, 99
// ```
let numArr = [2, 4, 9, 11, 24, 25, 34]
for(let o = 0; o < numArr.length; o++){ // create a loop to go through each value in array to determine if it is even
  if(numArr[o] % 2 !== 0){
    console.log(numArr[o])
  }
}
//
// // 16. Given an array of numbers, write code that logs the sum of all the even numbers
//
// ```js
//
// let evenAndOddArrToSum = [1,5,2,3,11,4,6]
//
// // 12
// ```
let evenAndOddArrToSum = [1,5,2,3,11,4,6]
// let evenSum = [];
let sum = 0
for(let e = 0; e < evenAndOddArrToSum.length; e++){
  if(evenAndOddArrToSum[e] % 2 === 0){
    // console.log(evenSum.push(evenAndOddArrToSum[e]))
    sum += evenAndOddArrToSum[e]
  }
}
console.log(sum)




// #BONUS QUESTIONS
// 17. Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.
//
// ```js
// let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// let noDupeList = []
//
// // noDupleList = [4, 2, 6, 9, 1]
//
// ```
// let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// let noDupeList = []
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
// let someRepeatsAgain = [25,11,30,31,50,28,4,37,13,20,24,38,28,14,44,33,7,43,39,35,36,42,1,40,7,14,23,46,21,39,11,42,12,38,41,48,20,23,29,24,50,41,38,23,11,30,50,13,13,16,10,8,3,43,10,20,28,39,24,36,21,13,40,25,37,39,31,4,46,20,38,2,7,11,11,41,45,9,49,31,38,23,41,16,49,29,14,6,6,11,5,39,13,17,43,1,1,15,25]
//
// 19. Given an array of strings, find the the string with the most "a"s in it.
//
// ```js
// let mostAStrings = ["apes", "abba", "apple"]
//
// //"abba"
// ```
// let mostAStrings = ["apes", "abba", "apple"]
//
// 20. Find the second smallest number in an Array of Ints
//
// ```js
// let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]
//
// // 4
// ```
//
// let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]
// secondSmallestArr.sort()
// console.log(secondSmallestArr[1])
// let sliceSecondSmall = secondSmallestArr.slice(1,3)
//


// 
// let arr = [7,7,3,1,5,3,7,0]
// let output =[]
// for(let i = 1; i < arr.length; i++){
//   console.log(i)
//   if(arr[0] === arr[i]){
//     console.log("index of number if equals: ", i)
//     arr.splice(i,1)
//     console.log("array after splice: ", arr)
//   } else{
//     console.log("index of number if does not equal: ", i)
//     output.push(arr[i])
//     console.log(output)
//
//   }
// }
// console.log("OUTPUT: ", output)
