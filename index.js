// Problem One - Fruits array

// a. Add "mango" to the end of a fruits array ["strawberry", "banana"].

let fruits = ["strawberry", "banana"]
fruits.push("mango")
console.log(fruits)

// b. Add "blueberry" to the front of the same fruits array.

fruits.unshift("blueberry")
console.log(fruits)

// c. Remove the last element of the fruits array.

fruits.pop()
console.log(fruits)

// d. console.log the length of the fruits array.

console.log(fruits.length)

// e. Remove the first element of the fruits array.

fruits.shift()
console.log(fruits)

// f. Join all the elements in the fruits array with a '$'.

console.log(fruits.join("$"))

// Problem Two - Larger array

// Given two arrays, write code that logs the larger array. If the arrays are the same length, log "They are the same size"

let arr1 = [1,2,3]
let arr2 = [1,2,3,4]

if (arr1.length > arr2.length) {
    console.log(`${arr1} is larger than ${arr2}`)
} else if (arr1.length < arr2.length) {
    console.log(`${arr2} is larger than ${arr1}`)
} else if (arr1.length === arr2.length) {
    console.log(`${arr1} is equal to ${arr2}`)
}