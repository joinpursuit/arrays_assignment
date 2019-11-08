// # Arrays Lab

// To complete this lab (as for most labs), do the following:

// 1. Fork this repo.
// 2. Clone **your** forked repo.
// 3. Create a file called `arrays_lab.js` inside your cloned repo.
// 4. Copy the description of the exercise as a comment.
// 5. Underneath the commented description write your code.
// 6. Ensure your solutions work properly!
// 7. Open PR against this repo.

// ___

// ## Exercises

// ## 1. Problem One - Fruits array

// a. Add "mango" to the end of a fruits array ["strawberry", "banana"].
let fruits = ["strawberry", "banana"];
fruits.push("mango");
console.log(fruits);

// b. Add "blueberry" to the front of the same fruits array.
fruits.unshift("blueberry");
console.log(fruits)

// c. Remove the last element of the fruits array.
fruits.pop();
console.log(fruits);

// d. console.log the length of the fruits array.
console.log(fruits.length);

// e. Remove the first element of the fruits array.
fruits.shift();
console.log(fruits);
// f. Join all the elements in the fruits array with a '$'.
;
console.log(fruits.join(" $ ").split());

// ## 2. Problem Two - Larger array

// Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"

// ```js
let firstArr = [1, 2, 3]
let secondArr = [1, 5, 2, 4]

// // log [1,5,2,4]
// ```

// let str2 = "This is the largest array"
if (firstArr.length === secondArr.length) {
  console.log(`They are the same size`)
} else if (firstArr.length > secondArr.length) {
  console.log(firstArr)
} else {
  console.log(secondArr)

  // console.log(str2, secondArr)
}
// ## 3. Problem Three - Middle element

// Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.

// ```js
// let hasExactMiddleArr = [1, 5, 3]

// // logs 5

// let hasNoExactMiddleArr = [1,4,6,9]

// // logs 4,6

// ```

let arrayThree = [9, 8, 7, 6]
let midElement = Math.ceil(arrayThree.length / 2)
let otherMid = midElement - 1

if (arrayThree.length % 2 === 1) {
  console.log(arrayThree[midElement])
} else if (arrayThree.length % 2 === 0) {
  console.log(`${arrayThree[otherMid]}, ${arrayThree[midElement]}`)
}