// # Array Exercises

// 1. Log the last element of an array.
let jewels = ["pearl," ,"ruby", "garnet", "diamond"]
  console.log(jewels[jewels.length-1])
// // console.log('----------------------------------------)
// // //2. Change the first element of an array to "something else".
// let jewels = ["pearl","ruby", "garnet", "diamond"]
jewels.shift()
console.log(jewels)

jewels.unshift("something else")
console.log(jewels)
//
// console.log("----------------------------------------------------------")

// //More notes:
// array.slice(start, end)
// Parameter	Description
// start	Optional. An integer that specifies where to start the selection
// (The first element has an index of 0). Use negative numbers to select
// from the end of an array. If omitted, it acts like "0"
// end	Optional. An integer that specifies where to end the selection.
// If omitted, all elements from the start position and to the end of the array will be selected. Use negative numbers to select from the end of an array
//
//
// //no The splice() method adds/removes items to/from an array,
// //and returns the removed item(s).Like below:
//
// //var fruits = ["Banana", "Orange", "Apple", "Mango"];
// //fruits.splice(2, 0, "Lemon", "Kiwi");
//
// //Note: This method changes the original array.
//
// //At position 2, add the new items, and remove 1 item:
// //var fruits = ["Banana", "Orange", "Apple", "Mango"];
// //fruits.splice(2, 1, "Lemon", "Kiwi");
// //At position 2, add the new items, and remove 1 item:
// //var fruits = ["Banana", "Orange", "Apple", "Mango"];
// //fruits.splice(2, 1, "Lemon", "Kiwi");
//console.log("_____________________________________________________________")
// //3. Add "mango" to the end fruits array ["strawberry", "banana"].
let fruits = ["strawberry", "banana"]
fruits.push("mango")
console.log(fruits)

//console.log("_____________________________________________________________")
// //4. Add "blueberry" to the front of the same fruits array.
fruits.unshift("blueberry")
console.log(fruits)
//console.log("_____________________________________________________________")
// //5. Remove the last element of the fruits array.
fruits.pop()
console.log(fruits)
//console.log("_____________________________________________________________")

// //6. console.log the length of the fruits array.
console.log(fruits.length)

//console.log("_____________________________________________________________")
// //7. Remove the first element of the fruits array.

fruits.shift()
console.log(fruits)
//console.log("_____________________________________________________________")
// //8. Join all the elements in the fruits array with a '$'.

console.log(fruits.join(" $ "))
//console.log("_____________________________________________________________")

//9. Given two arrays, write code that logs the larger array.
//If the arrays are the same length, log "They are the same size"


let firstArr = [1, 2, 3];
let secondArr = [1, 5, 2, 4];
if (firstArr.length > secondArr.length) {
  console.log(firstArr);
} else if (firstArr.length < secondArr.length){
  console.log(secondArr);
} else {
  console.log("They are the same size")
}

//console.log(----------------------------------------------------------------)
//10)
//Given an array, log its middle element.
//If the middle of the array is between two elements, log both of them.

//let hasExactMiddleArr = [1,5,3] -// log 5

//let hasNoExactMiddleArr = [1,4,6,9]-// log 4,6

let numArray = [2,3,4,5,6];
let midArr = Math.floor(numArray.length -1 / 2);
if (midArr % 2 === 0) {
  console.log(midArr)
  //result.push (i)
}
//console.log(------------------------------------------------------------------)
//11. Write code that logs every value in an array using a for loop

let logMeOutFor = ["I", "am", "a", "happy", "array"]
for (let i = 0; i<logMeOutFor.length; i++){
  console.log(logMeOutFor[i]);
}


//console.log(------------------------------------------------------------------)
//12. Write code that logs every value in an array using a while loop//
//during a condition is correct do this . While something is something do this.
//There is no i in while loop
let logMeOutFor = ["I", "am", "a", "happy", "array"]
let num = 0
while (num <logMeOutFor.length){
console.log(logMeOutFor[num])
num++;
}

//console.log(------------------------------------------------------------------)

//13. Write code that logs every value in an array using a for/of loop
//for of goes though every item that is inside of the array

