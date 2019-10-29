// ## Exercises

// ## 1. Problem One - Fruits array

// a. Add "mango" to the end of a fruits array ["strawberry", "banana"].

// b. Add "blueberry" to the front of the same fruits array.

// c. Remove the last element of the fruits array.

// d. console.log the length of the fruits array.

// e. Remove the first element of the fruits array.

// f. Join all the elements in the fruits array with a '$'.
let fruits = ["strawberry", "banana"]
fruits.unshift('blueberry')
fruits.pop()
console.log(fruits.length)
fruits.shift()
fruits.join('$')
console.log(fruits)




// ## 2. Problem Two - Larger array

// Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"
let firstArr = [1,2,3]
let secondArr = [1,5,2,4]
if (firstArr.length === secondArr.length) {
    console.log("they are the same")
} else if(firstArr.length > secondArr.length) {
    console.log(firstArr)
} else {
    console.log(secondArr)
}
// ```js
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]

// // log [1,5,2,4]
// ```

// ## 3. Problem Three - Middle element

// Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.
// let hasNoExactMiddleArr = [1,4,6,9]
let hasExactMiddleArr = [1,5,3]
if(hasExactMiddleArr.length % 2 === 1) {
    console.log(hasExactMiddleArr[(hasExactMiddleArr.length -1) / 2])
} 
let hasNoExactMiddleArr = [1,4,6,9]
if (hasNoExactMiddleArr.length % 2 === 0) {
    console.log(hasNoExactMiddleArr[(hasNoExactMiddleArr.length /2)])
}

// if (hasExactMeddleArr.length % 2 === 1) {
//     console.log(hasExactMeddleArr[(hasExactMeddleArr.length - 1 )/ 2]) 
// }
// } if (hasExactMiddleArr % 2 === 0) {
    // console.log(hasNoExactMiddleArr([hasNoExactMiddleArr.lentgth / 2]))
// }




// ```js
// let hasExactMiddleArr = [1,5,3]

// // logs 5

// let hasNoExactMiddleArr = [1,4,6,9]

// // logs 4,6

// ```

// ## 4. Problem Four - Iterate over an array

// a. Write code that logs every value in an array using a `for` loop
let logMeOutFor = ["I", "am", "a", "happy", "array"]
let i = 0
for ( i = 0; i < logMeOutFor.length; i++) {
    // logMeOutFor = arr[i]   
    console.log(logMeOutFor[i])
} 

// b. Write code that logs every value in an array using a `while` loop

// let logMeOutWhile = ["I", "am", "a", "happy", "array"]
// let i = 0
// while (i < logMeOutWhile.length) {
//     console.log(logMeOutWhile[i])
//     i++
// }



// c. Write code that logs every value in an array using a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop


let logMeOutForOf = ["I", "am", "a", "happy", "array"]
for ( el of logMeOutFor) {
    console.log(el)
}
// /* I
//   am
//   a
//   happy
//   array
// */
// ```


// ## 5. Problem Five - Sum of array

// Given an array of numbers, write code that logs the sum of all the numbers

let firstArrToSum = [1, 2, 3, 4, 5, 6]
let sum = 0
for (let i = 0; i < firstArrToSum.length; i++){
    sum += firstArrToSum[i]  
} 
console.log(sum)

let secondArrToSum = [1, 2, 3, 4, 5, -6]
let sum2 = 0;
for (i=0; i < secondArr.length; i++){
    sum2 += secondArrToSum[i]
}
console.log(sum2)


// ## 6. Problem Six - Log odd/even numbers

// a. Given an array of numbers, write code that logs all the odd numbers
let evenAndOddArr = [1,5,2,4,11,12,99,100]
for (i = 0; i < evenAndOddArr.length; i++) {
    if (evenAndOddArr[i]%2 === 1){
        console.log(evenAndOddArr[i])
    } 
}

// b. Given an array of numbers, write code that logs the sum of all the even numbers
 
let evenAndOddArrToSum = [1,5,2,3,11,4,6]
let sum3 = 0
for (i = 0; i < evenAndOddArrToSum.length; i ++) {
    if(evenAndOddArrToSum[i] % 2 === 0) {
        sum3 += evenAndOddArrToSum[i]
    }
} console.log(sum3)

// // 12
// ```

// ## 7. Problem Seven - Smallest value

// Given an array of numbers, write code that logs the smallest value
let arr = [4,3,7,29,40]
let smallest = Infinity
for (i = 0; i < arr.length; i++) {
    if ( arr[i] <= smallest) {
        smallest = arr[i]
        console.log(arr[i])
    }
}


// // 3
// ```

// ## 8. Problem Eight - Second smallest value

// Find the second smallest number in an Array of Ints





// // 4
// ```


// ## 9. Problem Nine - Duplicates

// Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.

// <details>
//   <summary>Hint</summary>
  
//   Make another array to store all the values you've seen so far.  When looking at a new value, see if your array [includes](https://www.w3schools.com/jsref/jsref_includes_array.asp#targetText=The%20includes()%20method%20determines,element%2C%20and%20false%20if%20not.) the value, and only add it to the `noDupeList` if it doesn't.
// </details>
// let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// let noDupelist = []

// for (let i = 0; i < dupeFriendlyList.length; i++) {
//     if (noDupelist.includes(dupeFriendlyList[i])) {

// } else {
//     noDupelist.push(dupeFriendlyList[i])
// }
// }
// console.log(noDupelist)

let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
let noDupeList = []

for (i=0; i < dupeFriendlyList.length; i++) {
    if(noDupeList.includes(dupeFriendlyList[i])) {
        
    } else {
        noDupeList.push(dupeFriendlyList[i])
     }
}
console.log(noDupeList)
//let noDupleList = [4, 2, 6, 9, 1]


