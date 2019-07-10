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
console.log("#1 --------------------\n");

let arr = ["moose", "squirrel", "Boris", "Natasha", "Fearless Leader"];
console.log(arr[arr.length - 1]);

console.log(" ");

// 2. Change the first element of an array to "something else".
console.log("#2 --------------------\n");

arr[0] = "something else";
console.log(arr);

console.log(" ");

// 3. Add "mango" to the end fruits array ["strawberry", "bannana"].
console.log("#3 --------------------\n");

let fruit = ["strawberry", "bannana"];
fruit.push("mango");
console.log(fruit);

console.log(" ");

// 4. Add "blueberry" to the front of the same fruits array.
console.log("#4 --------------------\n");

fruit.unshift("blueberry");
console.log(fruit);

console.log(" ");

// 5. Remove the last element of the fruits array.
console.log("#5 --------------------\n");

fruit.pop();
console.log(fruit);

console.log(" ");

// 6. console.log the length of the fruits array.
console.log("#6 --------------------\n");

console.log(fruit.length);

console.log(" ");

// 7. Remove the first element of the fruits array.
console.log("#7 --------------------\n");

fruit.shift();
console.log(fruit);

console.log(" ");

// 8. Join all the elements in the fruits array with a '$'.
console.log("#8 --------------------\n");

let fruits = fruit.join("$");
console.log(fruits);

console.log(" ");

// 9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.
console.log("#9 --------------------\n");

let firstArray = [1, 2, 3, 23, 52, 96, 402]
let secondArray = [4, 3, 2, 1, 87, 6, 7]

if (firstArray.length > secondArray.length) {
  console.log(firstArray);
} else if (secondArray.length > firstArray.length) {
  console.log(secondArray);
} else {
  console.log(null)
}

longestArr = [[1, 2, 3, 4], [4, 5, 6, 7, 8]];

if (longestArr[0].length > longestArr[1].length) {
  console.log(longestArr[0]);
} else if (longestArr[1].length > longestArr[0].length) {
  console.log(longestArr[1]);
} else {
  console.log(null);
}

console.log(" ");

// ```js
// longestArr([1, 2, 3], [1, 2, 3, 4, 5]);
// // returns [1, 2, 3, 4, 5]
//
// longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]);
// // returns ["jets", "mets", "giants", "yankees"]

// 10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.
//

console.log("#10 --------------------\n");

let hasExactMiddleArr = ["Dipper", "Mabel", "Soos"];
console.log(hasExactMiddleArr);
let oddMiddleResult = hasExactMiddleArr[Math.floor(hasExactMiddleArr.length / 2)];

console.log(oddMiddleResult);

let hasNoExactMiddleArr= ["Leonardo", "Raphael", "Donatello", "Michelangelo"];
console.log(hasNoExactMiddleArr);
let evenMiddleResultTop = hasNoExactMiddleArr[(hasNoExactMiddleArr.length / 2) - 1];
let evenMiddleResultBottom = hasNoExactMiddleArr[hasNoExactMiddleArr.length / 2];
let evenMiddleResult = evenMiddleResultTop + " " + evenMiddleResultBottom;

console.log(evenMiddleResult);

console.log(" ");


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
//
// 11. Write code that logs every value in an array using a for loop
//

console.log("#11 --------------------\n");

let loopArr = [6, 45, 32, 83, 66, 91]

for(let i = 0; i < loopArr.length; i++) {
  let arrNum = loopArr[i]
  console.log(arrNum)
}

console.log(" ")

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
//
// 12. Write code that logs every value in an array using a while loop
//

console.log("#12 --------------------\n");

let whileLoopArr = ["olives", "pepperoni", "onions", "peppers"];
let num = 0;
while (num <= whileLoopArr.length - 1) {
  console.log(whileLoopArr[num]);
  num++;
}

console.log(" ");

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
//
//
// 13. Write code that logs every value in an array using a for/of loop
//
console.log("#13 --------------------\n");

let forOfLoopArr = ["huey", "louie", "bluey"];
for (let value of forOfLoopArr) {
  console.log(value);
}

