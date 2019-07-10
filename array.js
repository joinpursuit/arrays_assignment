// 1. Log the last element of an array.

let firstQ = ["q1", "q2", "q3"];
console.log(firstQ[firstQ.length-1]);

// 2. Change the first element of an array to the string "something else".
firstQ.unshift("something else");
console.log(firstQ);

// 3. Add "mango" to the end of a fruits array ["strawberry", "banana"].
let fruits = ["strawberry", "banana"];
fruits.push("mango");
console.log(fruits);

// 4. Add "blueberry" to the front of the same fruits array.
fruits.unshift("blueberry");
console.log(fruits);

// 5. Remove the last element of the fruits array.
fruits.pop();
console.log(fruits);

// 6. console.log the length of the fruits array.
console.log(fruits.length);

// 7. Remove the first element of the fruits array.
fruits.shift();
console.log(fruits);

// 8. Join all the elements in the fruits array with a '$'.
// fruits.join("s")
console.log(fruits.join("$"));
//

// 9. Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"
//
// ```js
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]
//
// // log [1,5,2,4]
// ```

let firstArr = [1,2,3,6]
let secondArr = [1,5,2,4]

if (firstArr.length > secondArr.length){
  console.log(`(firstArr)${firstArr}`);
}else if
  (firstArr.length < secondArr.length){
  console.log(`(secondArr)${secondArr}`);
}else {
  console.log("they are the same sizes");
}


// 10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.
// ```js
// let hasExactMiddleArr = [1,5,3]
// // log 5
// let hasNoExactMiddleArr = [1,4,6,9]
// // log 4,6
// ```

// let hasExactMiddleArr = [1,5,3,9,5]

// 11. Write code that logs every value in an array using a for loop
// ```js

let logMeOutFor = ["I", "am", "a", "happy", "array", "for"]

for(i = 0; i <= logMeOutFor.length-1; i++)
    console.log(logMeOutFor[i]);

// 12. Write code that logs every value in an array using a while loop
//
// ```js

let logMeOutWhile = ["I", "am", "a", "happy", "array", "while"];
i = 0
while(i <= logMeOutWhile.length-1){
    console.log(logMeOutWhile[i]);
    i++
  }

// 13. Write code that logs every value in an array using a for/of loop

let logMeOutForOf = ["I", "am", "a", "happy", "array", "for/of"]

for (let x of logMeOutForOf) {
    console.log(x);
  }

// 14. Given an array of numbers, write code that logs the sum of all the numbers

let firstArrToSum = [1, 2, 3, 4, 5, 6]
  //  21
let secondArrToSum = [1, 2, 3, 4, 5, -6]
  //  9
let sum1 = 0
let sum2 =0

for (let y of firstArrToSum){
  (sum1 += y);
}
console.log(sum1);

for (let b of secondArrToSum){
  sum2 += b
}
console.log(sum2);

// 15. Given an array of numbers, write code that logs all the odd numbers

let evenAndOddArr = [1,5,2,4,11,12,99,100]

for(let x of evenAndOddArr){
  if(x % 2 !==  0){
    console.log(`${x} is odd`);
  }
}
// 1, 5, 11, 99

// 16. Given an array of numbers, write code that logs the sum of all the even numbers
let evenAndOddArrToSum = [1,5,2,3,11,4,6]
let total = 0

for(let c of evenAndOddArrToSum){
   if( c % 2 === 0){
     console.log(`${c} is even`);
      total += c
   }
}
  console.log(total);
https://github.com/SavitaMadray/arrays_assignment.git
