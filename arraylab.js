//Log the last element of an array.
myArr    = ['red', 'green', 'blue'];
console.log(myArr);

//change the first element of an arrays to "something else"
myArr[0] = 'something else';
console.log(myArr);

//add "mango" to the end fruits array
myFruits = ['strawberry', 'banana'];
myFruits.push('mango');
console.log(myFruits);

// Add "blueberry" to the front of the same fruits array.
myFruits.unshift('blueberry');
console.log(myFruits);

// 5. Remove the last element of the fruits array.
myFruits.pop()
console.log(myFruits);

// 6. console.log the length of the fruits array.
console.log(myFruits.length);

// 7. Remove the first element of the fruits array.
myFruits.shift()
console.log(myFruits);

// 8. Join all the elements in the fruits array with a '$'.
console.log(myFruits.join('$'));

// 9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.
// ```js
let mySarr = [1, 2, 3];
let myLarr = [1, 2, 3, 4, 5];

if(mySarr.length > myLarr.length) {
  longestArr = mySarr;
  console.log(longestArr);
}
else {
  longestArr = myLarr;
  console.log(myLarr);
}

//10. Write a `middleElement` code block that takes an array varialbe and logs the middle element of that array.
//If the array has an even number of elements, the function should log "Oops, there's no middle..."

let middleElement =  [1,2,3,4,5,6,7];

if (middleElement.length % 2 != 0) {

 middleElement = (middleElement.length / 2);

  console.log(middleElement);
}
else {
  console.log("Oops, there's no middle.");
}

//11. Write code that logs every value in an array using a for loop

arr11 = ['I', 'am', 'a', 'happy', 'array'];

for(let z = 0; z < arr11.length; z++){
console.log(arr11 [z])
}

//12. Write code that logs every value in an array using a while loop

arr12 = arr11
let uhh = 0
while(arr12.length >= uhh) {
  console.log(arr12[uhh]);
  uhh++;
}

//13. Write code that logs every value in an array using a for/of loop
let arr13 = arr11

for (let p of arr13) {
  console.log(p);
}

//14. Write a `sumArray` code block that takes as varaible array of numbers and logs the sum of all these numbers.

firstArrToSum = [1 , 2 , 3 , 4 , 5 , 6];
let sum = 0;

  for (s = 0; s < firstArrToSum.length; s++){
     sum += firstArrToSum[s];

}
    console.log('The sum is ' + sum);

//15. Given an array of numbers, write code that logs all the odd numbers

evenAndOddArr = [1,5,2,4,11,12,99,100]

for (y = 0; y < evenAndOddArr.length; y++) {
  if (evenAndOddArr[y] % 2 != 0){
  console.log(evenAndOddArr[y]);
}
}

//16. Given an array of numbers, write code that logs the sum of all the even numbers
let evenAndOddArrToSum = [1,5,2,3,11,4,6];
let sumeven = 0
for (l = 0; l < evenAndOddArrToSum.length; l++) {
  if (evenAndOddArrToSum[l] % 2 === 0){
    sumeven += evenAndOddArrToSum[l];
}
}
console.log('The sum of the even numbers is '+ sumeven);

//17. Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.

let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
let noDupeList = []


for(let i = 0; i < dupeFriendlyList.length; i++) {
    let truthy = false;
    for(let j = 0; j < noDupeList.length; j++){
        if(noDupeList[j] === dupeFriendlyList[i]){
            truthy = true;
        }

    }
    if(truthy === false){
        noDupeList.push(dupeFriendlyList[i]);
    }

}
