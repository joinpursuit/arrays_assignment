// 1. Log the last element of an array.
console.log('Number 1 : ')
let array1 = ['The Philosopher\'s Stone', 'The Chamber of Secrets', 'The Prizoner of Azkaban'];
console.log(array1[array1.length - 1]);
console.log('------------------------------------------------')

// 2. Change the first element of an array to the string "something else".
console.log('Number 2 : ')
let array2 = ['pizza', 'pasta', 'tacos', 'ramen', 'sushi'];
array2.splice(0,0, 'something else');
console.log(array2);
console.log('------------------------------------------------')

// 3. Add "mango" to the end of a fruits array ["strawberry", "banana"].
console.log('Number 3 : ')
let array3 = ['strawberry','banana'];
array3.push('mango');
console.log(array3);
console.log('------------------------------------------------')

// 4. Add "blueberry" to the front of the same fruits array.
console.log('Number 4 : ')
array3.unshift('blueberry');
console.log(array3);
console.log('------------------------------------------------')

//5. Remove the last element of the fruits array.
console.log('Number 5 : ')
array3.pop();
console.log(array3);
console.log('------------------------------------------------')

// 6. console.log the length of the fruits array.
console.log('Number 6 : ')
console.log(array3.length);
console.log('------------------------------------------------')

// 7. Remove the first element of the fruits array.
console.log('Number 7 : ')
array3.shift();
console.log(array3);
console.log('------------------------------------------------')

// 8. Join all the elements in the fruits array with a '$'.
console.log('Number 8 : ')
console.log(array3.join('$'));
console.log('------------------------------------------------')

// 9. Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"
console.log('Number 9 : ')
array4 = ['This', 'is', 'the', 'shorter', 'array'];
array5 = ['This', 'will', 'be', 'the', 'longer', 'array']
if(array4.length === array5.length) {
  console.log('They are the same size')
} else if (array4.length > array5.length) {
  console.log(array4)
} else if (array4.length < array5.length) {
  console.log(array5)
};
console.log('------------------------------------------------')

//10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.
console.log('Number 10 : ')
array6 = ['1', '2', '7', '4', '5', '6'];
let middleIndex = (Math.floor(array6.length / 2));
if ((array6.length % 2) === 0) {
console.log(array6[middleIndex - 1] + ' and ' + array6[middleIndex])
} else if ((array6.length % 2) === 1) {
  console.log(array6[middleIndex])
};
console.log('------------------------------------------------')

//11. Write code that logs every value in an array using a for loop
console.log('Number 11 : ')
array7 = ['this', 'array', 'will', 'work']

for (let i = 0; i < array7.length; i ++) {
  console.log(array7[i])
};
console.log('------------------------------------------------')

//12. Write code that logs every value in an array using a while loop
console.log('Number 12 : ')
array8 = ['this', 'array', 'will', 'also', 'work'];
let x = 0
while(x < array8.length) {
  console.log(array8[x])
  x ++
};
console.log('------------------------------------------------')
// 13. Write code that logs every value in an array using a for/of loop
console.log('Number 13 : ')

let array9 = [5, 15, 25, 35]
for (let value of array9) {
  value += 0
  console.log(value)
};
console.log('------------------------------------------------')

// 14. Given an array of numbers, write code that logs the sum of all the numbers
console.log('Number 14 : ')
let array10 = [10, 20, 30, 40, 50]
let sumOfArray = 0
for(y = 0; y < array10.length; y ++){
  sumOfArray += array10[y]
} console.log('Your sum is ' + sumOfArray)

// let sum = array10.reduce((total, amount) => total + amount);
// console.log(sum)
// Can you please go over reduce function during class?^^^^^^
console.log('------------------------------------------------')
console.log('Number 15 : ')
//15. Given an array of numbers, write code that logs all the odd numbers
let array11 = [1, 2, 3, 4 ,5, 6 ,7, 8, 9 , 10];
for(let z = 0; z < array11.length; z ++) {
  if((array11[z] % 2) === 1) {
    console.log(array11[z])
  }
}
console.log('------------------------------------------------')

// 16. Given an array of numbers, write code that logs the sum of all the even numbers
console.log('Number 16 : ')
let array12 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for(let a = 0; a < array12.length; a ++) {
  if((array12[a] % 2) ===0) {
    console.log(array12[a])
  }
}
console.log('------------------------------------------------')
