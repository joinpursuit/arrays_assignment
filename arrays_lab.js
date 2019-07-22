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
    ;
    
}