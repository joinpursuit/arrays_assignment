// //Problem #1
// let fruits = ['strawberry', 'banana']
// fruits.unshift('mango')
// // console.log(fruits)
// fruits.unshift('blueberry')
// // console.log(fruits)
// fruits.pop()
// // console.log(fruits)
// fruits.shift()
// // console.log(fruits)
// console.log(fruits.join('$'))

//Problem #2
// let firstArr = [1,2,3,4];
// let secondArr = [1,5,2,4];
// if(firstArr.length > secondArr.length){
//     console.log(firstArr)
// }else if(secondArr.length > firstArr.length){
//     console.log(secondArr)
// }else if(firstArr.length === secondArr.length){
//     console.log("They are the same size")
// }

//Problem #3
// let hasExactMiddleArr = [1,5,3,4,6,7]
// let middle = Math.floor(hasExactMiddleArr.length/2)
// console.log(middle) //showing the middile #
// if (hasExactMiddleArr.length%2===0){
//     console.log(hasExactMiddleArr.slice(middle-1, middle+1))
// }
//     else {
//         console.log(hasExactMiddleArr[middle])
// }

//Problem 4
// let logMeOutFor = ["I", "am", "a", "happy", "array"]
// for (i = 0; i <= logMeOutFor.length; i += 1){
//     console.log(logMeOutFor[i])
// }

// let logMeOutFor = ["I", "am", "a", "happy", "array"];
// let i = 0;
// while(i <= logMeOutFor.length){
//     console.log(logMeOutFor[i]);
//     i += 1
// }


// let sum = 0
// let arr = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i <= arr.length; i += 1){
//     sum += i
// }console.log(sum)

let sum = 0
let secondArrToSum = [1, 2, 3, 4, 5, 6]
for (let i = 0; i <=secondArrToSum.length; i += 1){
    sum += i
}console.log(sum)