// 1. Log the last element of an array.

let arr = [1, 2, 3]

console.log(arr[arr.length-1]);


// 2. Change the first element of an array to the string "something else".

arr.unshift("something else")
console.log(arr);


// 3. Add "mango" to the end of a fruits array["strawberry", "banana"].

let fruits = ["strawberry", "bananas"]
fruits.push("mango")
console.log(fruits);

// 4. Add "blueberry" to the front of the same fruits array.
fruits.unshift("blueberry")
console.log(fruits);

// 5. Remove the last element of the fruits array.
fruits.pop()
// 6. console.log the length of the fruits array.
console.log(fruits.length);

// 7. Remove the first element of the fruits array.
fruits.shift()
// 8. Join all the elements in the fruits array with a '$'.
console.log(fruits.join('$'))


// 9. Given two arrays, write code that logs the larger array.If the arrays are the same length, log "They are the same size"

let arr1 = [1, 2, 3, 8]
let arr2 = [1, 5, 2, 4]

if (arr1.length === arr2.length) {
        console.log("they are the same size");
        
    } else if (arr1.length > arr2.length) {
        console.log(arr1);
        
    } else {
        console.log(arr2);
        
    }

// 10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.
let exactArr = [1, 5, 3]

// log 5

let noExactArr = [1, 4, 6, 9]

// log 4,6

if (arr.length % 2 === 0) {
    console.log(arr[arr.length / 2]);
    
} else if (arr.length % 2 !== 0) {
    console.log(arr[Math.floor(arr.length - 1 / 2)], arr[Math.round(arr.length - 1 / 2)]);
    
} 
    
// 11. Write code that logs every value in an array using a for loop

    
let logMeOutFor = ["I", "am", "a", "happy", "array"]

for (let i = 0; i < logMeOutFor.length; i++) {
    console.log(logMeOutFor[i]);
}

// 12. Write code that logs every value in an array using a while loop

let logMeOutWhile = ["I", "am", "a", "happy", "array"]
let i = 0
while (i < logMeOutWhile.length) {
    console.log(logMeOutWhile[i]);
    i++
}

// 13. Write code that logs every value in an array using a for/of loop

let logMeOutForOf = ["I", "am", "a", "happy", "array"]

for (const value of logMeOutForOf) {
    console.log(value);
}

// 14. Given an array of numbers, write code that logs the sum of all the numbers


let firstArr = [1, 2, 3, 4, 5, 6]


let secondArr = [1, 2, 3, 4, 5, -6]
//  9

function sumAll(arr){
    let output = 0
    for (let i = 0; i < arr.length; i++) {
        output += arr[i];   
    }
    return output
}

console.log(sumAll(secondArr));

// 15. Given an array of numbers, write code that logs all the odd numbers 

let evenAndOddArr = [1,5,2,4,11,12,99,100]
// 1, 5, 11, 99
let answer = []

for (let i = 0; i < evenAndOddArr.length; i++) {
   if (evenAndOddArr[i] % 2 !== 0) {
       answer.push(evenAndOddArr[i])
   }
    
}
console.log(answer);


// 16. Given an array of numbers, write code that logs the sum of all the even numbers

let evenAndOddArrToSum = [1,5,2,3,11,4,6]
// 12
let sum = 0

for (let i = 0; i < evenAndOddArrToSum.length; i++) {
    if(evenAndOddArrToSum[i] % 2 === 0) {
        sum += evenAndOddArrToSum[i]
    }
}
console.log(sum);
