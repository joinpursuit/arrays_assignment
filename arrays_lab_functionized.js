// JOSEPH P. PASAOA
//



/* FUNCTION DECLARATIONS */
const spacer = () => {
  console.log("\n");
}


const arrLastEl = (arr) => arr[arr.length - 1]; // 1
const arrFirstElConvert = (arrIn, newFirst) => { // 2
  let newArray = arrIn;
  newArray[0] = newFirst;
  return newArray;
}
const addToEnd = (arrIn, newItem) => { // 3
  let newArray = arrIn;
  newArray.push(newItem);
  return newArray;
}
const addToFront = (arrIn, newItem) => { // 4
  let newArray = arrIn;
  newArray.unshift(newItem);
  return newArray;
}
const delLastEl = (arrIn) => { // 5
  let newArray = arrIn;
  newArray.pop();
  return newArray;
}
const arrLength = (arrIn) => arrIn.length; // 6
const delFirstEl = (arrIn) => { // 7
  let newArray = arrIn;
  newArray.shift();
  return newArray;
}
const charJoin = (arrIn, char) => { // 8
  let newArray = arrIn;
  let strung = newArray.join(char);
  return strung;
}
const arrSizeCompare = (arrIn1, arrIn2) => { // 9
  if (arrIn1.length > arrIn2.length) { // Array 1 is larger
    return `${arrIn1} is the larger of the two arrays`;
  } else if (arrIn1.length < arrIn2.length) { // Array 2 is larger
    return `${arrIn2} is the larger of the two arrays`;
  } else { // Both arrays are equal
    return "They are the same size";
  }
}
const whatsInTheMiddle = (arrIn) => { // 10
  let ruler = arrIn.length - 1;
  if (arrIn.length % 2 === 0) {
    return `${arrIn[Math.floor(ruler / 2)]}, ${arrIn[Math.ceil(ruler / 2)]}`;
  } else {
    return `${arrIn[ruler / 2]}`;
  }
}
const arrElementsLogByFor = (arrIn) => { // 11
  for (let i = 0; i < arrIn.length; i = i + 1) {
    console.log(arrIn[i]);
  }
  return true;
}
const arrElementsLogByWhile = (arrIn) => { // 12
  let while12 = 0;
  while (while12 < arrIn.length) {
    console.log(arrIn[while12]);
    while12 += 1;
  }
  return true;
}
const arrElementsLogByForOf = (arrIn) => { // 13
  for (let i of arrIn) {
    console.log(i);
  }
  return true;
}
const arrSum = (arrIn) => { // 14
  let sum14 = arrIn[0];
  for (let i = 1; i < arrIn.length; i++) {
    sum14 += arrIn[i];
  }
  return sum14;
}
const onlyTheOdds = (arrIn) => { // 15
  for (let i of arrIn) {
    if (Math.abs(i % 2) === 1) {
      console.log(i);
    }
  }
  return true;
}
const sumOfTheEvens = (arrIn) => { // 16
  let sum16 = 0;
  for (let i of arrIn) {
    if (i % 2 === 0) {
      sum16 += i;
    }
  }
  return sum16;
}

// 1
console.log("1. Log the last element of an array.");
let labber01 = [1,2,3];

let result1 = arrLastEl(labber01);
console.log(result1);
//
spacer();


// 2
console.log('2. Change the first element of an array to the string "something else".');
let labber02 = [4,5,6];

let result2 = arrFirstElConvert (labber02, "something else")
console.log(result2);
//
spacer();


// 3
console.log('3. Add "mango" to the end of a fruits array ["strawberry", "banana"].');
let fruits = ["strawberry", "banana"];

let result3 = addToEnd(fruits,"mango");
console.log(result3);
//
spacer();


// 4
console.log('4. Add "blueberry" to the front of the same fruits array. ');

let result4 = addToFront(result3,"blueberry");
console.log(result4);
//
spacer();


// 5
console.log("5. Remove the last element of the fruits array.");

let result5 = delLastEl(result4);
console.log(result5);
//
spacer();


// 6
console.log("6. console.log the length of the fruits array.");

let result6 = arrLength(result5);
console.log(result6);
//
spacer();


// 7
console.log("7. Remove the first element of the fruits array.");

let result7 = delFirstEl(result5);
console.log(result7);
//
spacer();


// 8
console.log("8. Join all the elements in the fruits array with a '$'.");

let result8 = charJoin(result7,'$');
console.log(result8);
//
spacer();


// 9
console.log('9. Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"');
let labber9a = [10, 20, 30, 40];
let labber9b = [15, 25, 35];
console.log(`A: ${labber9a}\nB: ${labber9b}`);

let result9 = arrSizeCompare(labber9a, labber9b);
console.log(result9);
//
spacer();


// 10
console.log("10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.");
let labber10 = [11, 12, 13, 14, 15, 16];
console.log(labber10);

let result10 = whatsInTheMiddle(labber10);
console.log(result10);
//
spacer();


// 11
console.log("11. Write code that logs every value in an array using a for loop");
let labber11 = [21, 22, 23];
console.log(labber11);

arrElementsLogByFor(labber11);
//
spacer();


// 12
console.log("12. Write code that logs every value in an array using a while loop");
console.log(labber11);

arrElementsLogByWhile(labber11);
//
spacer();


