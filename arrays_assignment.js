// // # Arrays Lab
// //
// // To complete this lab (as for most labs), do the following:
// //
// // 1. Fork this repo.
// // 2. Clone **your** forked repo.
// // 3. Create a file called `arrays_lab.js` inside your cloned repo.
// // 4. Copy the description of the exercise as a comment.
// // 5. Underneath the commented description write your code.
// // 6. Ensure your solutions work properly!
// // 7. Open PR against this repo.
// //
// // ___
// //
// // ## Exercises
// //
//
// let myArray = [1,2,3,4,5,6,7,8,9];
// // 1. Log the last element of an array.
// console.log(myArray.length);
//
// // 2. Change the first element of an array to the string "something else".
// myArray[0] = "something else";
// console.log(myArray[0]);
// // 3. Add "mango" to the end of a fruits array ["strawberry", "banana"].
// let fruitsArray = ["strawberry", "banana"];
// fruitsArray.push("mango");
// console.log(fruitsArray);
// // 4. Add "blueberry" to the front of the same fruits array.
// fruitsArray.unshift("blueberry");
// console.log(fruitsArray);
// // 5. Remove the last element of the fruits array.
// fruitsArray.pop();
// console.log(fruitsArray);
// // 6. console.log the length of the fruits array.
// console.log(fruitsArray.length);
// // 7. Remove the first element of the fruits array.
// fruitsArray.shift();
// console.log(fruitsArray);
// // 8. Join all the elements in the fruits array with a '$'.
// fruitslist = fruitsArray.join("$");
// console.log(fruitslist);
//
// //
// //
// // 9. Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"
// //
// // ```js
// // let firstArr = [1,2,3]
// // let secondArr = [1,5,2,4]
// //
// // // log [1,5,2,4]
// // ```
// let array1 = [1,2,3,4,5];
// let array2 = [1,2,4,5,6,7,8,9];
//
// let arr_length1 = array1.length;
// let arr_length2 = array2.length;
//
// arr_length1 > arr_length2 ? console.log(array1) : console.log(array2);

// 10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.
//
// ```js
// let hasExactMiddleArr = [1,5,3]
//
// // log 5
//
// let hasNoExactMiddleArr = [1,4,6,9]
//
// // log 4,6
//
// ```
// let hasExactMiddleArr = [1,2,3];
// let middle = hasExactMiddleArr.length/2;
// console.log(hasExactMiddleArr.length);
// console.log(middle);
// console.log(hasExactMiddleArr[Math.floor(middle)]);

 let hasNoExactMiddleArr = [1,4,6,9];
 let middle2 = hasNoExactMiddleArr.length/2;
 console.log(hasNoExactMiddleArr.length);
 console.log(middle2);
 console.log(hasNoExactMiddleArr[middle2]);
 console.log(hasNoExactMiddleArr[(middle2-1)]);


// 11. Write code that logs every value in an array using a for loop
//
// ```js
// let logMeOutFor = ["I", "am", "a", "happy", "array"]
//
// /* I
//   am
//   a
//   happy
//   array
// */
// ```
let logMeOutFor = ["I", "am", "a", "happy", "array"];
for (i = 0; i < logMeOutFor.length; i ++){
  console.log(logMeOutFor[i]);
}




// 12. Write code that logs every value in an array using a while loop
//
// ```js
// let logMeOutWhile = ["I", "am", "a", "happy", "array"]
//
// /* I
//   am
//   a
//   happy
//   array
// */
// ```
let x = 0;
while(x < logMeOutFor.length){
  console.log(logMeOutFor[x]);
  x ++;
}



//
//
// 13. Write code that logs every value in an array using a for/of loop
//
// ```js
// let logMeOutForOf = ["I", "am", "a", "happy", "array"]
//
// /* I
//   am
//   a
//   happy
//   array
// */
// ```
for (let value of logMeOutFor){
  console.log(value);
}


//
//
// 14. Given an array of numbers, write code that logs the sum of all the numbers
//
// ```js
// let firstArrToSum = [1, 2, 3, 4, 5, 6]
// //  21
//
// let secondArrToSum = [1, 2, 3, 4, 5, -6]
// //  9
// ```
let sum = 0; //initalize variable with empty value
let firstArrToSum = [1,2,3,4,5,6]; // create and array