let logMeOutFor = ["I", "am", "a", "happy", "array"]
for (let item of logMeOutFor) }
  console.log(item);
{


//console.log(------------------------------------------------------------------)

// //14. Given an array of numbers, write code that logs the sum of all the numbers
//
let total=0
let sumArray =[1, 2, 3, 4, 5, 6];
for (let i = 0; i < sumArray.length; i++){
  console.log("total: ", total)
  console.log("array value", sumArray[i])
      total+= sumArray[i]
}
console.log(total)

//
//
//
// // let sumArray = [1,2,3,4,5,6];
// // for(let i =0, sum = 0; i<sumArray.length; sum +=sumArray[i++];
// // //intializer, condition and increment
// //
// // maybe :
// // var arr = [1,2,3,4];
// // var total=0;
// // for(var i in arr) { total += arr[i]; }
// //
// //
//
// //console.log(----------------------------------------------------------------)
// //15. Given an array of numbers, write code that logs all the odd numbers
//
let evenAndOddArr = [1,5,2,4,11,12,99,100]
for (let i=1; i>evenAndOddArr;i++) {
  if (evenAndOddArr %2 !== 0){
    console.log(i);
  }
}
//
//
// //console.log(--------------------------------------------------------------)
//
// //16. Given an array of numbers, write code that logs the sum of all the even numbers
//
//
let evenAndOddArr = [1,5,2,4,11,12,99,100]
for (let i=2; i>evenAndOddArr;i++) {
  if (evenAndOddArr %2 === 0){
  console.log(i);
 }
}
//I see that it asked for the sum

//Please note, code may have some issues as I did not have time to run all of them
// console.log (---------------------------------------------------------------)
//
// // Older questions below-use for reference or to study
// // //Old12. Write a `range` code block that takes two number variables: min and max.
//
//
// // The block will log an array with all the numbers, inclusive, between min and max.
// //
// // //Answer 150-153
// // //let range = [2,6];
// // range.sort();
// //or range.sortfunction(a,b){return a-b});-ascending order
// //range.sortfunction(a,b){return b-a}); -descending order
//
// //16. Given an array of numbers, write code that logs the sum of all the even numbers
//
// //let evenAndOddArrToSum = [1,5,2,3,11,4,6]
//
// //13. Write a `rangeWithStep` code block that takes three number variables: min, max and step.
// //The block will log an array with all the numbers, inclusive, between min and max, ,
// //going up in increments equal to step.
// //If no step value is provided, the increment will be 1.
//
// // let rangeWithStep =[4, 10, 7]
// // input step = "1"
// //
// // ```js
// // rangeWithStep(4, 10, 2)
// // // => [4, 6, 8, 10]
// // rangeWithStep(4, 10)
// // // => [4, 5, 6, 7, 8, 9, 10]
// // ```
// //
// // 14. Given an array of numbers, write code that logs the sum of all the numbers
// // let firstArrToSum = [1, 2, 3, 4, 5, 6];
// // for (var i =0, sum =0; i < array.length; sum += array [i ++];)
// //
// //
// // `
// // /Answer 136-138
// // // let sumArray = [2, 4, 6];
// // // for(var i =0, sum = 0; i<array.length; sum +=array[i++];
// // // //intializer, condition and increment
// // //
// // // maybe :
// // // var arr = [1,2,3,4];
// // // var total=0;
// // // for(var i in arr) { total += arr[i]; }
// // //``
// // / //11. Write a `sumArray` code block that takes as varaible array
// // // of numbers and logs the sum of all these numbers.
// // //
// // // //Answer 136-138
// // // let sumArray = [2, 4, 6];
// // // for(var i =0, sum = 0; i<array.length; sum +=array[i++];
// // // //intializer, condition and increment
// // //
// // // maybe :
// // // var arr = [1,2,3,4];
// // // var total=0;
// // // for(var i in arr) { total += arr[i]; }
// // //``
// //
// //
// // // //Old Question 14. Write a `doubleTrouble` code block that takes in a varialbe array of numbers.
// // // The block should log a new array that doubles every number from the original array.
// // Answer(s) on 174-180
// //
// // let doubleTrouble = ([1, 2, 3])
// // function MULTIPLY(i,2);
// //   return i * 2;
// //     or
// // let doubleTrouble = [1, 2, 3] *2
// //     console.log(i * 2)
// //
// //
// // //15. Write a code block that takes in two varaibles. A target, and an array.
// // //Console log the indicies (as an array) of the elements that add up to the target.
// // //Exactly two indicies must be logged.
// //
// // let target = 10
// // let array = [1, 2, 3, 4, 5, 10, 12]
// //
// // for()
// // let target = 30;
// // let array = [12, 18, 13, 10];
// //
// // let result = [];
// //
// // for(let i = 0; i < array.length; i++) {
// //   for (let q = i + 1; q < array.length; q++){
// //     if(array[i] + array[q] === target){
// //       result.push(i, q)
// //     }
// //   }
// // }
//  if(result.length === 0) {
//    console.log('no answer')
//  } else {
//    console.log(result)
//  }
//
//
// //Old12. Write a `range` code block that takes two number variables: min and max.


// The block will log an array with all the numbers, inclusive, between min and max.
//
// //Answer 150-153
// //let range = [2,6];
// range.sort();
//or range.sortfunction(a,b){return a-b});-ascending order
//range.sortfunction(a,b){return b-a}); -descending order

//16. Given an array of numbers, write code that logs the sum of all the even numbers

//let evenAndOddArrToSum = [1,5,2,3,11,4,6]
