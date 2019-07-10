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

// 1. Log the last element of an array.
let arr1 = [1,2,3,4];
console.log("1) ", arr1[arr1.length - 1]);
console.log("- - - - - - - - - - -");
// 2. Change the first element of an array to the string "something else".
let arr2 = ["i", "like", "to", "eat"];
arr2[0] = "something else";
console.log("2) ", arr2);
console.log("- - - - - - - - - - -");
// 3. Add "mango" to the end of a fruits array ["strawberry", "banana"].
let arr3 = ["strawberry", "banana"];
arr3.push("mango");
console.log("3) ", arr3);
console.log("- - - - - - - - - - -");
// 4. Add "blueberry" to the front of the same fruits array.
arr3.unshift("blueberry");
console.log("4) ", arr3);
console.log("- - - - - - - - - - -");
// 5. Remove the last element of the fruits array.
arr3.pop();
console.log("5) ", arr3);
console.log("- - - - - - - - - - -");
// 6. console.log the length of the fruits array.
console.log("6) ", arr3.length);
console.log("- - - - - - - - - - -");
// 7. Remove the first element of the fruits array.
arr3.shift();
console.log("7) ", arr3);
console.log("- - - - - - - - - - -");
// 8. Join all the elements in the fruits array with a '$'.
console.log("8) ", arr3.join("$"));
console.log("- - - - - - - - - - -");
// 9. Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"

// ```js
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]

// // log [1,5,2,4]
// ```

let arr9a = [1,1,1];
let arr9b = [1,1,1,1];
if (arr9a.length === arr9b.length) {
  console.log("9) ", "They are the same size.");
} else if (arr9a.length > arr9b.length) {
  console.log("9) ", arr9a);
} else {
  console.log("9) ", arr9b);
}
console.log("- - - - - - - - - - -");
// 10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.

// ```js
// let hasExactMiddleArr = [1,5,3]

// // log 5

// let hasNoExactMiddleArr = [1,4,6,9]

// // log 4,6

// ```
let arr10 = [1,2,3,4,5,6];
if (arr10.length % 2 !== 0) {
  console.log("10) ", arr10[Math.floor(arr10.length / 2)])
} else {
  console.log("10) ", arr10[Math.floor(arr10.length / 2) - 1], arr10[Math.floor(arr10.length / 2)])
}
console.log("- - - - - - - - - - -");
// 11. Write code that logs every value in an array using a for loop

// ```js
// let logMeOutFor = ["I", "am", "a", "happy", "array"]

// /* I
//   am
//   a
//   happy
//   array
// */
// ```
let logMeOutFor = ["I", "am", "a", "happy", "array"]
for (let i = 0; i < logMeOutFor.length; i++) {
  console.log("11) ", logMeOutFor[i]);
}
console.log("- - - - - - - - - - -");
// 12. Write code that logs every value in an array using a while loop

// ```js
// let logMeOutWhile = ["I", "am", "a", "happy", "array"]

// /* I
//   am
//   a
//   happy
//   array
// */
// ```
logMeOutWhile = ["I", "am", "a", "happy", "array"];
while(logMeOutWhile.length) {
  console.log("12) ", logMeOutWhile.shift());
}
console.log("- - - - - - - - - - -");
// 13. Write code that logs every value in an array using a for/of loop

// ```js
// let logMeOutForOf = ["I", "am", "a", "happy", "array"]

// /* I
//   am
//   a
//   happy
//   array
// */
// ```
logMeOutForOf = ["I", "am", "a", "happy", "array"];
for (const ele of logMeOutForOf) {
  console.log("13) ", ele);
}
console.log("- - - - - - - - - - -");
// 14. Given an array of numbers, write code that logs the sum of all the numbers

// ```js
// let firstArrToSum = [1, 2, 3, 4, 5, 6]
// //  21

// let secondArrToSum = [1, 2, 3, 4, 5, -6]
// //  9
// ```
let arr14 = [1,2,3];
let sum = 0;
for(let num of arr14) {
  sum += num;
}
console.log("14) ", sum);
console.log("- - - - - - - - - - -");
// 15. Given an array of numbers, write code that logs all the odd numbers

