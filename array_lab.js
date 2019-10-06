
        // problem 1
// let fruits =  ["strawberry","bannana"]
// fruits.push("mango")
// fruits.unshift("blueberry")
// console.log(fruits)
// fruits.pop()
// console.log(fruits)
// console.log(fruits.length)
// fruits.shift()
// console.log(fruits)
// console.log(fruits.join("$"))
         
        // problem 2
// let firstArr = [1,2,3,]
// let secondArr = [1,5,2,4]

// if (firstArr.length === secondArr.length){
//     console.log("They are the same")
// } else if(firstArr.length > secondArr.length){
//     console.log(firstArr)
// } else{
//     console.log(secondArr)
// }


let arr = [1, 5, 6, 7, 8, 9,]
let notMiddleArr = (arr.length/2)
let middleArr = (arr.length / 2) - .5
    if (arr.length % 2 === 1){
//     console.log(arr[middleArr])
 } else if (arr.length % 2 === 0){
     console.log(arr[notMiddleArr] - 1, arr[notMiddleArr])

 }

//  let arr = [1, 5, 6, 7, 8, 9, 10]
//  let middleIndex = Math.floor(arr.length / 2)
 
 // if (arr.length % 2){
 //     console.log(arr[middleIndex])
 //  } else {
 //      console.log(arr[middleIndex - 1], arr[middleIndex])
 
 //  }