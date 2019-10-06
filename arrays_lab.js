// Problem 1

let fruit = ["strawberry", "banana"];

// a. Add "mango" to the end of a fruits array ["strawberry", "banana"].
fruit.push("mango")
// b. Add "blueberry" to the front of the same fruits array.
fruit.unshift("blueberry")
// c. Remove the last element of the fruits array.
fruit.pop()
// d. console.log the length of the fruits array.
console.log(fruit.length)
// e. Remove the first element of the fruits array.
fruit.shift()
// f. Join all the elements in the fruits array with a '$'.
console.log(fruit.join("$"))

// ## 2. Problem Two - Larger array

// Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"

// ```js
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]

// // log [1,5,2,4]
// ```

let firstArr = [1,2,3]
let secondArr = [1,5,2,4]

if (firstArr.length === secondArr.length) {
    console.log("They are the same size")
} else if (firstArr.length < secondArr.length) {
            console.log(secondArr + " secondArr is the larger array")
        } else {
            console.log("They are not the same size") 
        }   

//  ## 3. Problem Three - Middle element

//         Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.
        
//         ```js
//         let hasExactMiddleArr = [1,5,3]
        
//         // logs 5
        
//         let hasNoExactMiddleArr = [1,4,6,9]
        
//         // logs 4,6
//          ```        



let value = [1, 4, 6, 9]

let notExactMiddleValue = ((value.length - 1 ) / 2)
let secondMiddleValue = ((value.length) / 2)
let middleValue = (value.length/ 2 - 1)


if ((value.length - 1) % 2 === 0) {
    console.log(value[notExactMiddleValue])
} else {
    console.log((value[middleValue]) + ", " + (value[secondMiddleValue]))
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

for (let i = 0; i < logMeOutFor.length; i++) {
    console.log(logMeOutFor[i])
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
let i = 0
while (i < logMeOutFor.length) {
    console.log(logMeOutFor[i])
    i++
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


for (let element of logMeOutFor) {
    console.log(element)
}

// ## 5. Problem Five - Sum of array

// Given an array of numbers, write code that logs the sum of all the numbers

// ```js
let firstArrToSum = [1, 2, 3, 4, 5, 6]
// //  21

let secondArrToSum = [1, 2, 3, 4, 5, -6]
// //  9
// ```

