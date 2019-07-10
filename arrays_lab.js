// Arrays Lab Answers

//1. Log the last element of an array.
console.log('');
console.log('Question 1');
console.log('');

let myArray = ['Ice', 'Water', 'Bucket', 'Cup'];

console.log(myArray[myArray.length - 1]);

//2. Change the first element of an array to the string "something else".
console.log('');
console.log('Question 2');
console.log('');

console.log('Before');
console.log(myArray);
myArray.splice(0, 1, 'Something else');
console.log('After');
console.log(myArray);

//3. Add "mango" to the end of a fruits array ["strawberry", "banana"].
console.log('');
console.log('Question 3');
console.log('');

let myFruits = ['Strawberry', 'Banana'];

console.log('Before');
console.log(myFruits);
myFruits.push('Mango');
console.log('After');
console.log(myFruits);

//4. Add "blueberry" to the front of the same fruits array.
console.log('');
console.log('Question 4');
console.log('');

console.log('Before');
console.log(myFruits);
myFruits.unshift('Blueberry');
console.log('After');
console.log(myFruits);

//5. Remove the last element of the fruits array.
console.log('');
console.log('Question 5');
console.log('');

console.log('Before');
console.log(myFruits);
myFruits.pop();
console.log('After');
console.log(myFruits);

//6. console.log the length of the fruits array.
console.log('');
console.log('Question 6');
console.log('');

console.log('Length of myFruits array is ' + myFruits.length + '.');

//7. Remove the first element of the fruits array.
console.log('');
console.log('Question 7');
console.log('');

console.log('Before');
console.log(myFruits);
myFruits.shift();
console.log('After');
console.log(myFruits);

//8. Join all the elements in the fruits array with a '$'.
console.log('');
console.log('Question 8');
console.log('');

console.log(myFruits.join(' $ '));

//9. Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"
console.log('');
console.log('Question 9');
console.log('');

let firstArr = [1, 2, 3];
let secondArr = [1, 5, 2, 4];

if (firstArr.length === secondArr.length) {
  console.log('They are the same size');
} else if (firstArr.length > secondArr.length) {
  console.log(firstArr);
} else {
  console.log(secondArr);
}

//10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.
console.log('');
console.log('Question 10');
console.log('');

let hasExactMiddleArr = [1, 5, 3];
let hasNoExactMiddleArr = [1, 4, 6, 9];

let hasMiddle = Math.floor(hasExactMiddleArr.length / 2);
let hasMiddle2 = Math.ceil(hasExactMiddleArr.length / 2);
let hasNoMiddle = (hasNoExactMiddleArr.length / 2);

if (hasExactMiddleArr.length % 2 === 0) {
  console.log(hasExactMiddleArr[hasMiddle]);
  console.log(hasExactMiddleArr[hasMiddle2]);
} else {
  console.log(hasExactMiddleArr[hasMiddle]);

}

if (hasNoExactMiddleArr.length % 2 === 0) {
  console.log(hasNoExactMiddleArr[hasNoMiddle - 1]);
  console.log(hasNoExactMiddleArr[hasNoMiddle]);
}

//11. Write code that logs every value in an array using a for loop
console.log('');
console.log('Question 11');
console.log('');

let logMeOutFor = ['I', 'am', 'a', 'happy', 'array'];

for (i = 0; i < logMeOutFor.length; i++) {
  console.log(logMeOutFor[i]);
}

//12. Write code that logs every value in an array using a while loop
console.log('');
console.log('Question 12');
console.log('');

let logMeOutWhile = ['I', 'am', 'a', 'happy', 'array'];
let counter = 0;
while (logMeOutWhile.length >= counter) {
  console.log(logMeOutWhile[counter]);
  counter++;
}

//13. Write code that logs every value in an array using a for/of loop
console.log('');
console.log('Question 13');
console.log('');

let logMeOutForOf = ['I', 'am', 'a', 'happy', 'array'];

for (let value of logMeOutForOf) {
  console.log(value);
}

//14. Given an array of numbers, write code that logs the sum of all the numbers
console.log('');
console.log('Question 14');
console.log('');

let firstArrToSum = [1, 2, 3, 4, 5, 6];
let secondArrToSum = [1, 2, 3, 4, 5, -6];
let firstSum = 0;
let secondSum = 0;

for (i = 0; i < firstArrToSum.length; i++) {
  firstSum += firstArrToSum[i];
}

for (i = 0; i < secondArrToSum.length; i++) {
  secondSum += secondArrToSum[i];
}

