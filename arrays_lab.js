//  1. Log the last element of an array.
let names = ['Aransa', 'Juan', 'Cianna'];
console.log(names[2]);
console.log(names[names.length - 1]);

//2. Change the first element of an array to the string "something else".
names[0] = 'something else';
console.log(names);

//3. Add "mango" to the end of a fruits array ["strawberry", "banana"].
let fruits = ['strawberry', 'banana'];
fruits.push('mango');
console.log(fruits);

// 4. Add "blueberry" to the front of the same fruits array.
fruits.unshift('blueberry');
// // // // 5. Remove the last element of the fruits array.
fruits.pop();
console.log(fruits);
;
// 6. console.log the length of the fruits array.
console.log(fruits.length);
// // // 7. Remove the first element of the fruits array.
fruits.shift();
console.log(fruits);

// 8. Join all the elements in the fruits array with a '$'.
let fruits1 = fruits.join('$');
console.log(fruits1);

// 9. Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"
let firstArr = [1, 2, 3, 4, 5, 6];
let secondArr = [2, 4, 6, 8, 10];
if (firstArr.length < secondArr.length) {
  console.log(secondArr);
} else if (firstArr.length > secondArr.length) {
  console.log(firstArr);
} else if (firstArr.length = secondArr.length) {
  console.log('They are the same size.');
}
//

// 10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.
//
console.log('----------------------');
let arr1 = [1, 5, 3];
let hasExactMiddleArr = arr1[Math.floor((arr1.length - 1) / 2)];
console.log(hasExactMiddleArr);
//
let arr2 = [1, 4, 6, 9];
let x = arr2[Math.floor((arr2.length) / 2)];
let y = arr2[Math.floor((arr2.length) / 2) - 1];
console.log(y, x);
//
//
// 11. Write code that logs every value in an array using a for loop
// //
let logMeOutFor = ['I', 'am', 'a', 'happy', 'array'];
for (v = 0; v <= logMeOutFor.length; v++) {
  console.log(logMeOutFor[v]);
}
//
//
// 12. Write code that logs every value in an array using a while loop
// // // //
// // // // ```js
let logMeOutWhile = ['I', 'am', 'a', 'happy', 'array'];
let i = 0;
while (i <= logMeOutWhile.length) {
  console.log(logMeOutWhile[i]);
  i += 1;
}
//
// 13. Write code that logs every value in an array using a for/of loop
let logMeOutForOf = ['I', 'am', 'a', 'happy', 'array'];
let x = logMeOutForOf.length - 1;

for (x of logMeOutForOf) {
  console.log(x);
}
//
// Ask about for/Of loop. I got the code to work, but I'm not entirely sure what it is doing/means
//
// 14. Given an array of numbers, write code that logs the sum of all the numbers
let firstArrToSum = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (i = 0; i < firstArrToSum.length; i++) {
  sum = sum + firstArrToSum[i];
  // console.log(sum) //if console.log inside shows every index adding.
}

console.log(sum);

let sum1 = 0;
let secondArrToSum = [1, 2, 3, 4, 5, -6];
let sum = 0;
for (i = 0; i < secondArrToSum.length; i++) {
  sum = sum + secondArrtToSum[i];
}

console.log(sum1);

// 15. Given an array of numbers, write code that logs all the odd numbers
let evenAndOddArr = [1, 2, 3, 4, 5]
for (i = 0; i < say2.length; i++)
{
  if(evenAndOddArr[i] % 2===0){
    console.log()
  } else if(evenAndOddArr[i] % 2 === 1){
    console.log(evenAndOddArr[i])
  }
}
console.log(evenAndOddArr.length)


 let evenAndOddArr2 = [1,5,2,4,11,12,99,100]
if(evenAndOddArr2[i] % 2===0){
  console.log(evenAndOddArr[i])
} else if([i] % 2 === 1){
  console.log()
}
}
console.log(evenAndOddArr2.length)
//
//
 // 16. Given an array of numbers, write code that logs the sum of all the even numbers
let evenAndOddArr2 = [1,5,2,4,11,12,99,100]
let evensum= 0
for(i=0; evenAndOddArr2.length;i++)
if(evenAndOddArr2[i] % 2===0){
  evensum= evensum + evenAndOddArr2[i]
 //console.log(evensum)
}
console.log(evensum)

//
// // // let evenAndOddArrToSum = [1,5,2,3,11,4,6]
// // //
// // // // 12
// // // ```
// // //
// *********17. Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.
//
// // ```js
// let dupeFriendlyList = [4, 2, 6, 2, 2, 6, 4, 9, 2, 1];
// let noDupeList = [];
// //
let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
let noDupeList = []

for (let i = 0; i < dupeFriendlyList.length; i++) {
  if (noDupeList.indexOf(dupeFriendlyList[i]) === -1) {
    noDupeList.push(dupeFriendlyList[i]);
    console.log(noDupeList);
  }
}

console.log(noDupeList);

// 18. Make an array that contains all elements that appear exactly once in someRepeatsAgain
//
// let someRepeatsAgain = [25,11,30,31,50,28,4,37,13,20,24,38,28,14,44,33,7,43,39,35,36,42,1,40,7,14,23,46,21,39,11,42,12,38,41,48,20,23,29,24,50,41,38,23,11,30,50,13,13,16,10,8,3,43,10,20,28,39,24,36,21,13,40,25,37,39,31,4,46,20,38,2,7,11,11,41,45,9,49,31,38,23,41,16,49,29,14,6,6,11,5,39,13,17,43,1,1,15,25]

let input = [4, 2, 6, 2, 2, 6, 4, 9, 2, 1];
let output = [];

for (let i = 0; i < input.length; i++) {
  if (output.indexOf(input[i]) === -1) {
    output.push(input[i]);
  }

  console.log(output);
}

console.log(output);

// 19. Given an array of strings, find the the string with the most "a"s in it.
// // //
// ```js
// // // let mostAStrings = ["apes", "abba", "apple"]


// // // //"abba"
// let mostAstrings = ['apes', 'abba', ' apple'];

// console.log(mostAstrings);
// // // 20. Find the second smallest number in an Array of Ints
// // //
// // // ```js
// let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]
// let small = [1, 5, 6, 87, 3];
