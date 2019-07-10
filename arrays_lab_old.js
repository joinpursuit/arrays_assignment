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

console.log
  (`
  1.=================================================================
  `);

let myArray = [`Michael`, `David`, `Amparo`];
console.log(myArray[myArray.length - 1]);

// 2. Change the first element of an array to "something else".

console.log
  (`
  2.=================================================================
  `);

myArray[0] = `something else`;
console.log(myArray);

// 3. Add "mango" to the end fruits array ["strawberry", "bannana"].

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

// 9. Write a `longestArr` code block that takes in two array variables.
// The code block should compare the length of the two arrays and log whichever array is longer
// (aka whichever array has more values in it).
// If the lengths of the two arrays are equal, then log null.
// ```js
// longestArr([1, 2, 3], [1, 2, 3, 4, 5]);
// // returns [1, 2, 3, 4, 5]
//
// longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]);
// // returns ["jets", "mets", "giants", "yankees"]
//
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

// 10. Write a `middleElement` code block that takes an array varialbe and logs the middle element
// of that array. If the array has an even number of elements, the function should log "Oops,
// there's no middle..."
//
// ```js
// middleElement(['dog', 'cat', 'bat', 'octopus', 'chinchilla']);
//  // 'bat'
//
// middleElement([1, 2, 3, 4, 5]);
// //  3
//
// middleElement([1, "hmm", "wat", 4, 5]);
// //  "wat"
//
// middleElement([1, 2, 3, 4, 5, 6]);
// //  "Oops, there's no middle"
//
// middleElement(["john", "paul", "george", "ringo"]);
// //  "Oops, there's no middle"
// ```

console.log
  (`
  10.=================================================================
  `);

function middleElement(ar) {
  ar.length % 2 ?
    console.log(ar[Math.floor(ar.length / 2)]) : console.log(`Oops, there's no middle...`);
}

middleElement([`dog`, `cat`, `bat`, `octopus`, `chinchilla`]);
middleElement([1, 2, 3, 4, 5]);
middleElement([1, `hmm`, `wat`, 4, 5]);
middleElement([1, 2, 3, 4, 5, 6]);
middleElement([`john`, `paul`, `george`, `ringo`]);
middleElement(`Michael`);

// 11. Write a `sumArray` code block that takes as varaible array of numbers and logs the sum
// of all these numbers.
// ```js
// sumArray([1, 2, 3, 4, 5, 6])
// //  21
//
// sumArray([1, 2, 3, 4, 5, -6])
// //  9
// ```

console.log
  (`
  11.=================================================================
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

// 12. Write a `range` code block that takes two number variables: min and max.
// The block will log an array with all the numbers, inclusive, between min and max.
// ```js
// range(2, 6)
// // => [2, 3, 4, 5, 6]
// ```

console.log
  (`
  12.=================================================================
  `);

function range(i, j) {
  let ar = [i];
  if (i <= j && !(i % 1) && !(j % 1)) {
    while (i < j) {
      i++;
      ar.push(i);
    }

    console.log(ar);
  } else console.log(`Error: inputs must be integers, first input being smaller than the second.`);
  return ar;
}

range(0, 10);
range(0, 0);
range(-1, 10);
range(10, 9);

// 13. Write a `rangeWithStep` code block that takes three number variables: min, max and step.
// The block will log an array with all the numbers, inclusive, between min and max, , going up
// in increments equal to step.
// If no step value is provided, the increment will be 1.
// ```js
// rangeWithStep(4, 10, 2)
// // => [4, 6, 8, 10]
// rangeWithStep(4, 10)
// // => [4, 5, 6, 7, 8, 9, 10]
// ```

console.log
  (`
  13.=================================================================
  `);

function rangeWithStep(i, j, k = 1) {
  let ar = [i];
  if (i <= j && !(i % 1) && !(j % 1) && k < j - i) {
    while (i < j) {
      i += k;
      ar.push(i);
    }

    ar.pop();
    ar.push(j);
    console.log(ar);
  } else {
    console.log
    (`Error: inputs must be numbers, first input being smaller than the second.
      third input must less than the difference between inputs 1 and 2.`);
  }

  return ar;
}

rangeWithStep(0, 10);
rangeWithStep(0, 0);
rangeWithStep(-1, 10);
rangeWithStep(10, 9);
rangeWithStep(0, 10, 2);
rangeWithStep(0, 3, 0.5);
rangeWithStep(-1, 10, 3);
rangeWithStep(10, 9, -1);

// 14. Write a `doubleTrouble` code block that takes in a varialbe array of numbers.
// The block should log a new array that doubles every number from the original array.
// ```js
// doubleTrouble([1, 2, 3]);
// // returns [2, 4, 6]
// doubleTrouble([10, 8, 5]);
// // returns [20, 16, 10]
// ```

console.log
  (`
  14.=================================================================
  `);

function arrayMultipler(ar, i = 2) {
  for (let j of ar) {
    if (typeof j !== `number`) {
      console.log(`The typeof value for ${j} at index ${ar.indexOf(j)} is ${typeof j}`);
      ar = 0;
      break;
    }
  }

  if (typeof ar === `object` &&  typeof i === `number`) {
    let arX = [];
    for (let k of ar) {
      arX.push(k * i);
    }

    console.log(arX);
    return arX;
  } else {
    console.log(`Please enter an array with only numbers for the 1st input.`);
    console.log(`Please enter a number for 2nd input.`);
  }
}

arrayMultipler([1, 2, 3, 4, 5, 6, 7, 8, 9]);
arrayMultipler([1, 2, `3`, 4, 5, 6, 7, 8, 9]);
arrayMultipler([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
arrayMultipler([1, 2, 3, 4, 5, 6, 7, 8, 9], 0);
arrayMultipler([1, 2, 3, 4, 5, 6, 7, 8, 9], 0.1);
arrayMultipler([1, 2, 3, 4, 5, 6, 7, 8, 9], -1);

// 15. Write a code block that takes in two varaibles. A target, and an array.
// Console log the indicies (as an array) of the elements that add up to the target.
// Exactly two indicies must be logged.

console.log
  (`
  15.=================================================================
  `);
