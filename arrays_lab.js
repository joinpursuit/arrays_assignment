//##Exercises

// 1. Log the last element of an array.
let dessert = ['cake', 'pie', 'ice cream', 'flan']
console.log(dessert[dessert.length - 1]);

// 2. Change the first element of an array to the string "something else".
let arr = ['hi', 'bye', 'yes', 'no', 'maybe']
arr.splice(0, 1, 'something else');
console.log(arr);

// 3. Add "mango" to the end of a fruits array ["strawberry", "banana"].
let fruits = ['strawberry', 'banana']
fruits.push('mango');
console.log(fruits);


// 4. Add "blueberry" to the front of the same fruits array.
fruits.unshift('blueberry');
console.log(fruits);

// 5. Remove the last element of the fruits array.
fruits.pop()
console.log(fruits);

// 6. console.log the length of the fruits array.
console.log(fruits.length);

// 7. Remove the first element of the fruits array.
fruits.shift();
console.log(fruits);

// 8. Join all the elements in the fruits array with a '$'.
console.log(fruits.join('$'));

// 9. Given two arrays, write code that logs the larger array.
// If the arrays are the same length, log "They are the same size".
let firstArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let secondArr = [1, 2, 3, 4, 5, 6]

if (firstArr.length > secondArr.length){
  console.log(firstArr)
} else if (secondArr.length > firstArr.length){
  console.log(secondArr)
} else {
  console.log("They are the same size.")
}

// 10. Given an array, log its middle element.
// If the middle of the array is between two elements, log both of them.
let arr1 = ["first", "second", "third", "fourth"]
let middleIndex = arr1[Math.floor(arr1.length/ 2)]
let middleIndex2 = arr1[Math.floor(arr1.length/ 2) -1]

if((arr1.length % 2) === 0){
  console.log(middleIndex2 + ' ' + middleIndex)
} else if ((arr1.length % 2) === 1){
  console.log (middleIndex)
}

//11. Write code that logs every value in an array using a for loop
let colors = ['blue', 'pink', 'orange', 'yellow']

for (let i = 0; i < colors.length; i++){
  console.log(colors[i])
}

//12. Write code that logs every value in an array using a while loop
let bev = ['water', 'juice', 'milk']
let i = 0
while (i < bev.length){
  console.log(bev[i]);
  i++
}

//13. Write code that logs every value in an array using a for/of loop
let arr2 = ['10', '20', '30', '40']

for (let value of arr2){
  value += 1;
  console.log(value)
}

//14. Given an array of numbers, write code that logs the sum of all the numbers
let arr3 = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < arr3.length; i++){
  sum += arr3[i];
}
 console.log('Your sum is ' + sum )


//15. Given an array of numbers, write code that logs all the odd numbers
let arr4 = [10, 11, 12, 13, 14, 15]
for (let i = 0; i < arr4.length; i++){
  if (arr4[i] % 2 !== 0) {
    console.log(arr4[i])
  }
}


//16. Given an array of numbers, write code that logs the sum of all the even numbers
let arr5 = [10, 11, 12, 13, 14, 15]
for (let i = 0; i < arr4.length; i++){
  if (arr4[i] % 2 === 0) {
    console.log(arr5[i])
  }
} 
