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
