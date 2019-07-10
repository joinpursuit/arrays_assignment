// JOSEPH P. PASAOA
//



console.log("1. Log the last element of an array.");
//
let labber01 = [1,2,3];
//
console.log(labber01[labber01.length - 1]);
//
console.log("\n\n");



console.log('2. Change the first element of an array to the string "something else".');
//
let labber02 = [4,5,6];
//
labber02[0] = "something else";
console.log(`${labber02}`);
//
console.log("\n\n");



console.log('3. Add "mango" to the end of a fruits array ["strawberry", "banana"].');
//
let fruits = ["strawberry", "banana"];
//
fruits.push("mango");
console.log(fruits);
//
console.log("\n\n");



console.log('4. Add "blueberry" to the front of the same fruits array. ');
//
fruits.unshift("blueberry");
console.log(fruits);
//
console.log("\n\n");



console.log("5. Remove the last element of the fruits array.");
//
fruits.pop();
console.log(fruits);
//
console.log("\n\n");



console.log("6. console.log the length of the fruits array.");
//
console.log(fruits.length);
//
console.log("\n\n");



console.log("7. Remove the first element of the fruits array.");
//
fruits.shift();
console.log(fruits);
//
console.log("\n\n");



console.log("8. Join all the elements in the fruits array with a '$'.");
//
let moneyFruits = fruits.join('$');
console.log(moneyFruits);
//
console.log("\n\n");



console.log('9. Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"');
//
let labber9a = [10, 20, 30, 40];
let labber9b = [15, 25, 35];
//
console.log(labber9a);
console.log(labber9b);
console.log("");
if (labber9a.length > labber9b.length) { // Array A is larger
  console.log(labber9a);
} else if (labber9a.length < labber9b.length) { // Array B is larger
  console.log(labber9b);
} else { // Both arrays are equal
  console.log("They are the same size");
}
//
console.log("\n\n");



console.log("10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.");
//
let labber10 = [11, 12, 13, 14, 15];
//
console.log(labber10);
console.log("");
let ruler = labber10.length;
if (ruler % 2 === 0) {
  console.log(`${labber10[Math.floor((ruler - 1) / 2)]}, ${labber10[Math.ceil((ruler - 1) / 2)]}`);
} else {
  console.log(labber10[(ruler - 1) / 2]);
}
//
console.log("\n\n");



console.log("11. Write code that logs every value in an array using a for loop");
//
let labber11 = [21, 22, 23];
//
console.log(labber11);
console.log("");
for (let i = 0; i < labber11.length; i = i + 1) {
  console.log(labber11[i]);
}
//
console.log("\n\n");



console.log("12. Write code that logs every value in an array using a while loop");
//
console.log(labber11);
console.log("");
let while11 = 0;
while (while11 < labber11.length) {
  console.log(labber11[while11]);
  while11 += 1;
}
//
console.log("\n\n");



console.log("13. Write code that logs every value in an array using a for/of loop");
//
let labber13 = [26, 27, 28, 29];
//
console.log(labber13);
console.log("");
for (let k of labber13) {
  console.log(k);
}
//
console.log("\n\n");



console.log("14. Given an array of numbers, write code that logs the sum of all the numbers");
//
let labber14 = [1, 20, 300];
//
console.log(labber14);
console.log("");
let sum14 = labber14[0];
for (let i = 1; i < labber14.length; i++) {
  sum14 += labber14[i];
}
console.log(sum14);
//
console.log("\n\n");



console.log("15. Given an array of numbers, write code that logs all the odd numbers");
//
let labber15 = [-1, -4, -7, 0, 90];
//
console.log(labber15);
console.log("");
let oddArr15 = [];
for (let i of labber15) {
  i % 2 === 0
    ? false
    : oddArr15.push(i);
}
let oddStr15 = oddArr15.join(", ");
console.log(oddStr15);
//
console.log("\n\n");



console.log("16. Given an array of numbers, write code that logs the sum of all the even numbers");
//
let labber16 = [-4, -1, 110, 201];
//
console.log(labber16);
console.log("");
let sum16 = 0;
for (let i of labber16) {
  i % 2 === 0
    ? sum16 += i
    : false;
}
console.log(sum16);
//
console.log("\n\n");



/* BONUS QUESTIONS */



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
    /* ALTERNATIVE METHOD: preserves evidence of how many lead changes */
    /* winners.unshift(labber20[i]);                                   */
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
