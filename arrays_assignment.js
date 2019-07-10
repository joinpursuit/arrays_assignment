//1. Log the last element of an array.
let tvShows = ['Seinfield', 'Cosby', 'Fraiser'];
console.log(tvShows[tvShows.length - 1]);

//2. Change the first element of an array to the string "something else"
let cartoon = ['Voltron', 'DBZ', 'GEM'];
cartoon.unshift('Avatar');
console.log(cartoon);

//3. Add "mango" to the end of a fruits array ["strawberry", "banana"].
let fruits = ['strawberry', 'banana'];
fruits.push('mango');
console.log(fruits);

//4. Add "blueberry" to the front of the same fruits array
fruits.unshift('blueberry');
console.log(fruits);

//5. Remove the last element of the fruits array.
fruits.pop();
console.log(fruits);

//6. console.log the length of the fruits array.
console.log(fruits.length);

//7. Remove the first element of the fruits array.
fruits.shift();
console.log(fruits);

//8. Join all the elements in the fruits array with a '$'.
let fruits1 = ['strawberry', 'banana', 'mango'];
console.log(fruits1.join('$'));

//9. Given two arrays, write code that logs the larger array.
//If the
//arrays are the same length, log "They are the same size"
let firstArr = [1, 2, 3];
let secondArr = [1, 5, 2, 4];
if (firstArr < secondArr) {
  console.log(secondArr);
} else {
  console.log(firstArr);
}

//10. Given an array, log its middle element.  If the middle of the array
//is between two elements, log both of them

let hasNoExactMiddleArr = [7, 9, 6, 3];
let middleL = hasNoExactMiddleArr.length / 2;
console.log(hasNoExactMiddleArr.length);
console.log(middleL);
console.log(hasNoExactMiddleArr[middleL]);
console.log(hasNoExactMiddleArr[middleL - 1]);

//11. Write code that logs every value in an array using a for loop

let arra = ['I', 'am', 'a', 'happy', 'array'];
for (let i = 0; i < arra.length; i++) {
  console.log(arra[i]);
}

//12 Write code that logs every value in an array using a while loop
let logMeOutFor = ['I', 'am', 'a', 'happy', 'array'];
let x = 0;
while (x > logMeOutFor.length) {
  console.log(logMeOutFor[x]);
  x++;
}

//13. Write code that logs every value in an array using a for/of loop

let logMeOutForOf = ['Im', 'not', 'a', 'happy', 'array'];

for (let value of logMeOutForOf) {
  console.log(value);
}

//14. Given an array of numbers, write code that logs the sum of all the numbers
var sum = 0;
let firstArrToSum = [1, 2, 3, 4, 5, 6];
for (r = 0; r < firstArrToSum.length; r++) {
  sum += firstArrToSum[r];
}

console.log(sum);

var sum = 0;
let secondArrToSum = [1, 2, 3, 4, 5, -6];
for (s = 0; s < secondArrToSum.length; s++) {
  sum += secondArrToSum[s];
}

console.log(sum);

//15. Given an array of numbers, write code that logs all the odd numbers
let evenAndOddArr = [1, 5, 2, 4, 11, 12, 99, 100];
for (let x = 1; x < evenAndOddArr.length; x++) {
  if (evenAndOddArr[x] % 2 !== 0) {
    console.log(evenAndOddArr[x]);
  }
}

//16. Given an array of numbers, write code that logs the sum of all the

var sum5 = 0;
let evenAndOddArrToSum = [1, 5, 2, 3, 11, 4, -6];
for (s = 0; s < evenAndOddArrToSum.length; s++) {
  sum5 += evenAndOddArrToSum[s];
}

console.log(sum);
