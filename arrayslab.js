// // ## Exercises

// // ## 1. Problem One - Fruits array
// let fruits = ["strawberry", "banana"]
// // a. Add "mango" to the end of a fruits array ["strawberry", "banana"].
// fruits.push("mango")
// // b. Add "blueberry" to the front of the same fruits array.
// fruits.unshift("blueberry")
// // c. Remove the last element of the fruits array.
// fruits.pop()
// // d. console.log the length of the fruits array.
// console.log(fruits.length)
// // e. Remove the first element of the fruits array.
// fruits.shift()
// // f. Join all the elements in the fruits array with a '$'.
// console.log(fruits.join("$"))

// // ## 2. Problem Two - Larger array

// // Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"

// // ```js
// // let firstArr = [1,2,3]
// // let secondArr = [1,5,2,4]

// // // log [1,5,2,4]
// // ```

// let firstArr = [3, 6, 9, 12]
// let secondArr = [3, 8, 10, 13, 17]

// if (firstArr.length > secondArr.length) {
//     console.log(firstArr)
// } else if (firstArr.length < secondArr.length) {
//     console.log(secondArr)
// } else {
//     console.log("They are the same")
// }

// // ## 3. Problem Three - Middle element

// // Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.

// // ```js
// // let hasExactMiddleArr = [1,5,3]

// // // logs 5

// // let hasNoExactMiddleArr = [1,4,6,9]

// // // logs 4,6

// // ```

// let arr = [1, 3, 5, 7, 11]
// let midElement = Math.floor(arr.length / 2)
// let midElement1 = Math.floor((arr.length - 1) / 2)
// if (arr.length % 2 === 0) {
//     console.log(arr[midElement] + ", " + arr[midElement1])
// // console.log(`${arr[midElement]} , ${arr[midElement1]}`)
// } else if (arr.length % 2 === 1) {
//     console.log(arr[midElement])
// }


// // ## 4. Problem Four - Iterate over an array



// // a. Write code that logs every value in an array using a `for` loop

// // ```js
// // let logMeOutFor = ["I", "am", "a", "happy", "array"]

// // /* I
// //   am
// //   a
// //   happy
// //   array
// // */
// // ```

// let logMeOutFor = ["I", "am", "a", "happy", "array"]

// for (let i = 0; i < logMeOutFor.length; i++) {
//   console.log(logMeOutFor[i]);
// }

// // b. Write code that logs every value in an array using a `while` loop

// // ```js
// // let logMeOutWhile = ["I", "am", "a", "happy", "array"]

// // /* I
// //   am
// //   a
// //   happy
// //   array
// // */
// // ```



// let logMeOutFor1 = ["I", "am", "a", "happy", "array"]

// let i = 0
// while (i < logMeOutFor1.length) {
//   console.log(logMeOutFor1[i]);
//    i += 1
// }

// // c. Write code that logs every value in an array using a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop

// // ```js
// // let logMeOutForOf = ["I", "am", "a", "happy", "array"]

// // /* I
// //   am
// //   a
// //   happy
// //   array
// // */
// // ```

// let logMeOut = ["I", "am", "a", "happy", "array"]

// for (let Element of logMeOut) {
//     console.log(Element);
//   }


// // ## 5. Problem Five - Sum of array

// // Given an array of numbers, write code that logs the sum of all the numbers

// // ```js
// // let firstArrToSum = [1, 2, 3, 4, 5, 6]
// // //  21

// // let secondArrToSum = [1, 2, 3, 4, 5, -6]
// // //  9
// // ```

// let firstArrToSum = [1, 2, 3, 4, 5, 6]
// let sum = 0
// for (i = 0; i <= firstArrToSum.length; i++) {
//  sum += i
// }
//   console.log(sum)

// // ## 6. Problem Six - Log odd/even numbers

// // a. Given an array of numbers, write code that logs all the odd numbers

// // ```js

// // let evenAndOddArr = [1,5,2,4,11,12,99,100]

// // // 1, 5, 11, 99
// // ```

// let evenAndOddArr = [1,5,2,4,11,12,99,100]
// let newArray = []
// for (let i = 0; i <= evenAndOddArr.length; i++) {
//   if (evenAndOddArr[i] % 2 === 1) {
//     newArray.push(evenAndOddArr[i]);
//   }
// }
// console.log(newArray.join(" , "));


// // b. Given an array of numbers, write code that logs the sum of all the even numbers

// // ```js

// // let evenAndOddArrToSum = [1,5,2,3,11,4,6]

// // // 12
// // ```

// let evenAndOddArrToSum = [1,5,2,3,11,4,6]
// let sum1 = 0
// for (let i = 0; i <= evenAndOddArrToSum.length; i ++) {
//   if (evenAndOddArrToSum[i] % 2 === 0) {
//     console.log(evenAndOddArrToSum[i]);
//     sum1 += evenAndOddArrToSum[i]
//   }
// }
// console.log(sum1);

// // ## 7. Problem Seven - Smallest value

// // Given an array of numbers, write code that logs the smallest value

// // ```js
// // let arr = [4,3,7,29,40]

// // // 3
// // ```

// let arr1 = [4,3,7,29,40]
// let smallest = arr1[0]
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] < smallest) {
//     smallest = arr1[i]
//   }
// }
// console.log(smallest)

// // ## 8. Problem Eight - Second smallest value

// // Find the second smallest number in an Array of Ints

// // ```js
// // let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]

// // // 4
// // ```

let array2 = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]
let smallestNum = Infinity
let secondSmallestNum = smallestNum
for (let i = 0; i < array2.length; i++) {
  if (array2[i] < smallestNum) {
    secondSmallestNum = smallestNum
    smallestNum = array2[i]
  } else if (secondSmallestNum > smallestNum && secondSmallestNum > array2[i]) {
    secondSmallestNum = array2[i]
  }
 } console.log(smallestNum)
  console.log(secondSmallestNum)


// ## 9. Problem Nine - Duplicates

// Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.

// <details>
//   <summary>Hint</summary>
  
//   Make another array to store all the values you've seen so far.  When looking at a new value, see if your array [includes](https://www.w3schools.com/jsref/jsref_includes_array.asp#targetText=The%20includes()%20method%20determines,element%2C%20and%20false%20if%20not.) the value, and only add it to the `noDupeList` if it doesn't.
// </details>

// ```js
// let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// let noDupeList = []

// // noDupleList = [4, 2, 6, 9, 1]

// ```


let dupeFriendlyList = [2, 5, 8, 3, 8, 1]
let noDupeList = []
// let noDupelist.concat(dupeFriendlyList) = friendlyDupe
for (let i = 0; i < dupeFriendlyList.length; i++) {
 if (!noDupeList.includes(dupeFriendlyList[i])) { 
   let n = dupeFriendlyList[i]
   noDupeList.push(n)
 }
}
console.log(noDupeList)