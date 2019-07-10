//1. Log the last element of an array.
let array = ["cat","dog","mouse"];
console.log(array[array.length-1])

//2. Change the first element of an array to the string "something else".
array[0] = "something else";

//3. Add "mango" to the end of a fruits array ["strawberry", "banana"].
let fruits = ["strawberry","banana"];
fruits.push("mango");

//4. Add "blueberry" to the front of the same fruits array.
fruits.unshift("blueberry");

//5. Remove the last element of the fruits array.
fruits.pop();

//6. console.log the length of the fruits array.
console.log(fruits.length);

//7. Remove the first element of the fruits array.
fruits.shift();

//8. Join all the elements in the fruits array with a '$'.
let f = fruits.join("$");
console.log(f);

//9. Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"


let firstArr = [1,2,3]
let secondArr = [1,5,2,4]

// log [1,5,2,4]

if(firstArr.length === secondArr.length){
  console.log("They are the same size");
}
else if(firstArr.length < secondArr.length){
  console.log(secondArr);
}else{
  console.log(firstArr);
}

//10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.

let arr = [1,5,3,9,8,0]

if (arr.length%2 === 1){
  console.log(arr[(arr.length-1)/2])
}
else{
  console.log(arr[(arr.length/2) - 1] + " " + arr[arr.length/2])
}

//11. Write code that logs every value in an array using a for loop


let logMeOutFor = ["I", "am", "a", "happy", "array"]

for(let i = 0; i < logMeOutFor.length; i++){
  console.log(logMeOutFor[i]);
}

//12. Write code that logs every value in an array using a while loop


let logMeOutWhile = ["I", "am", "a", "happy", "array"]

i = 0;
while(i < logMeOutWhile.length){
  console.log(logMeOutWhile[i])
  i++
}

//13. Write code that logs every value in an array using a for/of loop


let logMeOutForOf = ["I", "am", "a", "happy", "array"]

for(i of logMeOutForOf){
  console.log(i);
}

//14. Given an array of numbers, write code that logs the sum of all the numbers

arr = [1, 2, 3, 4, 5, -6]
//  9

let sum = 0;

for(i of arr){
  sum += i;
}
console.log(sum)

//15. Given an array of numbers, write code that logs all the odd numbers


let evenAndOddArr = [1,5,2,4,11,12,99,100]

// 1, 5, 11, 99

for(i of evenAndOddArr){
  if(i%2 === 1){
  console.log(i)}
}

//16. Given an array of numbers, write code that logs the sum of all the even numbers


sum = 0;
let evenAndOddArrToSum = [1,5,2,3,11,4,6]

// 12

for(i of evenAndOddArrToSum ){
  if(i%2 === 0){
    sum += i;
  }
}
console.log(sum);

//17. Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.


let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
let noDupeList = []

// noDupleList = [4, 2, 6, 9, 1]
for(i = 0;i < dupeFriendlyList;i++){
  if(noDupeList.includes(dupeFriendlyList[i])){

  }else{
    noDupeList.push(dupeFriendlyList[i]);
  }
}


console.log(noDupeList)

//19. Given an array of strings, find the the string with the most "a"s in it.


let mostAStrings = ["apes", "abba", "apple"]

//"abba"
let max = mostAStrings[0];
for(i = 0; i < mostAStrings.length;i++){
  mostAStrings[i]
}
console.log(max);
