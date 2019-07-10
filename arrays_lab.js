// 1. Log the last element of an array.
let array = [1, 2, 3]
console.log(array[array.length-1])

// 2. Change the first element of an array to the string "something else".
array[0] = 'something else'
console.log(array)

// 3. Add "mango" to the end of a fruits array ["strawberry", "banana"].
fruits = ['strawberry', 'banana']
console.log(fruits)
fruits.push('mango')
console.log(fruits)

// 4. Add "blueberry" to the front of the same fruits array.
fruits.unshift('blueberry')
console.log(fruits)

// 5. Remove the last element of the fruits array.
fruits.pop()
console.log(fruits)

// 6. console.log the length of the fruits array.
console.log(fruits.length)

// 7. Remove the first element of the fruits array.
fruits.shift()
console.log(fruits)

// 8. Join all the elements in the fruits array with a '$'.
console.log(fruits.join('$'))

// 9. Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"
array1 = [1,2,3,4,5]
array2 = [1,2,3,4,5,6]

if (array1.length > array2.length) {
  console.log(array1)
} else if (array1.length === array2.length) {
  console.log('They are the same size')
} else {
  console.log(array2)
}

// 10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.
array3 = [1,2,3,4,5,6,7,8,9,10]
if (array3.length % 2 === 1) {
  console.log(array3[Math.floor(array3.length / 2)])
} else {
  console.log(array3[(array3.length / 2) - 1] + ',' + array3[Math.ceil(array3.length / 2)])
}

// 11. Write code that logs every value in an array using a for loop
array4 = ['I','am', 'an', 'array']
for (let i = 0; i < array4.length ; i++) {
  console.log(array4[i])
}

// 12. Write code that logs every value in an array using a while loop
let x = 0
while (x < array4.length) {
  console.log(array4[x])
  x++
}

// 13. Write code that logs every value in an array using a for/of loop
for (let a of array4) {
  console.log(a)
}

// 14. Given an array of numbers, write code that logs the sum of all the numbers
array5 = [1, 20, 19, -10]
let result = 0
for (let b of array5) {
  result = result + b
}
console.log(result)

// 15. Given an array of numbers, write code that logs all the odd numbers
odds = []
for (let c of array5) {
  if (c % 2 === 1) {
    odds.push(c)
  }
}
console.log(odds.join(', '))

// 16. Given an array of numbers, write code that logs the sum of all the even numbers
let sumOfAllEvens = 0
for (let d of array5) {
  if (d % 2 === 0) {
    sumOfAllEvens = sumOfAllEvens + d
  }
}
console.log(sumOfAllEvens)

// 17. Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.
dupeFriendlyList = [4,5,5,2,4,6,6,4]
noDupeList = []
for (let d of dupeFriendlyList) {
  if (noDupeList.includes(d) === false) {
  noDupeList.push(d)
  }
}
console.log(noDupeList)

// 18. Make an array that contains all elements that appear exactly once in someRepeatsAgain
someRepeatsAgain = [25,11,30,31,50,28,4,37,13,20,24,38,28,14,44,33,7,43,39,35,36,42,1,40,7,14,23,46,21,39,11,42,12,38,41,48,20,23,29,24,50,41,38,23,11,30,50,13,13,16,10,8,3,43,10,20,28,39,24,36,21,13,40,25,37,39,31,4,46,20,38,2,7,11,11,41,45,9,49,31,38,23,41,16,49,29,14,6,6,11,5,39,13,17,43,1,1,15,25]
noRepeats = []
for (let e of someRepeatsAgain) {
  rest = someRepeatsAgain.slice(someRepeatsAgain.indexOf(e) + 1)
  if (rest.includes(e) === false) {
  noRepeats.push(e)
  }
}
console.log(noRepeats)
