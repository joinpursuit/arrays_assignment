// ## 1. Problem One - Fruits array
let arrOne = ["strawberry", "banana"]

// a. Add "mango" to the end of a fruits array ["strawberry", "banana"].
arrOne.push("mango")
// b. Add "blueberry" to the front of the same fruits array.
arrOne.unshift("blueberry")
// c. Remove the last element of the fruits array.
arrOne.pop()
// d. console.log the length of the fruits array.
console.log(arrOne.length)
// e. Remove the first element of the fruits array.
arrOne.shift()
// f. Join all the elements in the fruits array with a '$'.
arrOne = arrOne.join("$")
console.log(arrOne)

// ## 2. Problem Two - Larger array

// Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"

// ```js
let firstArr = [1,2,3]
let secondArr = [1,5,2,4]

// // log [1,5,2,4]
// ```
if(firstArr.length === secondArr.length){
    console.log("They are the same size")
} else if (firstArr.length > secondArr.length){
    console.log("first array is bigger")
} else{
    console.log("second array is bigger")
}

// ## 3. Problem Three - Middle element

// Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.

// ```js
// let hasExactMiddleArr = [1,5,3]

// // logs 5

let hasNoExactMiddleArr = [1,4,6,9]

// // logs 4,6

// ```

if(hasNoExactMiddleArr.length %2 === 0){
    console.log(hasNoExactMiddleArr[hasNoExactMiddleArr.length/2-1] +" "+ hasNoExactMiddleArr[hasNoExactMiddleArr.length/2])
} else {
    console.log(hasNoExactMiddleArr[Math.floor(hasNoExactMiddleArr.length/2)])
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
for(indFour = 0; indFour < logMeOutFor.length; indFour++){
    console.log(logMeOutFor[indFour])
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
let indFourB = 0

while( indFourB < logMeOutWhile.length){
    console.log(logMeOutWhile[indFourB])
    indFourB++
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

for (let indFourC of logMeOutForOf) {
  console.log(indFourC);
}


// ## 5. Problem Five - Sum of array

// Given an array of numbers, write code that logs the sum of all the numbers

// ```js
let firstArrToSum = [1, 2, 3, 4, 5, 6]
// //  21
let sumFiveA = 0

for(let indFiveA = 0; indFiveA < firstArrToSum.length; indFiveA++){
    sumFiveA += firstArrToSum[indFiveA]
} console.log(sumFiveA)


let secondArrToSum = [1, 2, 3, 4, 5, -6]
// //  9
// ```

let sumFiveB = 0

for(let indFiveB = 0; indFiveB < secondArrToSum.length; indFiveB++){
    sumFiveB += secondArrToSum[indFiveB]
} console.log(sumFiveB)



// ## 6. Problem Six - Log odd/even numbers

// a. Given an array of numbers, write code that logs all the odd numbers

// ```js

let evenAndOddArr = [1,5,2,4,11,12,99,100]

for(let indSix =0; indSix < evenAndOddArr.length; indSix++){
    if(evenAndOddArr[indSix] % 2 === 1 ){
        console.log(evenAndOddArr[indSix])
    }
}

// // 1, 5, 11, 99
// ```

// b. Given an array of numbers, write code that logs the sum of all the even numbers

// ```js

let evenAndOddArrToSum = [1,5,2,3,11,4,6]

// // 12
// ```
let count = 0

for (let indSixB = 0; indSixB < evenAndOddArrToSum.length; indSixB++){
    if(evenAndOddArrToSum[indSixB] % 2 === 0){
        count += evenAndOddArrToSum[indSixB]
    }
} console.log(count)



// ## 7. Problem Seven - Smallest value

// Given an array of numbers, write code that logs the smallest value

// ```js
let arr = [4,3,7,29,40]

// // 3
// ```

let small = arr[0]

for (let i = 0; i < arr.length; i++){
    if(small > arr[i] ){
        small = arr[i]

    }
} console.log(small)

// ## 8. Problem Eight - Second smallest value

// Find the second smallest number in an Array of Ints

// ```js
// let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81,1, 41, 4, 23, 57, 41, 80, 83, 41, 69]


// // 4
// ```


// for (let i = 0; i < secondSmallestArr.length; i++){
    //     if(fSmall > secondSmallestArr[i] ){
        //         fSmall = secondSmallestArr[i]
        //          if(fSmall < copy){
            //         sSmall = copy
            //         console.log( fSmall + " 2nd Small " + sSmall)
            //             }
            //         }
            //         copy = fSmall;
            
            //     }
            //     // // sSmall = secondSmallestArr[i]
            //     // if (sSmall > fSmall && sSmall < secondSmallestArr[i]){
                //     // //    if(small < secondSmallestArr[i])
                //     //     console.log(sSmall+ " 2nd") 
                //     // }
                //      console.log(fSmall+ " "+ sSmall)
                
let sampleArr = [11,3,13,2,-1,-2,3,1]
let fSmall = Infinity
let sSmall = Infinity
                
for (let i = 0; i < sampleArr.length; i++){
    if(sampleArr[i] < sSmall && fSmall < sSmall){
        sSmall = sampleArr[i]
} else if ( sampleArr[i] < fSmall){
    fSmall = sampleArr[i]

}
}
console.log(fSmall + " " + sSmall)



// ## 9. Problem Nine - Duplicates

// Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.

// <details>
//   <summary>Hint</summary>
  
//   Make another array to store all the values you've seen so far.  When looking at a new value, see if your array [includes](https://www.w3schools.com/jsref/jsref_includes_array.asp#targetText=The%20includes()%20method%20determines,element%2C%20and%20false%20if%20not.) the value, and only add it to the `noDupeList` if it doesn't.
// </details>

// ```js
let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
let noDupeList = []



// // // noDupleList = [4, 2, 6, 9, 1]

// // ```

for(let listcount = 0; listcount < dupeFriendlyList.length; listcount++){
    if(noDupeList.includes(dupeFriendlyList[listcount]) === false ){
        noDupeList.push(dupeFriendlyList[listcount])
}
}
console.log(dupeFriendlyList +" and "+ noDupeList)