// ```js

// let evenAndOddArr = [1,5,2,4,11,12,99,100]

// // 1, 5, 11, 99
// ```
let evenAndOddArr = [1,5,2,4,11,12,99,100];
let str = [];
for (let num of evenAndOddArr) {
  if (num % 2 !== 0) {
    str.push(num);
  }
}
console.log("15) ", str + "");
console.log("- - - - - - - - - - -");
// 16. Given an array of numbers, write code that logs the sum of all the even numbers

// ```js

// let evenAndOddArrToSum = [1,5,2,3,11,4,6]

// // 12
// ```
let evenAndOddArrToSum = [1,5,2,3,11,4,6];
let sumEven = 0;
for (let num of evenAndOddArr) {
  if (num % 2 === 0) {
    sumEven += num;
  }
}
console.log("16) ", sumEven);
console.log("- - - - - - - - - - -");
// 17. Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.

// ```js
// let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// let noDupeList = []

// // noDupleList = [4, 2, 6, 9, 1]

// ```
let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1];
let noDupeList = [];
for (let num of dupeFriendlyList) {
  if (!noDupeList.includes(num)) {
    noDupeList.push(num);
  }
}
console.log("17) ", noDupeList);
console.log("- - - - - - - - - - -");
// 18. Make an array that contains all elements that appear exactly once in someRepeatsAgain

// ```js
// let someRepeatsAgain = [25,11,30,31,50,28,4,37,13,20,24,38,28,14,44,33,7,43,39,35,36,42,1,40,7,14,23,46,21,39,11,42,12,38,41,48,20,23,29,24,50,41,38,23,11,30,50,13,13,16,10,8,3,43,10,20,28,39,24,36,21,13,40,25,37,39,31,4,46,20,38,2,7,11,11,41,45,9,49,31,38,23,41,16,49,29,14,6,6,11,5,39,13,17,43,1,1,15,25]

// // [ 44,33,35,12,48,30,50,8,3,10,28,24,36,21,1000,40,37,4,46,20,2,7,45,9,31,38,23,41,16,49,29,14,6,11,5,39,13,17,43,1,15,25 ]

// ```
let someRepeatsAgain = [25,11,30,31,50,28,4,37,13,20,24,38,28,14,44,33,7,43,39,35,36,42,1,40,7,14,23,46,21,39,11,42,12,38,41,48,20,23,29,24,50,41,38,23,11,30,50,13,13,16,10,8,3,43,10,20,28,39,24,36,21,13,40,25,37,39,31,4,46,20,38,2,7,11,11,41,45,9,49,31,38,23,41,16,49,29,14,6,6,11,5,39,13,17,43,1,1,15,25];
let logMe = [];
for (let num of someRepeatsAgain) {
  let count = 0;
  for (let numCheck of someRepeatsAgain) {
    (num === numCheck) ? count++ : "";
  }
  count <= 1 ? logMe.push(num) : "";
}
console.log("18) ", logMe + "");
console.log("- - - - - - - - - - -");
// 19. Given an array of strings, find the the string with the most "a"s in it.

// ```js
// let mostAStrings = ["apes", "abba", "apple"]

// //"abba"
// ```
let mostAStrings = ["apes", "abba", "apple"];
let bigString = '';
let max = 0;
for (let str of mostAStrings) {
  let count = 0;
  for (let ltr of str) {
    if(ltr === 'a') {
      count++;
    }
  }
  if(count > max) {
    max = count;
    bigString = str;
  }
}
console.log("19) ", bigString);
console.log("- - - - - - - - - - -");
// 20. Find the second smallest number in an Array of Ints

// ```js
// let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]

// // 4
// ```
let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69];
let first = secondSmallestArr[0];
let second = secondSmallestArr[0];
for (let num of secondSmallestArr) {
  if (num < first) {
    first = num;
  } else if (num < second) {
    second = num;
  }
}
console.log("20) ", second);