// //Problem 1
// //a
// let fruits = ["strawberry", "banana"]
// fruits.push("mango")
// console.log(fruits)
// //b
// fruits.unshift("blueberry")
// console.log(fruits)
// //c
// fruits.pop()
// console.log(fruits)
// //d
// console.log(fruits.length)
// //e
// fruits.shift()
// console.log(fruits)
// //f
// console.log(fruits.join("$"))

// //Problem 2
// let firstArr = [1, 2, 3]
// let secondArr = [1, 5, 2, 4]
// if(firstArr.length === secondArr.length){
//     console.log("They are the same size");
// } else if (firstArr > secondArr) {
//     console.log(firstArr);
// } else {
//     console.log(secondArr)
// }

// //Problem 3
// let arr = [1, 5, 3, 4,6,4]
// if(arr.length%2 !== 0){
//     console.log(arr.slice(arr.length/2, arr.length/2+1))
// } else {
//     console.log(arr.slice(arr.length/2-1, arr.length/2+1))
// }

// //Problem 4
// const arr2 = [3,5,7,8,9]
// for (let i=0; i < arr2.length; i ++){
//     console.log(arr2[i])
// }
// //b section
// let i=0 
// while (i<arr2.length){
//     console.log(arr2[i])
//     i++
// }

// for (const element of arr2){
//     console.log(element);
// }

// //Problem 5
// let arr3 = [7,5,3]
// let sumOfArr3 = 0
// for (let i = 0 ; i < arr3.length; i++){
//     sumOfArr3 += arr3[i]
// } console.log(sumOfArr3)

// // //Problem 6
// // //a
// // let arr4 = [1,2,3,4,5,6,7]
// // for(let i = 0; i < arr4.length; i++) {
// //     if ( arr4[i]%2 === 1) {
// //         console.log(arr4[i])
// //     }
// // }

// // //b
// // let sumofArr4 = 0
// // for(let i = 0; i < arr4.length; i++) {
// //     if ( arr4[i]%2 === 0) {
// //         sumofArr4 += arr4[i]
// //     }
// // } console.log(sumofArr4)

// //Problem 7
// let arr5 = [10,20,30,40,2,50]
// let value = arr5[0]
// for(let i =0; i < arr5.length; i++){
//     if (arr5[i] < value){
//         value = arr5[i];


//     }    
// }
// console.log(value)

//Problem 8

let arr6 = [5,7,4,3]
let smallest = arr6[0]
let secondSmallest = smallest
for (let i=0; i< arr6.length; i++){
    if(arr6[i] < smallest){
        smallest = arr6[i]
    }else if( secondSmallest[i] > smallest[i] && secondSmallest[i] < arr6[i]){
        console.log(secondSmallest)
    }
} console.log(secondSmallest)





// let value3 = arr7[0]
// for (let i=0; i< arr7.length; i++){
//     if(arr7[i] < value3){
//         value3 = arr7[i]}
//         console.log(value3)
//     }