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

// Problem Three - Middle element

// Given an array, log its middle element. If the middle of the array is between two elements, log both of them.

let arr = [1,2,3,4,5]

if (arr.length % 2 === 0) {
  console.log(Math.floor(arr.length) / 2 + "," + arr[Math.floor(arr.length / 2)])
} else {
  console.log(arr[Math.floor(arr.length / 2)])
}

// Problem Four - Iterate over an array
// a. Write code that logs every value in an array using a for loop

let arr = [1,2,3]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

// b. Write code that logs every value in an array using a while loop

let arr = [1,2,3]

let i = 0

while(i < arr.length){
  console.log(arr[i])
  i++
}

// c. Write code that logs every value in an array using a for/of loop

let arr = [1,2,3]

for (let element of arr) {
  console.log(element)
}

// Problem Five - Sum of array
// Given an array of numbers, write code that logs the sum of all the numbers

let arr = [1,2,3,4]
let sum = 0

for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
}