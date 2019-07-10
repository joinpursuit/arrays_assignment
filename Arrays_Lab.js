
// 1. Log the last element of an array.
let array = [1, 2, 3, 4, 5];

console.log(`1. The last element of ${array} is : ${array[array.length - 1]}`);
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");


// 2. Change the first element of an array to "something else".
array[0] = "something else";

console.log("2. The new array becomes : ", array);
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");


// 3. Add "mango" to the end fruits array ["strawberry", "bannana"].
let fruits = ["strawberry", "bannana"];

fruits.push("mango");

console.log("3. Fruits array after adding 'mango' to the end : ", fruits);
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
//
//
// 4. Add "blueberry" to the front of the same fruits array.
fruits.unshift("blueberry");

console.log("4. Fuits array after adding 'blueberry' to the front : ", fruits);
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
//
//
// 5. Remove the last element of the fruits array.
fruits.pop();

console.log("5. Fruits array after removing the last element : ", fruits);
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
//
//
// 6. console.log the length of the fruits array.
console.log(`6. My list of fruits has ${fruits.length} elements`)
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
//
//
// 7. Remove the first element of the fruits array.
fruits.shift();
console.log("7. Fruits array after removing the first element : ", fruits);
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
//
//
// 8. Join all the elements in the fruits array with a '$'.
console.log(`8. Joining the elements with $ : ${fruits.join('$')}`);
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
//
//
// 9. Write a longestArr code block that takes in two array variables.
// The code block should compare the length of the two arrays and log whichever
// array is longer (aka whichever array has more values in it).
// If the lengths of the two arrays are equal, then log null.
// longestArr([1, 2, 3], [1, 2, 3, 4, 5]);
// // returns [1, 2, 3, 4, 5]
// longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]);
// // returns ["jets", "mets", "giants", "yankees"]
let arr1 = ["jets", "mets", "giants", "yankees"];
let arr2 = ["cubs", "white sox", "bulls"];
let longestArr;

if (arr1.length > arr2.length) {
    longestArr = arr1;
    console.log(`9. The longest of the two arrays is ${longestArr} with ${longestArr.length} elements`);
} else if (arr1.length < arr2.length) {
          longestArr = arr2;
          console.log(`9. The longest of the two arrays is ${longestArr} with ${longestArr.length} elements`);
} else {
      console.log(`9. The two arrays have the same size`);
}
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
//
//
// 10. Given an array, log its middle element.
//If the middle of the array is between two elements, log both of them.;

let list = ['dog', 'cat', 'bat', 'octopus', 'chinchilla', 'clown fish'];
let middleElement;

if (list.length % 2 === 1) {
    middleElement = list[Math.floor(list.length / 2)];
    console.log("10. The middle element of the array ", list, " is ", middleElement);
} else {
    middleElement = [list[(list.length / 2) - 1], list[list.length / 2]]
    console.log("10. The array ", list, " has tow middles ", middleElement);
}
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
//
//
// 11. Write code that logs every value in an array using a for loop

let logMeOutFor = ["I", "am", "a", "happy", "array"];
console.log("11. Loging every value of the array ", logMeOutFor, " using a for loop");

for (let i = 0; i < logMeOutFor.length; i++){
  console.log(logMeOutFor[i]);
}
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");


// 12. Write code that logs every value in an array using a while loop

let logMeOutWhile = ["I", "am", "a", "happy", "array"];
console.log("12. Loging every value of the array ", logMeOutWhile, " using a while loop");

let indexWhile = 0

while (indexWhile < logMeOutWhile.length){
    console.log(logMeOutWhile[indexWhile]);
    indexWhile ++;
}
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");


// 13. Write code that logs every value in an array using a for/of loop

let logMeOutForOf = ["I", "am", "a", "happy", "array"];
console.log("13. Loging every value of the array ", logMeOutForOf, " using a for/of loop");

for (let elementForOf of logMeOutForOf) {
    console.log(elementForOf);
}
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");


// 14. Write a sumArray code block that takes as varaible array of numbers and
// logs the sum of all these numbers.
// sumArray([1, 2, 3, 4, 5, 6])
// //  21
// sumArray([1, 2, 3, 4, 5, -6])
// //  9
let numArray = [1, 2, 3, 4, 5, -6];
let sumArray = 0;

for (let i = 0; i < numArray.length; i++){
    if (typeof(numArray[i]) === typeof 1){
        sumArray += numArray[i];
    }
}
console.log("14. The sum of all the elements of the array ", numArray, " is : ", sumArray);
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
//
//
// 15. Given an array of numbers, write code that logs all the odd numbers
let evenAndOddArr = [1,5,2,4,11,12,99,100];
let oddArray = [];

for (let i = 0; i < evenAndOddArr.length; i++){
    if (evenAndOddArr[i] % 2 === 1){
        oddArray.push(evenAndOddArr[i]);
    }
}
console.log("15. Odd numbers of the array ", evenAndOddArr, " are : ", oddArray);
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");


// 16. Given an array of numbers, write code that logs the sum of all the even numbers
let evenAndOddArrToSum = [1,5,2,3,11,4,6]
let sumEvenArray = 0;

for (let i = 0; i < evenAndOddArrToSum.length; i++){
    if (evenAndOddArrToSum[i] % 2 === 0){
        sumEvenArray += evenAndOddArrToSum[i];
    }
}
console.log("16. The sum of all even numbers of the array ", evenAndOddArrToSum,
            " is ", sumEvenArray);
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");


