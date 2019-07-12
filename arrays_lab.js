// # Arrays Lab
// ## Exercises

// 1. Log the last element of an array.
let pets = ["hamster", "chinchilla", "cat", "rabbit"];
console.log(pets[pets.length-1]);
// // 2. Change the first element of an array to the string "something else".
pets[0] = "something else";
console.log(pets[0]);
// // 3. Add "mango" to the end of a fruits array ["strawberry", "banana"].
let fruits = ["strawberry", "banana"];
fruits.push("mango");
console.log(fruits);
// // 4. Add "blueberry" to the front of the same fruits array.
fruits.unshift("blueberry");
console.log(fruits);
// // 5. Remove the last element of the fruits array.
fruits.pop();
// console.log(fruits);
// // 6. console.log the length of the fruits array.
console.log(fruits.length);
// // 7. Remove the first element of the fruits array.
fruits.shift();
console.log(fruits);
// // 8. Join all the elements in the fruits array with a '$'.
let joinedFruits = fruits.join("$");
console.log(joinedFruits);
// // 9. Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"
// //
// // ```js
// // let firstArr = [1,2,3]
// // let secondArr = [1,5,2,4]
// //
// // // log [1,5,2,4]
// // ```
let firstArr = [1,2,3];
let secondArr = [1,5,2,4];
if (firstArr.length === secondArr.length) {
  console.log("They are the same size.")
} else if (firstArr.length > secondArr.length) {
  console.log(firstArr);
} else {
  console.log(secondArr);
}

// // 10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.
// //
// // ```js
// // let hasExactMiddleArr = [1,5,3]
// //
// // // log 5
// //
// // let hasNoExactMiddleArr = [1,4,6,9]
// //
// // // log 4,6
// //
// // ```
let newArray = [1, 3, 5, 7, 21, 35, 49];
// let newArray = [2,4,6,8];
if (newArray.length % 2 === 0) {
  let index1 = newArray.length/2 - 1;
  let index2 = newArray.length/2;
  console.log(newArray[index1], newArray[index2]);
} else {
  let index3 = newArray.length/2;
  let index4 = Math.floor(index3);
  console.log(newArray[index4]);
}
//
// // 11. Write code that logs every value in an array using a for loop
// //
// // ```js
// // let logMeOutFor = ["I", "am", "a", "happy", "array"]
// //
// // /* I
// //   am
// //   a
// //   happy
// //   array
// // */
// // ```
let arrayMessageFor = ["I", "am", "a", "happy", "array"];
for (let forIndex = 0; forIndex < arrayMessageFor.length; forIndex++) {
  console.log(arrayMessageFor[forIndex]);
}
// //
console.log("____");
// //
// // 12. Write code that logs every value in an array using a while loop
// //
// // ```js
// // let logMeOutWhile = ["I", "am", "a", "happy", "array"]
// //
// // /* I
// //   am
// //   a
// //   happy
// //   array
// // */
// // ```
let arrayMessageWhile = ["I", "am", "a", "happy", "array"];
let arrIndex = 0;
while (arrIndex < arrayMessageWhile.length) {
  console.log(arrayMessageWhile[arrIndex]);
  arrIndex++;
}
// //
console.log("____");
// // 13. Write code that logs every value in an array using a for/of loop
// //
// // ```js
// // let logMeOutForOf = ["I", "am", "a", "happy", "array"]
// //
// // /* I
// //   am
// //   a
// //   happy
// //   array
// // */
// // ```
let arrayMessageForOF = ["I", "am", "a", "happy", "array"];
for (let forOfIndex of arrayMessageForOF) {
  console.log(forOfIndex);
  forOfIndex ++;
}
// //
console.log("___");
// 14. Given an array of numbers, write code that logs the sum of all the numbers
//
// ```js
// let firstArrToSum = [1, 2, 3, 4, 5, 6]
// //  21
//
// let secondArrToSum = [1, 2, 3, 4, 5, -6]
// //  9
// ```
let newSumArray = [2, 4, 8];
let newSum = 0;
for (myIndex = 0; myIndex < newSumArray.length; myIndex++) {
newSum += newSumArray[myIndex];
console.log(newSum);
}


console.log("___");
// //
// // 15. Given an array of numbers, write code that logs all the odd numbers
// //
// // ```js
// //
// // let evenAndOddArr = [1,5,2,4,11,12,99,100]
// //
// // // 1, 5, 11, 99
// // ```
let evenAndOddArr = [1,5,2,4,11,12,99,100];
for (let evenOddIndex = 0; evenOddIndex < evenAndOddArr.length; evenOddIndex ++) {
  if (evenAndOddArr[evenOddIndex] % 2 != 0) {
    console.log(evenAndOddArr[evenOddIndex]);
  }
}
// //
console.log("___");
// // 16. Given an array of numbers, write code that logs the sum of all the even numbers
// //
// // ```js
// //
// // let evenAndOddArrToSum = [1,5,2,3,11,4,6]
// //
// // // 12
// // ```
let evenAndOddArrToSum = [1,5,2,3,11,4,6];
for (let sumEvenIndex = 0; sumEvenIndex < evenAndOddArrToSum.length; sumEvenIndex ++) {
  if (evenAndOddArrToSum[sumEvenIndex] % 2 === 0) {
    let sumResult = evenAndOddArrToSum[sumEvenIndex] += evenAndOddArrToSum[sumEvenIndex];
    console.log(sumResult);
  }
}
//
// //BONUS QUESTIONS
// // 17. Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.
// //
// // ```js
// // let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// // let noDupeList = []
// //
// // // noDupleList = [4, 2, 6, 9, 1]
// //
// // ```
// //
// // 18. Make an array that contains all elements that appear exactly once in someRepeatsAgain
// //
// // ```js
// // let someRepeatsAgain = [25,11,30,31,50,28,4,37,13,20,24,38,28,14,44,33,7,43,39,35,36,42,1,40,7,14,23,46,21,39,11,42,12,38,41,48,20,23,29,24,50,41,38,23,11,30,50,13,13,16,10,8,3,43,10,20,28,39,24,36,21,13,40,25,37,39,31,4,46,20,38,2,7,11,11,41,45,9,49,31,38,23,41,16,49,29,14,6,6,11,5,39,13,17,43,1,1,15,25]
// //
// // // [ 44,33,35,42,12,48,30,50,8,3,10,28,24,36,21,1000,40,37,4,46,20,2,7,45,9,31,38,23,41,16,49,29,14,6,11,5,39,13,17,43,1,15,25 ]
// //
// //
// // ```
// //
// // 19. Given an array of strings, find the the string with the most "a"s in it.
// //
// // ```js
// // let mostAStrings = ["apes", "abba", "apple"]
// //
// // //"abba"
// // ```
// //
// // 20. Find the second smallest number in an Array of Ints
// //
// // ```js
// // let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]
// //
// // // 4
// // ```
