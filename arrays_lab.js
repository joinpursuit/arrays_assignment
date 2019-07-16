// ///1. Log the last element of an array.

// let array = ['Lebron James', 'Anthony Davis', 'Alex Caruso', 'Danny Green', 'Demarcus Cousins'];


// console.log(array[array.length-1]);

function lastElementInArray(arr){
	return arr[arr.length - 1];
}

// //2. Change the first element of an array to the string "something else".

// array[0] = 'something else';

// console.log(array);

function somethingElse(arr){
	arr[0] = 'something else';
	return arr;
}

// //3. Add "mango" to the end of a fruits array ["strawberry", "banana"].

// let fruits = ["strawberry", "banana"];

// fruits.push('mango');
// console.log(fruits);

function mangoIsLast(arr) {
	arr.push('mango');
	return arr;
}

// // 4Add "blueberry" to the front of the same fruits array.

// fruits.unshift('blueberry');
// console.log(fruits);

function blueberryIsFirst(arr){
	arr.unshift('blueberry');
	return arr;
}

// //5. Remove the last element of the fruits array.
// fruits.pop();
// console.log(fruits);
const getRidOFLast = (arr) => {
	arr.pop();
	return arr;
}

// //6. console.log the length of the fruits array.
// console.log(fruits.length);

const getLength = (arr) => {
	return arr.length;
}

// //7. Remove the first element of the fruits array.

// fruits.shift();
// console.log(fruits);

const removeFirst = (arr) => {
	arr.shift();
	return arr;
}

// //8. Join all the elements in the fruits array with a '$'.
// let result = fruits.join("$")
// console.log(result);

const joiner = (arr) => {
	arr.join('$');
	return arr;
}

// //9. Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"

// let firstArr = [1,2,3,4,5,6];
// let secondArr = [1,5,2,4];

// if(firstArr > secondArr) {
// 	console.log(firstArr);
// }
// else{
// 	console.log(secondArr);
// }

const whichArrIsLarger = (arr1, arr2) => {
	if(arr1.length === arr2.length){
		return 'They are the same size';
	}
	if(arr1.length > arr2.length){
		return arr1 + ' is the larger array';
	}
	return arr2 + ' is the larger array'
}

// //10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.

// let randomArray = firstArr;

// if(randomArray.length % 2 === 1) {
// 	console.log(randomArray[randomArray.length / 2 - 0.5])
// }
// else{
// 	console.log(randomArray[randomArray.length/2 - 1] + ',' + randomArray[randomArray.length / 2]);
// }

// //11. Write code that logs every value in an array using a for loop

// let logMeOutFor = ["I", "am", "a", "happy", "array"];

// for(let i = 0; i < logMeOutFor.length; i++) {
// 	console.log(logMeOutFor[i]);
// }

// // 12. Write code that logs every value in an array using a while loop

// let counter = 0;

// while(counter < logMeOutFor.length) {
// 	console.log(logMeOutFor[counter]);
// 	counter++;
// }

// //13. Write code that logs every value in an array using a for/of loop

// for(let i of logMeOutFor) {
// 	console.log(i);
// };

// //14. Given an array of numbers, write code that logs the sum of all the numbers

// let firstArrToSum = [1, 2, 3, 4, 5, 6];
// let total = 0;

// for(let i = 0; i < firstArrToSum.length; i++) {
// 		total += firstArrToSum[i];
// }

// console.log(total);

// //15. Given an array of numbers, write code that logs all the odd numbers

// let evenAndOddArr = [1,5,2,4,11,12,99,100];

// for(let i = 0; i < evenAndOddArr.length; i++) {
// 	if(evenAndOddArr[i] % 2 === 1) {
// 		console.log(evenAndOddArr[i]);
// 	}
// }

// //16. Given an array of numbers, write code that logs the sum of all the even numbers

