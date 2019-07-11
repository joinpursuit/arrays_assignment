let cereals = ["Captain Crunch", "Frosted Flakes", "Cheerios", "Mini Wheats"];

// 1. Log the last element of an array.
console.log("1._________________")

console.log(cereals[cereals.length - 1])

//2. Change the first element of an array to the string "something else".

console.log("2._________________");

 let coffees = ["Latte", "Espresso", "Iced"];

 coffees[0] = "something else";

 console.log(coffees[0]);

//3. Add "mango" to the end of a fruits array ["strawberry", "banana"].

console.log("3._________________");

let fruits = ["strawberry", "banana"];

fruits.push("mango");

console.log(fruits);

// 4. Add "blueberry" to the front of the same fruits array.

console.log("4._________________");

fruits.unshift("blueberry");

console.log(fruits);

//5. Remove the last element of the fruits array.

console.log("5._________________");

fruits.pop();

console.log(fruits);

//6. console.log the length of the fruits array.

console.log("6._________________");

console.log(fruits.length);

//7. Remove the first element of the fruits array.

console.log("7._________________");

fruits.shift();

console.log(fruits);

//8. Join all the elements in the fruits array with a '$'.

console.log("8._________________");

console.log(fruits.join("$"));

// 9. Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"
//
// ```js
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]
//
// // log [1,5,2,4]
// ```

console.log("9._________________");

let firstArr = [1,2,3];
let secondArr = [1,5,2,4];

if (firstArr > secondArr) {
  console.log(firstArr);
} else if (secondArr > firstArr) {
  console.log(secondArr);
} else {
  console.log("They are the same size.")
}

// 10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.
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

console.log("10._________________");

let middleArr = [12, 24, 36, 48, 60, 72];

if ((middleArr.length % 2) === 0) {
  console.log(middleArr.slice(((middleArr.length / 2) - 1), ((middleArr.length / 2) + 1)));
} else {
  console.log(middleArr[(middleArr.length / 2) - .5])
}

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
console.log("11._________________");

let logWords = ["This", "is", "a", "nice", "array"];



for (let i = 0; i <= (logWords.length - 1); i++) {
  console.log(logWords[i]);
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
console.log("12._________________");

let logWords2 = ["This", "is", "an", "even", "nicer", "array"];
let x = 0;

while (x <= (logWords2.length - 1)) {
  console.log(logWords2[x]);
  x++;
}

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

console.log("13._________________");


let logWords3 = ["So", "many", "arrays", "so", "little", "time"];

for (let word of logWords3) {
  console.log(word);
}

// 14. Given an array of numbers, write code that logs the sum of all the numbers
//
// ```js
// let firstArrToSum = [1, 2, 3, 4, 5, 6]
// //  21
//
// let secondArrToSum = [1, 2, 3, 4, 5, -6]
// //  9
// ```

console.log("14._________________");

let numbers = [5, 4, 9, 7];
let sum = 0;

for (let a = 0; a <= (numbers.length - 1); a++) {
    sum += numbers[a];
}
console.log(sum);

// 15. Given an array of numbers, write code that logs all the odd numbers
//
// ```js
//
// let evenAndOddArr = [1,5,2,4,11,12,99,100]

// 1, 5, 11, 99

console.log("15._________________");

let evenAndOddArr = [1, 0, 23, 15, 77, 18];

for (let index of evenAndOddArr) {
  if ((index % 2) !== 0) {
    console.log(index);
  }
}

// 16. Given an array of numbers, write code that logs the sum of all the even numbers
//
// ```js
//
// let evenAndOddArrToSum = [1,5,2,3,11,4,6]
//
// // 12
// ```

 console.log("16._________________");

let evenAndOddArrToSum = [12, 13, 53, 22, 2];
let sum1 = 0;

for (let s of evenAndOddArrToSum) {
  if ((s % 2) === 0){
  sum1 += s;
}
}
console.log(sum1);


// 17. Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.
//
// ```js
// let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// let noDupeList = []
//
// // noDupleList = [4, 2, 6, 9, 1]
//
// ```


console.log("17._________________");


let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1];
let noDupeList = [];

for ( let v of dupeFriendlyList) {
  if (noDupeList.indexOf(v) === -1) {
    noDupeList.push(v);
  }
}
console.log(noDupeList);

// 18. Make an array that contains all elements that appear exactly once in someRepeatsAgain
//
// ```js
// let someRepeatsAgain = [25,11,30,31,50,28,4,37,13,20,24,38,28,14,44,33,7,43,39,35,36,42,1,40,7,14,23,46,21,39,11,42,12,38,41,48,20,23,29,24,50,41,38,23,11,30,50,13,13,16,10,8,3,43,10,20,28,39,24,36,21,13,40,25,37,39,31,4,46,20,38,2,7,11,11,41,45,9,49,31,38,23,41,16,49,29,14,6,6,11,5,39,13,17,43,1,1,15,25]
//
// // [ 44,33,35,42,12,48,30,50,8,3,10,28,24,36,21,1000,40,37,4,46,20,2,7,45,9,31,38,23,41,16,49,29,14,6,11,5,39,13,17,43,1,15,25 ]
//
//
// ```

console.log("18._________________");

let someRepeatsAgain = [25,11,30,31,50,28,4,37,13,20,24,38,28,14,44,33,7,43,39,35,36,42,1,40,7,14,23,46,21,39,11,42,12,38,41,48,20,23,29,24,50,41,38,23,11,30,50,13,13,16,10,8,3,43,10,20,28,39,24,36,21,13,40,25,37,39,31,4,46,20,38,2,7,11,11,41,45,9,49,31,38,23,41,16,49,29,14,6,6,11,5,39,13,17,43,1,1,15,25];
let singleAppear = [];


for ( let w = 0; w < someRepeatsAgain.length; w++) {
  let once = true;
  for (let c = 0; c < someRepeatsAgain.length; c++) {
    if (w !== c) {
      if (someRepeatsAgain[w] === someRepeatsAgain[c]){
          once = false;
        }
      }
    } if (once){
      singleAppear.push(someRepeatsAgain[w]);
    }
}
console.log(singleAppear);

// 19. Given an array of strings, find the the string with the most "a"s in it.
//
// ```js
// let mostAStrings = ["apes", "abba", "apple"]
//
// //"abba"
// ```

console.log("19._________________");

let mostAStrings = ["apes", "abba", "apple"];

let theMost = mostAStrings[0];

let theMostAs = 0;


for (let y = 1; y < mostAStrings.length; y++) {
  let numOfAs = 0;
  for (let b of mostAStrings[y]) {
    if (b === "a") {
      numOfAs += 1;
    }
  }
  if (numOfAs > theMostAs) {
    theMost = mostAStrings[y];
    theMostAs = numOfAs;
  }
}

 console.log(theMost);


// 20. Find the second smallest number in an Array of Ints
//
// ```js
// let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]
//
// // 4
// ```
console.log("20._________________");

let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]
let currentSmallest = secondSmallestArr[0];
let smallest = 0;

for (let g = 1; g < secondSmallestArr.length; g++) {
   let nxt = secondSmallestArr[g + 1];
  if ( secondSmallestArr[g] <= currentSmallest && secondSmallestArr[g] <= nxt) {
    currentSmallest = secondSmallestArr[g];

  }
    console.log(currentSmallest);
  //   for (let j = 0; j < secondSmallestArr.length; j++){
  // if (secondSmallestArr[j] <= currentSmallest){
  //   smallest = secondSmallestArr[j];
  //   }
  // }
}
console.log(smallest);
