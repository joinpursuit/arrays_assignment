// // ## Exercises

// // ## 1. Problem One - Fruits array
// let fruits = ["straberry", "banana"]
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
// fruits.join("$")

// // ## 2. Problem Two - Larger array

// // Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"

// // ```js
// // let firstArr = [1,2,3]
// // let secondArr = [1,5,2,4]

// // // log [1,5,2,4]
// // ```
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]

// if(firstArr.length === secondArr.length){
//     console.log("They are the same size");
// } else if (firstArr.length > secondArr.length) {
//     console.log("The first array is larger")
// } else {
//     console.log("The second array is larger")
// }
// ## 3. Problem Three - Middle element

// Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.

// ```js
// let hasExactMiddleArr = [1,5,3]

// // logs 5

// let hasNoExactMiddleArr = [1,4,6,9]

// // logs 4,6

// ```

// let arr = [1, 2, 3, 4];
// if (arr.length % 2 === 1) {
//     let middleElement = Math.floor(arr.length / 2);
//     console.log(arr[middleElement]);
// } else {
//     let middleElement = Math.floor((arr.length - 1)/ 2);
//     let middleElement2 = Math.floor(arr.length / 2);
//     console.log(`${arr[middleElement]}, ${arr[middleElement2]}`)
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

// let logMeOutFor = ["I", "am", "a", "happy", "array"];
// for(let i = 0; i < logMeOutFor.length; i++) {
//     console.log(logMeOutFor[i]);
// }

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

// let logMeOutFor = ["I", "am", "a", "happy", "array"];
// let i = 0;
// while(i < logMeOutFor.length) {
//     console.log(logMeOutFor[i]);
//     i++;
// }


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

let logMeOutFor = ["I", "am", "a", "happy", "array"];
for(const value of logMeOutFor) {
    console.log(value);
}

// ## 5. Problem Five - Sum of array

// Given an array of numbers, write code that logs the sum of all the numbers

// ```js
// let firstArrToSum = [1, 2, 3, 4, 5, 6]
// //  21

// let secondArrToSum = [1, 2, 3, 4, 5, -6]
// //  9
// ```


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