// 17. Write code such that noDupeList has all the same numbers as
//dupeFriendlyList, but has no more than one of each number.

let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1];
let noDupeList = [];

for (let element of dupeFriendlyList){
  if (!noDupeList.includes(element)){
    noDupeList.push(element);
  }
}
console.log("17. The array ", dupeFriendlyList, "without repetition is : ", noDupeList);
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");



// 18. Make an array that contains all elements that appear exactly once in someRepeatsAgain
let someRepeatsAgain = [25,11,30,31,50,28,4,37,13,20,24,38,28,14,44,33,7,43,39,
  35,36,42,1,40,7,14,23,46,21,39,11,42,12,38,41,48,20,23,29,24,50,41,38,23,11,
  30,50,13,13,16,10,8,3,43,10,20,28,39,24,36,21,13,40,25,37,39,31,4,46,20,38,2,
  7,11,11,41,45,9,49,31,38,23,41,16,49,29,14,6,6,11,5,39,13,17,43,1,1,15,25];
let noRepeatArray = [];

  // for (let i = 0; i < someRepeatsAgain.length; i++) {
  //   let adding = true;
  //   for (let j = 0; j < someRepeatsAgain.length; j ++){
  //       if (i !== j && someRepeatsAgain[i] === someRepeatsAgain[j]){
  //           adding = false;
  //       }
  //   }
  //   if (adding){
  //     noRepeatArray.push(someRepeatsAgain[i]);
  //   }
  // }
  for (let i = 0; i < someRepeatsAgain.length; i++){
    if (someRepeatsAgain.indexOf(someRepeatsAgain[i])
          === someRepeatsAgain.lastIndexOf(someRepeatsAgain[i])){
            noRepeatArray.push(someRepeatsAgain[i]);
          }
  }
console.log("18. The numbers that appearse only once are : ", noRepeatArray);
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");


// 19. Given an array of strings, find the the string with the most "a"s in it.
let mostAStrings = ["apes", "abba", "apple", "aaaaaahhh", "all"];
//"abba"
let numOfA = [];

for (let i = 0; i < mostAStrings.length; i++){
  numOfA[i] = 0;
}

for (let i = 0; i < mostAStrings.length; i++){
  for (let j = 0; j < mostAStrings[i].length; j++){
      if (mostAStrings[i][j] === "a"){
        numOfA[i]++;
      }
  }
}
console.log(numOfA); //[1, 2, 3]

let greatNumOfA = -1;

for (let i = 0; i < numOfA.length; i++){
  if (numOfA[i] > greatNumOfA){
      greatNumOfA = numOfA[i];
  }
}
let indexOfGreatNumOfA = numOfA.indexOf(greatNumOfA)
console.log("19. The string with the most A on it is ",
              mostAStrings[indexOfGreatNumOfA], " with ", greatNumOfA, " a");
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");



// 20. Find the second smallest number in an Array of Ints
let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92,
                         89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]

let smallest = secondSmallestArr[0];
let secondeSmall = secondSmallestArr[0];

for (let num of secondSmallestArr){
  if (num < smallest){
    smallest = num;
  }
}

for (let num of secondSmallestArr){
  if (num > smallest && num < secondeSmall){
    secondeSmall = num;
  }
}
console.log(`20. The smallest = ${smallest} \n the seonde smallest = ${secondeSmall}`);
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
//
//
//
//     EXTRA QUESTIONS FROM THE PREVIOUS VERSION
console.log("Extra Bonus Questions from the previous Version");
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");

// 21. Write a range code block that takes two number variables: min and max.
// The block will log an array with all the numbers, inclusive, between min and max.
// range(2, 6)
// // => [2, 3, 4, 5, 6]
let min = 2;
let max = 7;
let rangeArray = [];

for (let i = min; i <= max; i++){
    rangeArray.push(i);
}
console.log(`21. Array from ${min} to ${max} : \n`, rangeArray);
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
//
//
// 22. Write a rangeWithStep code block that takes three number variables: min,
// max and step. The block will log an array with all the numbers, inclusive,
// between min and max, , going up in increments equal to step. If no step value
// is provided, the increment will be 1.
// rangeWithStep(4, 10, 2)
// // => [4, 6, 8, 10]
// rangeWithStep(4, 10)
// // => [4, 5, 6, 7, 8, 9, 10]
function rangeWithStep(start, stop, step){
  let array = [];
  if (step === undefined){
    step = 1;
  }
  for (let i = start; i <= stop; i += step){
    array.push(i);
  }
  return array;
}
console.log("22. Array rangeWithStep(4,10,2) :\n", rangeWithStep(4,10,2));
console.log("\n22. Array rangeWithStep(4,10) :\n", rangeWithStep(4,10));
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
//
//
// 23. Write a doubleTrouble code block that takes in a varialbe array of numbers.
// The block should log a new array that doubles every number from the original array.
// doubleTrouble([1, 2, 3]);
// // returns [2, 4, 6]
// doubleTrouble([10, 8, 5]);
// // returns [20, 16, 10]
numArray = [1, 2, 3];
let doubleTrouble = [];

for (let i = 0; i < numArray.length; i++) {
    if (typeof (numArray[i]) === typeof 1) {
        doubleTrouble[i] = numArray[i] * 2;
    }
}
console.log("23. The array ", numArray, " doubled is ", doubleTrouble)
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
//
//
// 24. Write a code block that takes in two varaibles. A target, and an array.
// Console log the indicies (as an array) of the elements that add up to the target.
// Exactly two indicies must be logged.
//console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
