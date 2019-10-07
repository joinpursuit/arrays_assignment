// ## Exercises

// ## 1. Problem One - Fruits array

// a. Add "mango" to the end of a fruits array ["strawberry", "banana"].

// b. Add "blueberry" to the front of the same fruits array.

// c. Remove the last element of the fruits array.

// d. console.log the length of the fruits array.

// e. Remove the first element of the fruits array.

// f. Join all the elements in the fruits array with a '$'.

let fruits = ["strawberry", "banana"]
fruits.push("mango")
console.log(fruits);

fruits.unshift("blueberry")
console.log(fruits);

fruits.pop()
console.log(fruits);

console.log(fruits.length);

fruits.shift();
console.log(fruits);

console.log(fruits.join("$")); 


// ## 2. Problem Two - Larger array

// Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"

// ```js
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]

// // log [1,5,2,4]
// ```

let firstArr = [1, 2, 3]
let secondArr = [1, 5, 2, 4]

if (firstArr > secondArr) {
console.log(firstArr + " is greater than " + secondArr);
} else if (firstArr < secondArr) {
console.log(firstArr + " is less than " + secondArr)
} else {
    console.log(firstArr + " is equal to " + secondArr)
}


// ## 3. Problem Three - Middle element
// Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.

// ```js
// let hasExactMiddleArr = [1,5,3]
// // logs 5
// let hasNoExactMiddleArr = [1,4,6,9]
// // logs 4,6
// ```
//-------------------------------------------------------------------------------

let array1 = [9, 4, 7]
// let array1 = [0, 4, 7, 3]

if (array1.length % 2 === 1) {
    console.log(array1[Math.floor(array1.length / 2)]);
} else {
    console.log(array1[Math.floor(array1.length / 2)] + ", " + array1[Math.floor(array1.length / 2) - 1])
}

// ## 4. Problem Four - Iterate over an array

// a. Write code that logs every value in an array using a `for` loop

// ```js
// let logMeOutFor = ["I", "am", "a", "happy", "array"]

// /* I
//   am
//   a
//   happy
//   array
// */
// ```

let str = ["You", "should", "know", "what", "peng", "means"]
for (i = 0; i < str.length; i ++) {
console.log(str[i]);
}
// b. Write code that logs every value in an array using a `while` loop

// ```js
// let logMeOutWhile = ["I", "am", "a", "happy", "array"]

// /* I
//   am
//   a
//   happy
//   array
// */
// ```

let str2 = ["How", "are", "you", "today"]
x = 0;
while(x < str2.length) {
console.log(str2[x]);
x++
}


// c. Write code that logs every value in an array using a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop

// ```js
// let logMeOutForOf = ["I", "am", "a", "happy", "array"]

// /* I
//   am
//   a
//   happy
//   array
// */
// ```

const eArray = ["I", "am", "a", "happy", "array"];

for (const element of eArray) {
    console.log(element)
}

// ## 5. Problem Five - Sum of array

// Given an array of numbers, write code that logs the sum of all the numbers

// ```js
// let firstArrToSum = [1, 2, 3, 4, 5, 6]
// //  21

// let secondArrToSum = [1, 2, 3, 4, 5, -6]
// //  9
// ```

let firstArrToSum = [1, 2, 3, 4, 5, 6]
let sum = 0

for (let i = 0; i < firstArrToSum.length; i++) {
    sum += firstArrToSum[i]
}
console.log("The total number is " + sum)

// ## 6. Problem Six - Log odd/even numbers

// a. Given an array of numbers, write code that logs all the odd numbers
// ```js
// let evenAndOddArr = [1,5,2,4,11,12,99,100]
// // 1, 5, 11, 99
// ```

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x = 0; x < newArray.length; x++) {
    if (newArray[x] % 2 === 1) {
        console.log(newArray[x] + " is an odd number.")
    }
}

// b. Given an array of numbers, write code that logs the sum of all the even numbers
// ```js
// let evenAndOddArrToSum = [1,5,2,3,11,4,6]
// // 12
// ```


for (let k = 0; k < newArray.length; k++) {
    if (newArray[k] % 2 === 0) {
        console.log(newArray[k] + " is an even number.")
    }
}


// ## 7. Problem Seven - Smallest value

// Given an array of numbers, write code that logs the smallest value

// ```js
// let arr = [4,3,7,29,40]

// // 3
// ```

let arrOfNum = [10, 73, 17, 6, 21, 1]
let smallest = arrOfNum[0]

for (let p = 0; p < arrOfNum.length; p++) {
    if (arrOfNum[p] < smallest ) {
    smallest = arrOfNum[p]
    } 
} console.log(smallest + " is the smallest number.")



// ## 8. Problem Eight - Second smallest value

// Find the second smallest number in an Array of Ints

// ```js
// let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]

// // 4
// ```

let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]

let firstSmallest = Infinity // smallest
let secondSmallest = Infinity // second smallest
for (let i = 0; i < secondSmallestArr.length; i++){
   if(secondSmallestArr[i] < firstSmallest && secondSmallest < firstSmallest){
       firstSmallest = secondSmallestArr[i]
} else if ( secondSmallestArr[i] < secondSmallest){
   secondSmallest = secondSmallestArr[i]
}
}
console.log("The smallest number is "+ firstSmallest + " and the 2nd smallest number is " + secondSmallest + ".")



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