for(y = 0; y < firstArrToSum.length; y ++){ // loop through array
  sum += firstArrToSum[y];// add contents of array to sum variable
}
console.log(sum); // console.log results

let result = 0;
let secondArrToSum = [1,2,3,4,5,-6];

for(yy = 0; yy < secondArrToSum.length; yy ++){ // loop through array
  result += secondArrToSum[yy];// add contents of array to sum variable
}
console.log(result); // console.log results



//
// 15. Given an array of numbers, write code that logs all the odd numbers
//
// ```js
//
// let evenAndOddArr = [1,5,2,4,11,12,99,100]
//
// // 1, 5, 11, 99
// ```
let evenAndOddArr = [1,5,2,4,11,12,99,100];

for (xy = 0; xy < evenAndOddArr.length; xy++){
if (evenAndOddArr[xy] % 2 !== 0){
  console.log(evenAndOddArr[xy]);
  }
}
// 16. Given an array of numbers, write code that logs the sum of all the even numbers
//
// ```js
//
// let evenAndOddArrToSum = [1,5,2,3,11,4,6]
//
// // 12
// ```
let evenAndOddArrToSum = [1,5,2,3,11,4,6];
let eSum = 0;

for (ii = 0; ii < evenAndOddArrToSum.length; ii++){
if (evenAndOddArrToSum[ii] % 2 === 0){
  eSum += evenAndOddArrToSum[ii];
  }
}
console.log(eSum);
// 17. Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.
//
// ```js
// let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// let noDupeList = []
//
// // noDupleList = [4, 2, 6, 9, 1]
//
// ```

let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1];
let noDupeList = [];

for(let i = 0; i < dupeFriendlyList.length; i++) {
    let duplicate = false;
    for(let j = 0; j < noDupeList.length; j++){
        if(noDupeList[j] === dupeFriendlyList[i]){
            duplicate = true;
        }

    }
    if(duplicate === false){
        noDupeList.push(dupeFriendlyList[i]);
    }

}
console.log(dupeFriendlyList);
console.log(noDupeList);

// 18. Make an array that contains all elements that appear exactly once in someRepeatsAgain
//
// ```js
// let someRepeatsAgain = [25,11,30,31,50,28,4,37,13,20,24,38,28,14,44,33,7,43,39,35,36,42,1,40,7,14,23,46,21,39,11,42,12,38,41,48,20,23,29,24,50,41,38,23,11,30,50,13,13,16,10,8,3,43,10,20,28,39,24,36,21,13,40,25,37,39,31,4,46,20,38,2,7,11,11,41,45,9,49,31,38,23,41,16,49,29,14,6,6,11,5,39,13,17,43,1,1,15,25]
//
// // [ 44,33,35,42,12,48,30,50,8,3,10,28,24,36,21,1000,40,37,4,46,20,2,7,45,9,31,38,23,41,16,49,29,14,6,11,5,39,13,17,43,1,15,25 ]
//
//
// ```

let someRepeatsAgain = [25,11,30,31,50,28,4,37,13,20,24,38,28,14,44,33,7,43,39,35,36,42,1,40,7,14,23,46,21,39,11,42,12,38,41,48,20,23,29,24,50,41,38,23,11,30,50,13,13,16,10,8,3,43,10,20,28,39,24,36,21,13,40,25,37,39,31,4,46,20,38,2,7,11,11,41,45,9,49,31,38,23,41,16,49,29,14,6,6,11,5,39,13,17,43,1,1,15,25];
let myResult = [];


for (i = 0; i < someRepeatsAgain.length; i ++){
  let outterNumber = someRepeatsAgain[i];
  let isARepeat = false;

  for (j = 0; j < someRepeatsAgain.length; j++){
    let innerNumber = someRepeatsAgain[j];

    if (i != j && innerNumber == outterNumber){
      isARepeat = true;
      break;
    }
  }

  if(!isARepeat){
    myResult.push(outterNumber);
  }



}
console.log(myResult);


// 19. Given an array of strings, find the the string with the most "a"s in it.
//
// ```js
// let mostAStrings = ["apes", "abba", "apple"]
//
// //"abba"
// ```
//
// //couldnt find a solution

// 20. Find the second smallest number in an Array of Ints
//
// ```js
// let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]
//
// // 4
// ```
//couldnt find a solution
