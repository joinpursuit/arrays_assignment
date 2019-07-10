// 1. Log the last element of an array.
let newArray = [1,2,3,4,5]
console.log(newArray[newArray.length - 1])
// 2. Change the first element of an array to the string "something else".
newArray.splice(0, 1, "something else")
console.log(newArray)
// 3. Add "mango" to the end of a fruits array ["strawberry", "banana"].
let fruits = ['strawberry', 'banana']
fruits.push('mango')
console.log(fruits)
// 4. Add "blueberry" to the front of the same fruits array.
fruits.unshift('blueberry')
console.log(fruits)
// 5. Remove the last element of the fruits array.
fruits.pop()
console.log(fruits)
// 6. console.log the length of the fruits array.
console.log(fruits.length)
// 7. Remove the first element of the fruits array.
fruits.shift()
console.log(fruits)
// 8. Join all the elements in the fruits array with a '$'.
console.log(fruits.join('$'))

// 9. Given two arrays, write code that logs the larger array.
// If the arrays are the same length, log "They are the same size"
// ```js
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]
// log [1,5,2,4]
console.log( 'question 9')

let firstArr = [1,2,3]
let secArr = [1,5,2,4]

if ( firstArr.length === secArr.length){
  console.log("They are the same")
}else if (firstArr > secArr){
  console.log(`${firstArr} is larger`)
}else{
  console.log(`${secArr} is larger`)
}

// 10. Given an array, log its middle element.  If the middle of the array is between two
// elements, log both of them.
// ```js
// let hasExactMiddleArr = [1,5,3]
// log 5
// let hasNoExactMiddleArr = [1,4,6,9]
// log 4,6
console.log( 'question 10')

//let array = [1,5,3]
 let array = [1,4,6,9]
 let middleIndex = Math.floor(array.length / 2)

if(middleIndex % 2 === 1){
  console.log(array[middleIndex])
} else {
console.log(array[middleIndex - 1] + ' and ' + array[middleIndex])
}

// 11. Write code that logs every value in an array using a for loop
// let logMeOutFor = ["I", "am", "a", "happy", "array"]

/* I
  am
  a
  happy
  array
*/
console.log( 'question 11')

let logMeOutFor = ["I", "am", "a", "happy", "array"]

for (let i = 0; i < logMeOutFor.length; i++){
  let logMeOut = logMeOutFor[i]
  console.log(logMeOut)
}

// 12. Write code that logs every value in an array using a while loop
// let logMeOutWhile = ["I", "am", "a", "happy", "array"]
/* I
  am
  a
  happy
  array
*/
console.log( 'question 12')

let logMeOutWhile = ["I", "am", "a", "happy", "array"];
let k = 0
while(k < logMeOutWhile.length){
  let logMe = logMeOutWhile[k]
  console.log(logMe)
  k++
}

// 13. Write code that logs every value in an array using a for/of loop

// let logMeOutForOf = ["I", "am", "a", "happy", "array"]
//
// /* I
//   am
//   a
//   happy
//   array
// */
console.log( 'question 13')

let logMeOutForOf = ["I", "am", "a", "happy", "array"]
for (let value of logMeOutFor) {
  console.log(value)
}

// 14. Given an array of numbers, write code that logs the sum of all the numbers
// let firstArrToSum = [1, 2, 3, 4, 5, 6]
//  21
// let secondArrToSum = [1, 2, 3, 4, 5, -6]
//  9
console.log( 'question 14')

let firstArrToSum = [1, 2, 3, 4, 5, 6]
let sum = 0
for(r = 0; r < firstArrToSum.length; r++){
  sum += firstArrToSum[r]
  }
  console.log('Sum: ' + sum)
// let sum = firstArrToSum.reduce((total, amount) => total + amount)
// console.log(sum)

// 15. Given an array of numbers, write code that logs all the odd numbers
// let evenAndOddArr = [1,5,2,4,11,12,99,100]
// // 1, 5, 11, 99
console.log( 'question 15')

 let evenAndOddArr = [1,5,2,4,11,12,99,100]

 for (i = 0; i < evenAndOddArr.length; i++){
   if(i % 2 === 1){
     console.log(`${i} is an odd number`)
   }
 }

 // 16. Given an array of numbers, write code that logs the sum of all the
 // even numbers
 // let evenAndOddArrToSum = [1,5,2,3,11,4,6]
 // 12
console.log( 'question 16')

let evenAndOddArrToSum = [1,5,2,3,11,4,6]
let l = 0
for(l = 0; l < evenAndOddArrToSum.length; l++){
  if(l % 2 === 0)

  console.log(`${l} is an even number`)
}
// let sum2 = evenAndOddArrToSum.reduce((total, amount) => total + amount)
// console.log(sum2)

// 17. Write code such that noDupeList has all the same numbers as
//dupeFriendlyList, but has no more than one of each number.
// let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// let noDupeList = []
// noDupleList = [4, 2, 6, 9, 1]

let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
let noDupeList = []

for(h = 0; h < dupeFriendlyList.length; i++){
  noDupeList =[new Set(dupeFriendlyList)]
//console.log(noDupeList)
}
//creates an infinite loop
