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

// let firstArr = [1,2,3,5,]
// let secondArr = [1,5,2,4]

// if (firstArr.length > secondArr.length){
//     console.log( firstArr)
// }else if( secondArr.length > firstArr.length){
//     console.log (secondArr)
// }else console.log ("They are the same size")

// ## 3. Problem Three - Middle element

// Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.

// let testArray = [1,2,3,4,5,6]
// if (testArray.length % 2 === 0){
//     console.log (testArray[(testArray.length / 2)-1] + "," + String(testArray[((testArray.length / 2) + 1) - 1]))
// } else console.log (testArray[(Math.round(testArray.length / 2)- 1)])

// ## 4. Problem Four - Iterate over an array

// a. Write code that logs every value in an array using a `for` loop
// let arr = ["red", "blue", "yellow"]
// for (let i = 0; i < arr.length; i++){
//     console.log (arr[i])
// }
// // b. Write code that logs every value in an array using a `while` loop
// let i = 0
// while (i < arr.length){
//     console.log (arr[i])
//     i++
// }
// // c. Write code that logs every value in an array using a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
// for (const i2 of arr){
//     console.log (i2)
// }
// ## 5. Problem Five - Sum of array

// Given an array of numbers, write code that logs the sum of all the numbers
let sum = 0
let arrayFour = [18,14,4,5]
for (let i = 0; i < arrayFour.length; i++){
    sum+= arrayFour[i]
}
console.log(sum)