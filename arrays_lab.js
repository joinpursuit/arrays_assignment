//Log the last element of an array.
let arr = ['This', 'is', 'a', 'lab']
console.log(arr[arr.length - 1]);

//Change the first element of an array to the string "something else".
arr.unshift('Something else')
console.log(arr);

//Add "mango" to the end of a fruits array ["strawberry", "banana"].
let fruits = ['Strawberry', 'Banana']
fruits.push('Mango')
console.log(fruits);

//Add "blueberry" to the front of the same fruits array.
fruits.unshift('Blueberry')
console.log(fruits);

//Remove the last element of the fruits array.
fruits.pop()
console.log(fruits);

//console.log the length of the fruits array.
console.log(fruits.length);

//Remove the first element of the fruits array.
fruits.shift()
console.log(fruits);

//Join all the elements in the fruits array with a '$'.
fruitString = fruits.join('$')
console.log(fruitString);

//Given two arrays, write code that logs the larger array.
//If the arrays are the same length, log "They are the same size"
let firstArr = [1,2,3]
let secondArr = [1,5,2,4]

if (firstArr.length > secondArr.length){
  console.log(firstArr);
}else if (firstArr.length === secondArr.length){
  console.log('They are the same size');
}else{
  console.log(secondArr);
}

//Given an array, log its middle element.
//If the middle of the array is between two elements, log both of them.
let hasExactMiddleArr = [1,5,3]
console.log(hasExactMiddleArr[Math.floor(hasExactMiddleArr.length /2 )]);

let hasNoExactMiddleArr = [1,4,6,9]
console.log(hasNoExactMiddleArr[hasNoExactMiddleArr.length / 2 -1])
console.log(hasNoExactMiddleArr[hasNoExactMiddleArr.length / 2])

//Write code that logs every value in an array using a for loop
let logMeOutFor = ["I", "am", "a", "happy", "array"]

for (let x = 0; x < logMeOutFor.length; x ++){
  console.log(logMeOutFor[x]);
}

//Write code that logs every value in an array using a while loop
logMeOutWhile = ["I", "am", "a", "happy", "array"]
let i = 0
while (i < logMeOutWhile.length){
  console.log(logMeOutWhile[i]);
  i ++
}

//Write code that logs every value in an array using a for/of loop
let logMeOutForOf = ["I", "am", "a", "happy", "array"]
for(const value of logMeOutForOf){
  console.log(value);
}

//Given an array of numbers, write code that logs the sum of all the numbers
let firstArrToSum = [1, 2, 3, 4, 5, 6]
let sum = 0
for (let y = 0; y < firstArrToSum.length; y++){
  sum += firstArrToSum[y]
}
console.log(sum);

let secondArrToSum = [1, 2, 3, 4, 5, -6]
let secondSum = 0
for (let k = 0; k < secondArrToSum.length; k++){
  secondSum += secondArrToSum[k]
}
console.log(secondSum);

//Given an array of numbers, write code that logs all the odd numbers
let evenAndOddArr = [1,5,2,4,11,12,99,100]
for (let a = 0; a < evenAndOddArr.length; a ++){
  if(evenAndOddArr[a] % 2 !== 0){
    console.log(evenAndOddArr[a]);
  }
}

//Given an array of numbers,
//write code that logs the sum of all the even numbers
let evenAndOddArrToSum = [1,5,2,3,11,4,6]
let thirdSum = 0
for (let q = 0; q < evenAndOddArrToSum.length; q ++){
  if(evenAndOddArrToSum[q] % 2 === 0){
    thirdSum += evenAndOddArrToSum[q]
  }
}
console.log(thirdSum);

//