// 13
console.log("13. Write code that logs every value in an array using a for/of loop");
let labber13 = [26, 27, 28, 29];
console.log(labber13);

arrElementsLogByForOf(labber13);
//
spacer();


// 14
console.log("14. Given an array of numbers, write code that logs the sum of all the numbers");
let labber14 = [1, 20, 300];
console.log(labber14);

let result14 = arrSum(labber14);
console.log(result14);
//
spacer();


// 15
console.log("15. Given an array of numbers, write code that logs all the odd numbers");
let labber15 = [-1, -4, -7, 0, 90];
console.log(labber15);

onlyTheOdds(labber15);
//
spacer();


// 16
console.log("16. Given an array of numbers, write code that logs the sum of all the even numbers");
let labber16 = [-4, -1, 110, 201];
console.log(labber16);

let result16 = sumOfTheEvens(labber16);
console.log(result16);
//
spacer();



// BONUS QUESTIONS //


/* 17
console.log("17. Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.");
//
let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]; // [10, 12, 10, 13, 10, 12, 14]
//
console.log(dupeFriendlyList);
console.log("");
let noDupeList = [];
for (let i of dupeFriendlyList) { // LOOP LEVEL 1: Evals each element of dupeFriendlyList
  let addOrDont = true;
  for (let j = 0; j < noDupeList.length; j++) { // LOOP LEVEL 2: Evals against each existing element on noDupeList
    if (i === noDupeList[j]) {
      addOrDont = false;
    }
  }
  addOrDont
    ? noDupeList.push(i)
    : false;
}
console.log(noDupeList);
//
console.log("\n\n");


/*
console.log("18. Make an array that contains all elements that appear exactly once in someRepeatsAgain");
//
let someRepeatsAgain = [25,11,30,31,50,28,4,37,13,20,24,38,28,14,44,33,7,43,39,35,36,42,1,40,7,14,23,46,21,39,11,42,12,38,41,48,20,23,29,24,50,41,38,23,11,30,50,13,13,16,10,8,3,43,10,20,28,39,24,36,21,13,40,25,37,39,31,4,46,20,38,2,7,11,11,41,45,9,49,31,38,23,41,16,49,29,14,6,6,11,5,39,13,17,43,1,1,15,25]
//
console.log(someRepeatsAgain);
console.log("");
let onlyOnceList = [];
for (let i = 0; i < someRepeatsAgain.length; i++) { // LOOP LEVEL 1: Evals each element of someRepeatsAgain
  let addingIfOnce = true;
  for (let j = 0; j < someRepeatsAgain.length; j++) { // LOOP LEVEL 2: Evals against each element of someRepeatsAgain looking for duplicates
    if (j !== i) { // CHECK prevents eval of same index
      if (someRepeatsAgain[i] === someRepeatsAgain[j]) {
        addingIfOnce = false;
      }
    }
  }
  addingIfOnce
    ? onlyOnceList.push(someRepeatsAgain[i])
    : false;
}
console.log(onlyOnceList);
let msg = ["** The answer given on the README.md file is incorrect"];
console.log(msg);
//
console.log("\n\n");



console.log('19. Given an array of strings, find the the string with the most "a"s in it.');
//
let labber19 = ["first aaaas", "apes", "abba", "apple", "aardvark", "lots of aaaaas", "last a"];
//
console.log(labber19);
console.log("");
let winnerString = labber19[0];
let winnerNumAs = "";
for (let i = 0; i < labber19.length; i++) { // LOOP LEVEL 1: Evals each element of labber19, starting with second element vs the first element
  let howManyAs = 0;
  for (let j of labber19[i]) { // LOOP LEVEL 2: Evals each element of labber19 AS STRING with counter for instances of 'a'
    if (j === "a") {
      howManyAs += 1;
    }
  if (i === 0) { // CHECK Creats first num of A's to beat
    winnerNumAs = howManyAs;
  }
  }
  if (howManyAs > winnerNumAs) { // CHECK Whoever wins moves on to the next round in Level 1
    winnerString = labber19[i];
    winnerNumAs = howManyAs;
  }
}
console.log(winnerString);
// console.log(winnerNumAs);
//
console.log("\n\n");



console.log("20. Find the second smallest number in an Array of Ints");
//
let labber20 = [91, 92, 93, 91, 91, 91, 98, 93, 101, -9, 0, -1, 3, 0, 3];
//
console.log(labber20);
console.log("");
let winners = [labber20[0]];
for (let i = 1; i < labber20.length; i++) { // LOOP LEVEL 1: Evals each element of labber20, starting with second vs first
  if (labber20[i] < winners[0]) { // challenger element is lesser than smallest
    winners[1] = winners[0];
    winners[0] = labber20[i];
    // ALTERNATIVE METHOD: preserves evidence of how many lead changes
    // winners.unshift(labber20[i]);
  } else if (winners[1] === undefined || labber20[i] < winners[1]) { // challenger element is between smallest & 2nd-smallest; also creates 2nd-smallest if undefined
    winners[1] = labber20[i];
  }
  // DEBUG console.log(winners);
}
if (winners[0] === winners[1]) { // CHECK for all numbers being the same
  console.log(`There is no second smallest integer. All numbers are`);
  console.log(winners[0]);
} else {
  console.log(`The second smallest integer is`);
  console.log(winners[1]);
}
// DEBUG console.log(winners);
//
console.log("\n");
*/