// let evenAndOddArrToSum = [1,5,2,3,11,4,6];
// let total2 =0;
// for(let i =0; i < evenAndOddArrToSum.length; i++){
// 	if(evenAndOddArrToSum[i] % 2 === 0){
// 		total2 += evenAndOddArrToSum[i];
// 	}
// }
// console.log(total2);


// //17. Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.


// let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1];
// let noDupeList = [];

// for(let i = 0; i < dupeFriendlyList.length; i++) {
// 	let truthy = false;
// 	for(let j = 0; j < noDupeList.length; j++){
// 		if(noDupeList[j] === dupeFriendlyList[i]){
// 			truthy = true;
// 		}

// 	}
// 	if(truthy === false){
// 		noDupeList.push(dupeFriendlyList[i]);
// 	}
	
// }
 
// console.log(noDupeList);

// // 18. Make an array that contains all elements that appear exactly once in someRepeatsAgain

// let someRepeatsAgain = [25,11,30,31,50,28,4,37,13,20,24,38,28,14,44,33,7,43,39,35,36,42,1,40,7,14,23,46,21,39,11,42,12,38,41,48,20,23,29,24,50,41,38,23,11,30,50,13,13,16,10,8,3,43,10,20,28,39,24,36,21,13,40,25,37,39,31,4,46,20,38,2,7,11,11,41,45,9,49,31,38,23,41,16,49,29,14,6,6,11,5,39,13,17,43,1,1,15,25];
// let noRepeats = [];
// for(let i = 0; i < someRepeatsAgain.length; i++) {
// 	let foundARepeat = false;
// 	for(let j = 0; j < noRepeats.length; j++) {
// 		if(someRepeatsAgain[i] === noRepeats[j]) {
// 			noRepeats.splice(j, 1);
// 			foundARepeat = true;
// 		}
// 	}
// 	if(!foundARepeat){
// 		noRepeats.push(someRepeatsAgain[i]);
// 	}
// }

// console.log(noRepeats);

// // 19. Given an array of strings, find the the string with the most "a"s in it.

// let mostAStrings = ["apes", "abba", "apple", 'aaalolola'];
// let mostA = [-1, -1];

// for(let i = 0; i < mostAStrings.length; i ++){
// 	let counter = 0;
// 	for(let j = 0; j < mostAStrings[i].length; j++){
// 		if(mostAStrings[i][j] === 'a'){
// 			counter++;
// 		}
// 	}
// 	if(counter > mostA[1]){
// 		mostA[0] = i;
// 		mostA[1] = counter;
// 	}
// }

// console.log(mostAStrings[mostA[0]] + ' has ' + mostA[1] + " a's");

// //20. Find the second smallest number in an Array of Ints

// let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69];

// let smallest = -1;
// let second = -10;

// if(secondSmallestArr[0] < secondSmallestArr[1]){
// 	smallest = secondSmallestArr[0];
// 	second = secondSmallestArr[1];
// }
// else{
// 	smallest = secondSmallestArr[1];
// 	second = secondSmallestArr[0];
// }
// for(let i = 2; i < secondSmallestArr.length; i++) {
// 	if(secondSmallestArr[i] < second){
// 		if(secondSmallestArr[i] < smallest ){
// 			second = smallest;
// 			smallest = secondSmallestArr[i];
// 		}
// 		else{
// 			second = secondSmallestArr[i];
// 		}
// 	}
// }

// console.log(second);

// //21 implementation of slice
// //
// function slicer(index1, index2, arr) {
// 	let newArray = [];
// 	for(let i = index1; i < index2; i++){
// 		newArray.push(arr[i]);
// 	}

// 	return newArray;
// }

// console.log(slicer(2, 6, secondSmallestArr));

// secondSmallestArr			





// let arr1 = [1,2,3];
// let arr2 =[11,12,13];

// let superArray = [];

// let firstCounter = 0;
// let secondCounter = 0;

// while(firstCounter < arr1.length && secondCounter < arr2.length){
// 	if(arr1[firstCounter] > arr1[secondCounter]){



















