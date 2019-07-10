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

let arr = ["apples", "bananas", "strawberries"];
console.log(arr[arr.length - 1]);

// 2. Change the first element of an array to the string "something else".

let arr2 = ["peanuts", "almonds", "cashews"];
console.log(arr2);
arr2[0] = "something else";
console.log(arr2);

// 3. Add "mango" to the end of a fruits array ["strawberry", "banana"].

let arr3 = ["strawberry", "banana"];
console.log(arr3);
arr3.push("mango");
console.log(arr3);

// 4. Add "blueberry" to the front of the same fruits array.

arr3.unshift("blueberry");
console.log(arr3);

// 5. Remove the last element of the fruits array.

arr3.pop();
console.log(arr3);

// 6. console.log the length of the fruits array

console.log(arr3.length);

// 7. Remove the first element of the fruits array.

arr3.shift();
console.log(arr3);

// 8. Join all the elements in the fruits array with a '$'.

console.log(`${arr3}`);

// 9. Given two arrays, write code that logs the larger array.
// If the arrays are the same length, log "They are the same size"
//
// ```js
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]
//
// // log [1,5,2,4]
// ```

let firstArr = [45, 53, 67, 23, 7, 928];
let secondArr = [3, 13, 82, 5]

if (firstArr.length > secondArr.length) {
  console.log(firstArr);
} else if (firstArr.length < secondArr.length) {
  console.log(secondArr);
} else {
  console.log("They are the same.");
}

// 10. Given an array, log its middle element.  If the middle of the
// array is between two elements, log both of them.
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

let middleArr = [7, 6, 3, 0, 2];
let noMiddleArr = [2, 5, 1, 7, 4, 8];

let middleIndex = middleArr[Math.floor(middleArr.length / 2)]
// let middleIndex2 =
console.log(middleIndex);
console.log(noMiddleArr[(noMiddleArr.length / 2) - 1] + ", " +
 noMiddleArr[(noMiddleArr.length / 2)]);


// console.log(noMiddleArr[Math.floor(noMiddleArr.length / 2)],
// noMiddleArr[Math.ceil(noMiddleArr.length / 2)]);

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

let arr4 = ["spaghetti", "fettucine", "farfalle", "lasanga", "penne"]
for (let i = 0; i < arr4.length; i++){
  console.log(arr4[i])
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
let i = 0;
while (i < arr4.length) {
  console.log(arr4[i]);
  i++
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
for (let x of arr4) {
  console.log(x);
}
//
// 14. Given an array of numbers, write code that logs the sum of all
// the numbers
//
// ```js
// let firstArrToSum = [1, 2, 3, 4, 5, 6]
// //  21
//
// let secondArrToSum = [1, 2, 3, 4, 5, -6]
// //  9
// ```

let firstArrToSum = [32, 3, 45, 7]
let secondArrToSum = [6, -23, 56, -4]

console.log(firstArrToSum[0] + firstArrToSum[1] + firstArrToSum[2]
  + firstArrToSum[3]);


//
// 15. Given an array of numbers, write code that logs all the odd numbers
//
// ```js
//
// let evenAndOddArr = [1,5,2,4,11,12,99,100]
//
// // 1, 5, 11, 99
// ```

let evenAndOddArr = [3, 42, 44, 15, 79, 6, 22, 57];
for (let i = 0; i < evenAndOddArr.length; i++) {
  if (evenAndOddArr[i] % 2 === 1) {
    console.log(evenAndOddArr[i]);
  }
}

// 16. Given an array of numbers, write code that logs the sum of all
// the even numbers
//
// ```js
//
// let evenAndOddArrToSum = [1,5,2,3,11,4,6]
//
// // 12
// ```

let sumNum = [2, 41, 56, 13, 79, 6, 28, 57];
let sum = 0;
for (let i = 0; i < sumNum.length; i++) {
  if (sumNum[i] % 2 === 0) {
    sum += sumNum[i];
    console.log(sum);
  }
}

// 17. Write code such that noDupeList has all the same numbers as
// dupeFriendlyList, but has no more than one of each number.
//
// ```js
// let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// let noDupeList = []
//
// // noDupleList = [4, 2, 6, 9, 1]
//
// ```
// 18. Make an array that contains all elements that appear exactly
// once in someRepeatsAgain
//
// ```js
// let someRepeatsAgain = [25,11,30,31,50,28,4,37,13,20,24,38,28,
//   14,44,33,7,43,39,35,36,42,1,40,7,14,23,46,21,39,11,42,12,38,
//   41,48,20,23,29,24,50,41,38,23,11,30,50,13,13,16,10,8,3,43,10,
//   20,28,39,24,36,21,13,40,25,37,39,31,4,46,20,38,2,7,11,11,41,
//   45,9,49,31,38,23,41,16,49,29,14,6,6,11,5,39,13,17,43,1,1,15,25]
//
// // [ 44,33,35,42,12,48,30,50,8,3,10,28,24,36,21,1000,40,37,4,
//   46,20,2,7,45,9,31,38,23,41,16,49,29,14,6,11,5,39,13,17,43,1,15,25 ]
//
//
// ```
//
// 19. Given an array of strings, find the the string with the most
// "a"s in it.
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
// let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26,
//   83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]
//
// // 4
// ```
