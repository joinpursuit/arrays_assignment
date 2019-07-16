//Log the last element of an array but with functions
console.log('');
console.log('Excercise Test');
console.log('');

let arr = [1, 2, 3, 4];

const logLastArr = (array) => {
  return array[array.length - 1];
}

console.log(logLastArr(arr));

//Review the Arrays labs and wrap all the answers in functions

//1. Log the last element of an array.
console.log('');
console.log('Question 1');
console.log('');

let myArray = ['Ice', 'Water', 'Bucket', 'Cup'];

const logLastArr2 = (array) => {
  return array[array.length - 1];
}

console.log(logLastArr(myArray));

//2. Change the first element of an array to the string "something else".
console.log('');
console.log('Question 2');
console.log('');

let myArray2 = ['Ice', 'Water', 'Bucket', 'Cup'];

console.log('Before');
console.log(myArray2);

const changeFirstIndex = (array) => {
  array.splice(0, 1, 'Something Else');
  return array;
}

console.log('After');
console.log(changeFirstIndex(myArray2));
console.log(myArray2);


//3. Add "mango" to the end of a fruits array ["strawberry", "banana"].
console.log('');
console.log('Question 3');
console.log('');

let myFruits = ['Strawberry', 'Banana'];

console.log('Before');
console.log(myFruits);

const addMangosAtEnd = (array) => {
    array.push('Mango');
    return array;
}

console.log('After');
console.log(addMangosAtEnd(myFruits));

//4. Add "blueberry" to the front of the same fruits array.
console.log('');
console.log('Question 4');
console.log('');

console.log('Before');
console.log(myFruits);

const addBlueberryAtStart = (array) => {
  array.unshift('Blueberry');
  return array;
}

console.log('After');
console.log(addBlueberryAtStart(myFruits));

//5. Remove the last element of the fruits array.
console.log('');
console.log('Question 5');
console.log('');

console.log('Before');
console.log(myFruits);

const removeLastIndex = (array) => {
  array.pop();
  return array;
}

console.log('After');
console.log(removeLastIndex(myFruits));

//6. console.log the length of the fruits array.
console.log('');
console.log('Question 6');
console.log('');

const findArrayLength = (array) => {
  return 'Length of myFruits array is ' + myFruits.length + '.';
}

console.log(findArrayLength(myFruits));

//7. Remove the first element of the fruits array.
console.log('');
console.log('Question 7');
console.log('');

console.log('Before');
console.log(myFruits);

const removeFirstIndex = (array) => {
  array.shift();
  return array;
}

console.log('After');
console.log(removeFirstIndex(myFruits));

//8. Join all the elements in the fruits array with a '$'.
console.log('');
console.log('Question 8');
console.log('');

const addToArrayElements = (array) => {
  return array.join(' $ ');
}

console.log(addToArrayElements(myFruits));

//9. Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"
console.log('');
console.log('Question 9');
console.log('');

let firstArr = [1, 2, 3];
let secondArr = [1, 5, 2];

const findBiggerArray = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    return 'They are the same size';
  } else if (arr1.length > arr2.length) {
    return arr1;
  } else {
    return arr2;
  }
}

console.log(findBiggerArray(firstArr, secondArr));

//10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.
console.log('');
console.log('Question 10');
console.log('');

let hasExactMiddleArr = [1, 5, 3];
let hasNoExactMiddleArr = [1, 4, 6, 9];

const logMiddleElement = (array) => {
  let hasMiddle = Math.floor(array.length / 2);
  let hasMiddle2 = Math.ceil(array.length / 2);
  let hasNoMiddle = (array.length / 2);

  if (array.length % 2 === 0) {
    return array[hasNoMiddle - 1] + ' And ' + array[hasNoMiddle];
  } else {
    return array[hasMiddle];
  }
}

console.log(logMiddleElement(hasExactMiddleArr));
//write a function called isEven
//take a number and return whether is even or odd
/*
function evenOrOddES5(num) {
  return num % 2 === 0;
}

console.log('Is 6 even? ' + evenOrOddES5(6));

const evenOrOddES6 = (num) => {
  return num % 2 === 0;
}

console.log('Is 7 even? ' + evenOrOddES6(7));
*/
