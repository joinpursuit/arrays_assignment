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

// ## 4. Problem Four - Iterate over an array

// a. Write code that logs every value in an array using a `for` loop

// ```js
let logMeOutFor = ["I", "am", "a", "happy", "array"]

// /* I
//   am
//   a
//   happy
//   array
// */
// ```

for (let i = 0; i < logMeOutFor.length; i++) {
  console.log(logMeOutFor[i])
}

// console.log(logInput.join(" "))


// b. Write code that logs every value in an array using a `while` loop

// ```js
let logMeOutWhile = ["I", "am", "a", "happy", "array"]

// /* I
//   am
//   a
//   happy
//   array
// */
// ```
let i = 0;
while (i < logMeOutWhile.length) {
  console.log(logMeOutWhile[i]);
  i++;
}


// c. Write code that logs every value in an array using a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop

// ```js
let logMeOutForOf = ["I", "am", "a", "happy", "array"]

// /* I
//   am
//   a
//   happy
//   array
// */
// ```


for (let i = 0; i < logMeOutForOf.length; i++) {
  console.log(logMeOutForOf[i])

}

// ## 5. Problem Five - Sum of array

// Given an array of numbers, write code that logs the sum of all the numbers

// ```js
let firstArrToSum = [1, 2, 3, 4, 5, 6]

let sum = 0;
for (let i = 0; i < firstArrToSum.length; i++) {

  sum += firstArrToSum[i]
}
console.log(sum);
// //  21

// let secondArrToSum = [1, 2, 3, 4, 5, -6]
// //  9
// ```

// 6. Problem Six - Log odd / even numbers

// a. Given an array of numbers, write code that logs all the odd numbers

// ```js

// let evenAndOddArr = [1,5,2,4,11,12,99,100]

// // 1, 5, 11, 99
// ```

let evenAndOddArr = [1, 5, 2, 4, 11, 12, 99, 100]

for (let i = 0; i < evenAndOddArr.length; i++) {
  if (evenAndOddArr[i] % 2 === 1) {
    console.log(evenAndOddArr[i])
  }
}


// b. Given an array of numbers, write code that logs the sum of all the even numbers

// ```js

// let evenAndOddArrToSum = [1,5,2,3,11,4,6]

// // 12
// ```

let evenAndOddArrToSum = [1, 5, 2, 3, 11, 4, 6]
let sumSix = 0;

for (let i = 0; i < evenAndOddArrToSum.length; i++) {
  if (evenAndOddArrToSum[i] % 2 === 0) {
    sumSix += evenAndOddArrToSum[i]
  }
}
console.log(sumSix)

// ## 7. Problem Seven - Smallest value

// Given an array of numbers, write code that logs the smallest value

// ```js
// let arr = [4,3,7,29,40]

// // 3
// ```
let arrSeven = [4, 3, 7, 29, 40]

let smallest = arrSeven[0];
// let secondSmallest = arrSeven[]

for (let i = 1; i < arrSeven.length; i++) {
  if (smallest > arrSeven[i]) {
    smallest = arrSeven[i]
    //if(smallest > )
  }
}
console.log(smallest)