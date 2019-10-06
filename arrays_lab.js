// ## Exercises

// ## 1. Problem One - Fruits array

// a. Add "mango" to the end of a fruits array ["strawberry", "banana"].

// b. Add "blueberry" to the front of the same fruits array.

// c. Remove the last element of the fruits array.

// d. console.log the length of the fruits array.

// e. Remove the first element of the fruits array.

// f. Join all the elements in the fruits array with a '$'.

// let fruits = ["strawberry", "banana"];
// fruits.push("mango");
// fruits.unshift("blueberry");
// fruits.pop();
// console.log(fruits.length);
// fruits.shift();
// console.log(fruits.join("$"));
// console.log(fruits)


// ## 2. Problem Two - Larger array

// Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"

// ```js
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]

// // log [1,5,2,4]
// ```
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]

// if(firstArr === secondArr) {
//     console.log("They are the same size")
// } else if (firstArr < secondArr) {
//     console.log(secondArr)
// } else { (secondArr < firstArr)
//     console.log(firstArr)
//}
// ## 3. Problem Three - Middle element

// Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.

// ```js
// let hasExactMiddleArr = [1,5,3]

// // logs 5

// let hasNoExactMiddleArr = [1,4,6,9]

// // logs 4,6

// ```



// let hasMidArr = [1,5,3]
// //let noExactMidArr = [1,4,6,9]

// if (hasMidArr % 2 === 1) {
//     let midArr = Math.floor(hasMidArr.length / 2);
//     console.log(hasMidArr[midArr]);
// } else {
//     let midArr = Math.floor((hasMidArr.length - 1)/ 2);
//     let midArr2 = Math.floor(hasMidArr.length / 2);
//     console.log(hasMidArr[midArr] + hasMidArr[midArr2])
// }


// ## 4. Problem Four - Iterate over an array


// a. Write code that logs every value in an array using a `for` loop

// ```js
// let logMeOutFor = ["I", "am", "a", "happy", "array"]

// /* I
//   am
//   a
//   happy
//   array
// */
// ```

// b. Write code that logs every value in an array using a `while` loop

// ```js
// let logMeOutWhile = ["I", "am", "a", "happy", "array"]

// /* I
//   am
//   a
//   happy
//   array
// */
// ```


// c. Write code that logs every value in an array using a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop

// ```js
// let logMeOutForOf = ["I", "am", "a", "happy", "array"]

// /* I
//   am
//   a
//   happy
//   array
// */
// ```
// let newArray = ["pokemon", "sword", "shield", "heart gold", "soul silver"]
//  for(let i = 0; i < newArray.length; i++) {
//      console.log(newArray[i])
// }

// let i = 0
// while(i < newArray.length) {
//     console.log(newArray[i])
//         i++
// }

// for (const element of newArray) {
//     console.log(element);
// }

// ## 5. Problem Five - Sum of array


// Given an array of numbers, write code that logs the sum of all the numbers

// ```js
// let firstArrToSum = [1, 2, 3, 4, 5, 6]
// //  21

// let secondArrToSum = [1, 2, 3, 4, 5, -6]
// //  9
// ```

// let numArr1 = [2, 3, 5, 6, 7]
// let sum = 0

// for(let i = 0; i < numArr1.length; i++) {
//     sum += numArr1[i]
// }
// console.log(sum)


// ## 6. Problem Six - Log odd/even numbers

// a. Given an array of numbers, write code that logs all the odd numbers

// ```js

// let evenAndOddArr = [1,5,2,4,11,12,99,100]

// // 1, 5, 11, 99
// ```

// b. Given an array of numbers, write code that logs the sum of all the even numbers

// ```js

// let evenAndOddArrToSum = [1,5,2,3,11,4,6]

// // 12
// ```

// let evenAndOddArr = [1, 5, 2, 4, 11, 12, 99, 100]
// let oddSum = 0

// for(let i = 0; i < evenAndOddArr.length; i++) {
//     if(evenAndOddArr[i] % 2 === 1) {
//         oddSum += evenAndOddArr[i]
//     }
// }
// console.log(oddSum)

// let evenSum = 0
// for(let i = 0; i < evenAndOddArr.length; i++) {
//     if(evenAndOddArr[i] % 2 === 0) {
//         evenSum += evenAndOddArr[i]
//     }
// }
// console.log(evenSum)

// ## 7. Problem Seven - Smallest value

// Given an array of numbers, write code that logs the smallest value

// ```js
// let arr = [4,3,7,29,40]

// // 3
// ```




// ## 8. Problem Eight - Second smallest value

// Find the second smallest number in an Array of Ints

// ```js
// let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]

// // 4
// ```


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
