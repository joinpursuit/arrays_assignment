// ## Exercises

// ## 1. Problem One - Fruits array

// a. Add "mango" to the end of a fruits array ["strawberry", "banana"].

// b. Add "blueberry" to the front of the same fruits array.

// c. Remove the last element of the fruits array.

// d. console.log the length of the fruits array.

// e. Remove the first element of the fruits array.

// f. Join all the elements in the fruits array with a '$'.

// let fruits = ["strawberry", "banana"];
// fruits.push("mango");
// fruits.unshift("blueberry");
// fruits.pop();
// console.log(fruits.length);
// fruits.shift();
// console.log(fruits.join("$"));

// ## 2. Problem Two - Larger array

// Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"

let firstArr = [1,2,3,5,]
let secondArr = [1,5,2,4]

if (firstArr.length > secondArr.length){
    console.log( firstArr)
}else if( secondArr.length > firstArr.length){
    console.log (secondArr)
}else console.log ("They are the same size")