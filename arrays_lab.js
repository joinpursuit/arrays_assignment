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

console.log(`1.
  `);

let myArray = [`Michael`, `David`, `Amparo`];
console.log(myArray[myArray.length - 1]);

// 2. Change the first element of an array to the string "something else".

console.log
  (`
  2.=================================================================
  `);

myArray[0] = `something else`;
console.log(myArray);

// 3. Add "mango" to the end of a fruits array ["strawberry", "banana"].

console.log
  (`
  3.=================================================================
  `);

let fruitsArray = [`strawberry`, `bannana`];
fruitsArray.push(`mango`);
console.log(fruitsArray);

// 4. Add "blueberry" to the front of the same fruits array.

console.log
  (`
  4.=================================================================
  `);

fruitsArray.unshift(`blueberry`);
console.log(fruitsArray);

// 5. Remove the last element of the fruits array.

console.log
  (`
  5.=================================================================
  `);

fruitsArray.pop();
console.log(fruitsArray);

// 6. console.log the length of the fruits array.

console.log
  (`
  6.=================================================================
  `);

console.log(fruitsArray.length);

// 7. Remove the first element of the fruits array.

console.log
  (`
  7.=================================================================
  `);

fruitsArray.shift();
console.log(fruitsArray);

// 8. Join all the elements in the fruits array with a '$'.

console.log
  (`
  8.=================================================================
  `);

fruits = fruitsArray.join(`$`);
console.log(fruits);

// 9. Given two arrays, write code that logs the larger array.
//  If the arrays are the same length, log "They are the same size"
//
// ```js
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]
//
// // log [1,5,2,4]
// ```

console.log
  (`
  9.=================================================================
  `);

function longestArr(ar1, ar2) {
  if (typeof ar1 === `object` && typeof ar2 === `object`) {
    if (ar1.length === ar2.length) {
      console.log(`Both arrays are the same size`);
      console.log(ar1);
      console.log(ar2);
    } else if (ar1.length > ar2.length) {
      console.log(ar1);
    } else {
      console.log(ar2);
    }
  } else console.log(`error: inputs must be an array.`);
}

longestArr([1, 2, 3], [1, 2, 3, 4, 5]);
longestArr([`jets`, `mets`, `giants`, `yankees`], [`cubs`, `white sox`, `bulls`]);
longestArr([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]);
longestArr(fruitsArray, myArray);
longestArr([], [1]);
longestArr(`test string`, 1);
longestArr(`test string`, [1]);

// 10. Given an array, log its middle element.
//  If the middle of the array is between two elements, log both of them.
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

console.log
  (`
  10.=================================================================
  `);

function middleElement(ar) {
  ar.length % 2 ?
    console.log(ar[Math.floor(ar.length / 2)]) :
    console.log(ar[ar.length / 2 - 1], ar[ar.length / 2]);
}

middleElement([`dog`, `cat`, `bat`, `octopus`, `chinchilla`]);
middleElement([1, 2, 3, 4, 5]);
middleElement([1, `hmm`, `wat`, 4, 5]);
middleElement([1, 2, 3, 4, 5, 6]);
middleElement([`john`, `paul`, `george`, `ringo`]);
middleElement(`Michael`);

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

console.log
  (`
  11.=================================================================
  `);

function logMeOutFor(ar) {
  for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
  }
}

logMeOutFor([`I`, `am`, `a`, `happy`, `array`]);

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

console.log
  (`
  12.=================================================================
  `);

function logMeOutWhile(ar) {
  let i = 0;
  while (i < ar.length) {
    console.log(ar[i]);
    i++;
  }
}

logMeOutWhile([`I`, `am`, `a`, `happy`, `array`]);

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

console.log
  (`
  13.=================================================================
  `);

function logMeOutForOf(ar) {
  for (let i of ar) {
    console.log(i);
  }
}

logMeOutForOf([`I`, `am`, `a`, `happy`, `array`]);

// 14. Given an array of numbers, write code that logs the sum of all the numbers
//
// ```js
// let firstArrToSum = [1, 2, 3, 4, 5, 6]
// //  21
//
// let secondArrToSum = [1, 2, 3, 4, 5, -6]
// //  9
// ```

console.log
  (`
  14.=================================================================
  `);

function sumArray(ar) {
  let sum = 0;
  if (typeof ar === `object`) {
    for (i = 0; i < ar.length; i++) {
      sum += ar[i];
    }

    console.log(sum);
    return sum;
  } else console.log(`Oops this is not an array.`);
}

sumArray([1, 2, 3, 4]);
sumArray([1, 2, 3, -4]);
sumArray([1, 2, 3, -6]);
sumArray([1, 2, 3, 4, `0`]);
sumArray(`michael`);

// 15. Given an array of numbers, write code that logs all the odd numbers
//
// ```js
//
// let evenAndOddArr = [1,5,2,4,11,12,99,100]
//
// // 1, 5, 11, 99
// ```

console.log
  (`
  15.=================================================================
  `);

function logAllOdd(ar) {
  let oddAr = ``;
  for (let i of ar) i % 2 ? oddAr += `${i}, ` : null;
  oddAr ? console.log(oddAr) : console.log(`There are no odd numbers.`);
}

