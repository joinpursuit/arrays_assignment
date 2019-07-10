// // 1. Log the last element of an array.
// let flowers = ['daisy', 'rose', 'daffodil']
// console.log(flowers[0])


// // 2. Change the first element of an array to "something else".
// let flowers = ['daisy', 'rose', 'daffodil']
// let newFlow = flowers.splice(0, 1, 'tulip' )
// console.log(flowers)


// // 3. Add "mango" to the end fruits array ["strawberry", "bannana"].
// let fruits = ['strawberry', 'bannana']
// fruits[2] = 'mango'
// console.log(fruits)


// // 4. Add "blueberry" to the front of the same fruits array.
// let fruits = ['strawberry', 'bannana']
// fruits[2] = 'mango'
// // console.log(fruits)
// fruits.unshift('blueberry')
// console.log(fruits)


// // 5. Remove the last element of the fruits array.
// let fruits = ['strawberry', 'bannana']
// fruits[2] = 'mango'
// // console.log(fruits)
// fruits.unshift('blueberry')
// // console.log(fruits)
// fruits.pop()
// console.log(fruits)


// // 6. console.log the length of the fruits array.
// let fruits = ['strawberry', 'bannana']
// fruits[2] = 'mango'
// // console.log(fruits)
// fruits.unshift('blueberry')
// // console.log(fruits)
// fruits.pop()
// console.log(fruits.length)


// //7. Remove the first element of the fruits array.
// let fruits = ['strawberry', 'bannana']
// fruits[2] = 'mango'
// // console.log(fruits)
// fruits.unshift('blueberry')
// // console.log(fruits)
// fruits.pop()
// // console.log(fruits)
// fruits.shift()
// console.log(fruits)


// //8. Join all the elements in the fruits array with a '$'.
// let fruits = ['strawberry', 'bannana']
// fruits[2] = 'mango'
// // console.log(fruits)
// fruits.unshift('blueberry')
// // console.log(fruits)
// fruits.pop()
// // console.log(fruits)
// fruits.shift()
// // console.log(fruits)
// let dollaFruits = fruits.join('$')
// console.log(dollaFruits)


// //9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.
// let arrZodiac1 = ['scorpio', 'leo', 'capricorn', 'cancer']
// let arrZodiac2 = ['virgo', 'leo', 'libra', 'scorpio', 'aries']
//
// if (arrZodiac1.length > arrZodiac2.length) {
//   console.log(arrZodiac1)
// } else if (arrZodiac1.length < arrZodiac2.length) {
//   console.log(arrZodiac2)
// } else {
//   console.log('They are the same')
// }


// // 10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.
// let arrAnima = ['elephant', 'panther', 'giraffe', 'lion']
//
// for (let i = 0; i < arrAnima.length; i++) {
//   let middleNumber = Math.floor(arrAnima.length / 2)
//   if(arrAnima.length % 2 === 0) {
//     console.log(arrAnima[middleNumber], arrAnima[middleNumber - 1])
//     break;
//   } else {
//     console.log(arrAnima[middleNumber])
//     break;
//   }
// }



// // 11. Write code that logs every value in an array using a for loop
// let logMeOutFor = ['I', 'am', 'a', 'happy', 'camper']
//
//   for (let i = 0; i < logMeOutFor.length; i++) {
//     let logResult = logMeOutFor[i]
//     console.log(logResult)
//   }


////12. Write code that logs every value in an array using a while loop
// let logMeOutFor = ['I', 'am', 'a', 'happy', 'camper']
// let i = 0
// while (i < logMeOutFor.length) {
//   let logResult = logMeOutFor[i]
//   console.log(logResult)
//   i++
// }


// //13. Write code that logs every value in an array using a for/of loop
// let logMeOutFor = ['I', 'am', 'a', 'happy', 'camper']
//
// for (let i = 0; i < logMeOutFor.length; i++) {
//   if ( logResult = logMeOutFor[i]) {
//     console.log(logResult)
//   }
// }



// let nums = [1, 2, 3, 4, 5, 6]
// let sumNum = 0
//
// for(let i = 0; i < nums.length; i++) {
//   sumNum += nums[i]
// }
// console.log(sumNum);


// let nums2 = [1, 2, 3, 4, 5, -6]
// let sumNum2 = 0
//
// for (let i = 0; i < nums2.length; i++) {
//   sumNum2 += nums2[i]
// }
// console.log(sumNum2)


// //15. Given an array of numbers, write code that logs all the odd numbers
// let evenAndOddArr = [1,5,2,4,11,12,99,100]
//
// for (let i = 0; i < evenAndOddArr.length; i++) {
//   let oddArr = evenAndOddArr[i]
//   if (oddArr % 2 !== 0) {
//   console.log(oddArr)
// }
// }


// 16. Given an array of numbers, write code that logs the sum of all the even numbers
let evenAndOddArrToSum = [1,5,2,3,11,4,6]
let sum = 0

for (let i = 0; i < evenAndOddArrToSum.length; i++) {

  if (evenAndOddArrToSum[i] % 2 === 0) {

  sum += evenAndOddArrToSum[i]

}
}
console.log(sum)

//////OFFICE HOURS WORK ******DO NOT CHECK*************
// let sumEvenNums = 0
//
// for (let i = 0; i < evenAndOddArrToSum.length; i++) {
//   let evenArr = []
//   if (evenArr % 2 === 0) {
// }
//   result.push(arr[i])
// }
// console.log(result)
//
//
// for (let i = 0; i < evenAndOddArrToSum.length; i++) {
//   if (evenAndOddArrToSum[i] % 2 === 0) {
//     console.log()
// }
// }





// //17. Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.
// let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// let noDupeList = []
//
// for (i = 0; i < dupeFriendlyList.length; i++) {
//   noDupeList[dupeFriendlyList[i]] = 0
// }

//
//
//
// //19. Given an array of strings, find the the string with the most "a"s in it.
//
// let mostAStrings = ["apes", "abba", "apple"]
//
// for (i = 0; i < mostAStrings.length; i++) {
//   if ()
// }
//
//
//
//
// //20. Find the second smallest number in an Array of Ints
//
//
// let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69];
// let min = Infinity
// let secondMin = Infinity
//
// for (let i= 0; i< secondSmallestArr.length; i++) {
//     if (secondSmallestArr[i]< min) {
//         secondMin = min;
//         min = secondSmallestArr[i];
//     } else if (secondSmallestArr[i]< secondMin) {
//         secondMin = secondSmallestArr[i];
//     }
// }
//
// // console.log('Smallest number: ' + min);
// console.log('Second smallest number: ' + secondMin);
