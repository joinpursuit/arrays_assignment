// // 1. Log the last element of an array.
 let movies = [`Love Jones`,`Love & Basketball`, `Soul Food`];
  console.log(movies[movies.length-1]);
// //
// // // 2. Change the first element of an array to the string "something else".
  console.log(movies.join(", "));
  replace the first string to "Jason's Lyric"
let updatedMovies = movies[0]= "Jason's Lyric";
console.log(updatedMovies);
// // 3. Add "mango" to the end of a fruits array ["strawberry", "banana"].
let fruits = [];
fruits.unshift("strawberry","banana");
fruits.push("mango")
console.log(fruits);
// // // 4. Add "blueberry" to the front of the same fruits array.
fruits.unshift("blueberry");
console.log(fruits);
// // // 5. Remove the last element of the fruits array.
fruits.pop();
console.log(fruits);
// // // 6. console.log the length of the fruits array.
console.log(fruits.length);
// // // 7. Remove the first element of the fruits array.
fruits.shift();
console.log(fruits);
// // 8. Join all the elements in the fruits array with a '$'.
// //console.log()
//
// //9. Given two arrays, write code that logs the larger array.
// //If the arrays are the same length, log "They are the same size"
//
// //```js
let firstArr = [1,2,3]
let secondArr = [1,5,2,4]
//
if (firstArr.length===secondArr.length) {
  console.log("They are the same size")
} else if (firstArr.length>secondArr.length) {
  console.log(firstArr);
} else {
  console.log(secondArr);
// }
// // log [1,5,2,4]
//
// //10. Given an array, log its middle element.  If the middle of the array
// //is between two elements, log both of them.
//
// //```js
let hasExactMiddleArr = [1,5,3]
let hasNoExactMiddleArr = [1, 4, 6, 9];
let midNum = hasNoExactMiddleArr.length / 2;
console.log(hasNoExactMiddleArr.length);
console.log(midNum);
console.log(hasNoExactMiddleArr[midNum]);
console.log(hasNoExactMiddleArr[midNum - 1]);

// 11. Write code that logs every value in an array using a for loop
//
// ```js
// let logMeOutFor = ["I", "am", "a", "happy", "array"]
// //
// // /* I
// //   am
// //   a
// //   happy
// //   array
// // */
// //```
for (let i = 0; i <= logMeOutFor.length; i++) {
  console.log(logMeOutFor[i]);
// }
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
while(i < logMeOutFor.length){
 console.log(logMeOutFor[i]);
 i++;
}

// 13. Write code that logs every value in an array using a for/of loop
// //
// // ```js
let logMeOutForOf = ["I", "am", "a", "happy", "array"]
// // //
// // // /* I
// // //   am
// // //   a
// // //   happy
// // //   array
// // // */
// // // ```
// //
for (let value of logMeOutForOf) {
  console.log(value);
};
// // 14. Given an array of numbers, write code that logs the sum of all the numbers
// //
// // ```js
let firstArrToSum = [1, 2, 3, 4, 5, 6]
let sum = 0;
// // // //  21
for (let i = 0; i < firstArrToSum.length; i++) {
  sum += firstArrToSum[i];
}
console.log(sum);
let secondArrToSum = [1, 2, 3, 4, 5, -6];
let sum2 = 0;
// // //  9
for (let i = 0; i < secondArrToSum.length; i++) {
  sum2+= secondArrToSum[i];
}
  console.log(sum2);
//
// // 15. Given an array of numbers, write code that logs all the odd numbers
// //
// // ```js
// //
let evenAndOddArr = [1,5,2,4,11,12,99,100]
// //
// // // 1, 5, 11, 99
// // ```
for (let x = 1; x < evenAndOddArr.length; x++) {
  if (evenAndOddArr[x]%2 !== 0) {
    console.log(evenAndOddArr[x]);
  }
  }
// // 16. Given an array of numbers, write code that logs the sum of all the
// //even numbers
// //
// // ```js
// //
let evenAndOddArrToSum = [1,5,2,3,11,4,6]
let addEven = 0
for(let k = 0; k < evenAndOddArrToSum.length; k++){
    if((evenAndOddArrToSum[k]%2) === 0){
        addEven += evenAndOddArrToSum[k];
    }
    }
    console.log(addEven);
// // 12
// // ```
// //
// // 17. Write code such that noDupeList has all the same numbers as
// //dupeFriendlyList, but has no more than one of each number.
// //
// // ```js
// // let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// // let noDupeList = []
//
// // noDupleList = [4, 2, 6, 9, 1]