logAllOdd([1, 5, 2, 4, 11, 12, 99, 100]);

// 16. Given an array of numbers, write code that logs the sum of all the even numbers
//
// ```js
//
// let evenAndOddArrToSum = [1,5,2,3,11,4,6]
//
// // 12
// ```

console.log
  (`
  16.=================================================================
  `);

function logSumOfAllEven(ar) {
  let evenSum = 0;
  for (let i of ar) !(i % 2) ? evenSum += i : null;
  evenSum ? console.log(evenSum) : console.log(`No even numbers. Therefore sum is ${evenSum}.`);
}

logSumOfAllEven([1, 5, 2, 4, 11, 12, 99, 100]);
logSumOfAllEven([1, 5, 21, 3, 11, 1, 99, 1001]);
logSumOfAllEven([1, 5, 2, 3, 11, 4, 6]);

// 17. Write code such that noDupeList has all the same numbers as dupeFriendlyList,
// but has no more than one of each number.
//
// ```js
// let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// let noDupeList = []
//
// // noDupleList = [4, 2, 6, 9, 1]
//
// ```

console.log
  (`
  17.=================================================================
  `);

function noDupeList(ar) {
  let noDuplicates = [];
  for (let i of ar) !(noDuplicates.includes(i)) ? noDuplicates.push(i) : null;
  return noDuplicates;
}

console.log(noDupeList([4, 2, 6, 2, 2, 6, 4, 9, 2, 1]));

// 18. Make an array that contains all elements that appear exactly once in someRepeatsAgain
//
// ```js
// let someRepeatsAgain = [,38,,14,44,33,7,43,39,35,36,42,1,40,7,
//                         14,23,46,21,39,,42,12,38,41,48,23,29,,41,38,23,,,,
//                         16,10,8,3,43,10,,39,36,21,39,46,38,2,7,,
//                         ,41,45,9,49,,38,23,41,16,49,29,14,6,6,,5,39,17,43,1,1,15,]
//
// // [ 44,33,35,42,12,48,30,50,8,3,10,28,36,21,1000,40,37,4,46,2,7,45,9,31,38,23,41,16,49,
//     29,14,6,11,5,39,17,43,1,15,25 ]
//
//
// ```

console.log
  (`
  18.=================================================================
  `);

function noneRepeats(ar) {
  let noDuplicates = [];
  for (let i of ar) !ar.includes(i, ar.indexOf(i) + 1) ? noDuplicates.push(i) : null;
  return noDuplicates;
}

console.log(noneRepeats([25, 11, 30, 31, 50, 28, 4, 37, 13, 20, 24, 38, 28, 14, 44, 33, 7, 43, 39,
  35, 36, 42, 1, 40, 7, 14, 23, 46, 21, 39, 11, 42, 12, 38, 41, 48, 20, 23, 29, 24, 50, 41, 38, 23,
  11, 30, 50, 13, 13, 16, 10, 8, 3, 43, 10, 20, 28, 39, 24, 36, 21, 13, 40, 25, 37, 39, 31, 4, 46,
  20, 38, 2, 7, 11, 11, 41, 45, 9, 49, 31, 38, 23, 41, 16, 49, 29, 14, 6, 6, 11, 5, 39, 13, 17, 43,
  1, 1, 15, 25]));

// 19. Given an array of strings, find the the string with the most "a"s in it.
//
// ```js
// let mostAStrings = ["apes", "abba", "apple"]
//
// //"abba"
// ```

console.log
  (`
  19.=================================================================
  `);

function findMostOf(ar, x) {
  let numbOfAs = [];
  for (let i of ar) {
    for (let j of i) j !== x ? i = i.replace(j, ``) : null;
    numbOfAs.push(i.length);
  }

  let index;
  let k = 0;
  for (let l of numbOfAs) {
    if (l > k) {
      index = numbOfAs.indexOf(l);
      k = l;
    }
  }

  console.log(ar[index]);
}

findMostOf([`apes`, `abba`, `apple`, `aaasa`, `qqwqqqwqaa`], `a`);

// 20. Find the second smallest number in an Array of Ints
//
// ```js
// let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23,
//                          57, 41, 80, 83, 41, 69]
//
// // 4
// ```

console.log
  (`
  20.=================================================================
  `);

function ithSmallestNumb(ar, i = 1) {
  for (let j of ar) {
    if (typeof j !== `number`) {
      console.log(`The typeof value for ${j} at index ${ar.indexOf(j)} is ${typeof j}`);
      ar = 0;
      break;
    }
  }

  if (typeof ar === `object` && i <= ar.length && i > 0 && !(i % 1)) {
    let ar1 = noDupeList(ar).sort(function (a, b) {return a - b;});

    return ar1[i - 1];
  } else {
    console.log(`Please enter an array with only numbers for the 1st input.`);
    console.log(`Please enter an interger such that 0 < i < ${ar.length} for 2nd input.`);
  }
}

let array1 = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69];

//console.log(noDupeList(array1));
//console.log(noDupeList(array1).sort());
console.log(ithSmallestNumb(array1, 2));
console.log(ithSmallestNumb([`1`, 2, 3, 4, 2, `0`, 2], 2));
