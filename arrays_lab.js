// # Arrays Lab

// To complete this lab (as for most labs), do the following:

// 1. Fork this repo.
// 2. Clone **your** forked repo.
// 3. Create a file called `arrays_lab.js` inside your cloned repo.
// 4. Copy the description of the exercise as a comment.
// 5. Underneath the commented description write your code.
// 6. Ensure your solutions work properly!
// 7. Open PR against this repo.

// ___

// ## Exercises

// ## 1. Problem One - Fruits array
let fruits = ["strawberry", "banana"];
// a. Add "mango" to the end of a fruits array ["strawberry", "banana"].
fruits.push("mango");
console.log(fruits);
// b. Add "blueberry" to the front of the same fruits array.
fruits.unshift("blueberry");
console.log(fruits);
// c. Remove the last element of the fruits array.
fruits.pop();
console.log(fruits);
// d. console.log the length of the fruits array.
console.log(fruits.length);
// e. Remove the first element of the fruits array.
fruits.shift();
console.log(fruits);
// f. Join all the elements in the fruits array with a '$'.
console.log(fruits.join("$"))

 
// ## 2. Problem Two - Larger array

// Given two arrays, write code that logs the larger array.  If the arrays are the same length, 
// log "They are the same size"

// ```js
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]

// // log [1,5,2,4]
// ```

let firstArr = [1,2,3]
let secondArr = [1,5,2,4]
if(firstArr.length === secondArr.length){
    console.log("They are the same size")
} else if(firstArr.length > secondArr.length){
    console.log(firstArr)
} else {
    console.log(secondArr)
}

// ## 3. Problem Three - Middle element

// Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.

// ```js
// let middleArr = [1,5,3]

// // logs 5

// let hasNoExactMiddleArr = [1,4,6,9]

// // logs 4,6

// ```

let middleArr = [1,5,3, 4]
if(middleArr.length%2 === 1) {
    console.log(middleArr[(middleArr.length-1)/2])
} else if(middleArr.length%2 === 0){
    console.log(middleArr[(middleArr.length/2)-1]);
    console.log(middleArr[middleArr.length/2])
}

// ## 4. Problem Four - Iterate over an array

// a. Write code that logs every value in an array using a `for` loop

// ```js
let logMeOutFor = ["I", "am", "a", "happy", "array"]

// /* I
//   am
//   a
//   happy
//   array
// */
// ```
for(let i = 0; i < logMeOutFor.length; i++){
    console.log(logMeOutFor[i]);
}

// b. Write code that logs every value in an array using a `while` loop

// ```js
let logMeOutWhile = ["I", "am", "a", "happy", "array"]

// /* I
//   am
//   a
//   happy
//   array
// */
// ```
let index = 0;
while(index < logMeOutWhile.length){
    console.log(logMeOutWhile[index]);
    index++;
}


// c. Write code that logs every value in an array using a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop

// ```js
let logMeOutForOf = ["I", "am", "a", "happy", "array"]

// /* I
//   am
//   a
//   happy
//   array
// */
// ```
for(const element of logMeOutFor){
    console.log(element);
}



// ## 5. Problem Five - Sum of array

// Given an array of numbers, write code that logs the sum of all the numbers

// ```js
let firstArrToSum = [1, 2, 3, 4, 5, 6]
// //  21
let sum = 0;
for(let i = 0; i < firstArrToSum.length; i ++){
    sum += firstArrToSum[i];
}
console.log(sum);

// //  9
// ```

let secondArrToSum = [1, 2, 3, 4, 5, -6]
let newSum = 0
for(let index1 = 0; index1 < secondArrToSum.length; index1++ ){
    newSum += secondArrToSum[index1];
} 
console.log(newSum);



// ## 6. Problem Six - Log odd/even numbers

// a. Given an array of numbers, write code that logs all the odd numbers

// ```js

let evenAndOddArr = [1,5,2,4,11,12,99,100]

// // 1, 5, 11, 99
// ```

console.log("Problem 6a -----------------");
for(let j = 0; j < evenAndOddArr.length; j++){
    if(evenAndOddArr[j] % 2 === 1){
        console.log(evenAndOddArr[j]);
    }
}
// b. Given an array of numbers, write code that logs the sum of all the even numbers

// ```js

let evenAndOddArrToSum = [1,5,2,3,11,4,6]

// // 12
// ```

console.log("Problem 6b -----------------");
let sum2 = 0
for(let n = 0; n < evenAndOddArrToSum.length; n++){
    if(evenAndOddArrToSum[n]%2 === 0) {
        sum2+= evenAndOddArrToSum[n];
    }
}
console.log(sum2)

// ## 7. Problem Seven - Smallest value

// Given an array of numbers, write code that logs the smallest value

// ```js
let arr = [4,3,7,29,40]

// // 3
// ```
console.log("Problem 7 -----------------");
let smallestNum = arr[0];
for(let l = 0; l < arr.length; l++){
    if(arr[l] < smallestNum){
        smallestNum = arr[l];
    }
}   
console.log(smallestNum);


// ## 8. Problem Eight - Second smallest value

// Find the second smallest number in an Array of Ints

// ```js
let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]

// // 4
// ```
console.log("Problem 8 -----------------");

let smallestNumber = secondSmallestArr[0];
for(let y = 0; y < secondSmallestArr.length; y++){
    if(secondSmallestArr[y] < smallestNumber){
        smallestNumber = secondSmallestArr[y];
    }
}   
console.log(smallestNumber);

// ## 9. Problem Nine - Duplicates

// Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.

// <details>
//   <summary>Hint</summary>
  
//   Make another array to store all the values you've seen so far.  When looking at a new value, see if your array [includes](https://www.w3schools.com/jsref/jsref_includes_array.asp#targetText=The%20includes()%20method%20determines,element%2C%20and%20false%20if%20not.) the value, and only add it to the `noDupeList` if it doesn't.
// </details>

// ```js
// let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// let noDupeList = []

// // noDupleList = [4, 2, 6, 9, 1]

// ```