console.log(" ");

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
//
//
// 14. Given an array of numbers, write code that logs the sum of all the numbers
//
console.log("#14 --------------------\n");
//
let arrOfNum = [21, 45, 72, 666];
// let var1 = arrOfNum[0];
// let var2 = arrOfNum[1];
// let var3 = arrOfNum[2];
// let var4 = arrOfNum[3];
// console.log(var1 + var2 + var3 + var4);



let a = 0
for (let i = 0; i < arrOfNum.length; i++) {
  a += arrOfNum[i]
  //a = a + arrOfNum[i] // same as above
  //console.log(arrOfNum[i])
}
console.log(a)

console.log(" ");

// ```js
// let firstArrToSum = [1, 2, 3, 4, 5, 6]
// //  21
//
// let secondArrToSum = [1, 2, 3, 4, 5, -6]
// //  9
// ```
//
//
// 15. Given an array of numbers, write code that logs all the odd numbers
//
console.log("#15 --------------------\n");

let evenAndOddArr = [1, 2, 3, 6, 8, 22, 35, 77, 42, 453];

for (let i = 0; i < evenAndOddArr.length; i++) {
  if (evenAndOddArr[i] % 2 === 1) {
    console.log(evenAndOddArr[i]);
  }
}

console.log(" ");

// ```js
//
// let evenAndOddArr = [1,5,2,4,11,12,99,100]
//
// // 1, 5, 11, 99
// ```
//
// 16. Given an array of numbers, write code that logs the sum of all the even numbers

console.log("#16 --------------------\n");

let y = 0
let evenAndOddArrToSum = [1, 2, 4, 75, 42, 33, 552]
for (let i = 0; i < evenAndOddArrToSum.length; i++) {
  if (evenAndOddArrToSum[i] % 2 === 0) {
    y += evenAndOddArrToSum[i]
  }
}
console.log(y)

console.log(" ")

// NOTE: Alejo gave me a TON of help with this one! But thanks to his
// help, I now understand the process of the loop and why it logs
// correctly.

// ```js
//
// let evenAndOddArrToSum = [1,5,2,3,11,4,6]
//
// // 12
// ```
//
// 17. Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.
//
console.log("#17 --------------------\n");

let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// let noDupeList = [...new Set(dupeFriendlyList)];
// console.log(noDupeList)
//

// NOTE: The above works, but it was coppied directly from a comment to a question on
// stackoverflow. I wanted to see if it would work. Much like indexOf
// I'm sure there are a lot of things working in the background in this
// code that someone else has built for others to use easily.

let noDupeList = dupeFriendlyList.filter(function(item, index) {
  if (dupeFriendlyList.indexOf(item) == index)
  return item;
});
console.log(noDupeList);

// NOTE: The above works as well - and was taken and transposed from
// stackoverflow. I barely understand how it's looping through the
// array, and checking numerical value against the index of each in the
// array - but I'm hazy on functions and keywords like .filter and .indexOf.
// below you'll see my personal attempts to write this loop out without
// keyword shortcuts, but nothing worked. I'm out of time to work on this,
// so I'm going to stop here - but I hope we can review these final 4
// questions before we move forward!

// let noDupeList = [];
// for (let i in dupeFriendlyList) {
//   if (noDupeList.indexOf(dupeFriendlyList[i]) === -1) {
//     dupeFriendlyList.push(noDupeList[i]);
//   }
// }
// console.log(noDupeList)

// function removeDupes(dupeFriendlyList) {
//   let obj = {};
//   let noDupeList = [];
//   for (let i = 0; i < dupeFriendlyList.length; i++) {
//     obj[dupeFriendlyList[i]] = true;
//   }
//   for (let key in obj) {
//     dupeFriendlyList.push(key);
//   }
//   return noDupeList;
// }

// dupeFriendlyList.filter(function(value, index){ return dupeFriendlyList.indexOf(value) === dupeFriendlyList.indexOf(value) });

// let noDupeList = []
// for (let value of dupeFriendlyList) {
//   for (let i = 0; i < dupeFriendlyList.length; i++) {
//     if (dupeFriendlyList[i] !== dupeFriendlyList[i]) {
//       noDupeList.push(value)
//     }
//   }
//
// }
// console.log(noDupeList)

// for (let value of dupeFriendlyList) {
//   for (let i of dupeFriendlyList.length) {
//     if (value[i] )
//   }
// }



//
// // noDupleList = [4, 2, 6, 9, 1]
//
// ```
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
// ```