console.log('My first sum is ' + firstSum + '.');
console.log('My second sum is ' + secondSum + '.');

//15. Given an array of numbers, write code that logs all the odd numbers
console.log('');
console.log('Question 15');
console.log('');

let evenAndOddArr = [1, 5, 2, 4, 11, 12, 99, 100];

for (i = 0; i < evenAndOddArr.length; i++) {
  if (evenAndOddArr[i] % 2 !== 0) {
    console.log(evenAndOddArr[i]);
  }
}

//16. Given an array of numbers, write code that logs the sum of all the even numbers
console.log('');
console.log('Question 16');
console.log('');

let evenAndOddArrToSum = [1, 5, 2, 3, 11, 4, 6];
let sumOfEvens = 0;
for (i = 0; i < evenAndOddArrToSum.length; i++) {
  if (evenAndOddArrToSum[i] % 2 === 0) {
    sumOfEvens += evenAndOddArrToSum[i];
  }
}

console.log('The sum of all evens is ' + sumOfEvens + '.');

//17. Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.
console.log('');
console.log('Question 17');
console.log('');

let dupeFriendlyList = [4, 2, 6, 2, 2, 6, 4, 9, 2, 1];
let noDupeList = [];

for (let value of dupeFriendlyList) {
  if (noDupeList.indexOf(value) === -1) {
    noDupeList.push(value);
  }
}

console.log(noDupeList);

//console.log('Before');
//console.log(noDupeList);
/*
for (let value of dupeFriendlyList) {
  for (let value2 of dupeFriendlyList) {
    if (value === value2) {
      console.log(value2);
    } else {
      console.log(value2 + ' no match');
    }

    value2 += 1;
  }

  console.log('Block Check');
  value += 1;
}*/

//console.log('After');
//console.log(dupeFriendlyList);

//18. Make an array that contains all elements that appear exactly once in someRepeatsAgain
console.log('');
console.log('Question 18');
console.log('');

let someRepeatsAgain = [25,11,30,31,50,28,4,37,13,20,24,38,28,14,44,33,7,43,39,35,36,42,1,40,7,14,23,46,21,39,11,42,12,38,41,48,20,23,29,24,50,41,38,23,11,30,50,13,13,16,10,8,3,43,10,20,28,39,24,36,21,13,40,25,37,39,31,4,46,20,38,2,7,11,11,41,45,9,49,31,38,23,41,16,49,29,14,6,6,11,5,39,13,17,43,1,1,15,25]
//let someRepeatsAgain = [1,2,3,4,1,3,3,1,2];
let resultsArray = [];

for (i = 0; i < someRepeatsAgain.length; i++) {
  let checkIt = false;
  for (d = 0; d < someRepeatsAgain.length; d++) {
    if (i !== d && someRepeatsAgain[i] === someRepeatsAgain[d]) {
      checkIt = true;
      }
  }
  if (checkIt === false) {
    resultsArray.push(someRepeatsAgain[i]);
}
}
  console.log(resultsArray);

//19. Given an array of strings, find the the string with the most "a"s in it.
console.log('');
console.log('Question 19');
console.log('');

let mostAStrings = ["apes", "abba", "apple"];
let aCounter = 0;
let lastACounter = 0;
let finalResults = '';
//console.log(mostAStrings[0][0]);

for (let element of mostAStrings) {
    for (i = 0; i < element.length; i++) {
      if (element[i] === 'a') {
        aCounter += 1;
        if (aCounter > lastACounter) {
          finalResults = element;
          lastACounter = aCounter;
          aCounter = 0;
        }
      }
    }
}
console.log(finalResults + ' Has the most A\'s in this group of elements: ' + mostAStrings + '.');

//20. Find the second smallest number in an Array of Ints
console.log('');
console.log('Question 20');
console.log('');

//I could sort the array and select the 2nd index... but
let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69];
const minimun = Math.min.apply(Math, secondSmallestArr);
let placeHolder = 0;
let secondSmallest = Math.max.apply(Math, secondSmallestArr);
console.log('Highest: ' + secondSmallest + ' Smallest: ' + minimun);

for (a = 0; a < secondSmallestArr.length; a++) {
  for (b = 0; b < secondSmallestArr.length; b++){
    if (a !== b && secondSmallestArr[a] < secondSmallestArr[b] && minimun < secondSmallestArr[a]) {
      placeHolder = secondSmallestArr[a];
      if (placeHolder < secondSmallest) {
        secondSmallest = placeHolder;
      }
    }
  }
}
console.log('The second smallest number in this array is ' + secondSmallest + '.');
