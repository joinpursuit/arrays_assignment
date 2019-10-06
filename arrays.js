// // // // Problem 1a
// // // let fruits = ["strawberry", "banana"]
// // // fruits.push("Mango")
// // // console.log(fruits);

// // // //1b
// // // fruits.unshift("blueberry");
// // // console.log(fruits);
// // // // 1c
// // // fruits.pop()
// // // console.log(fruits);
// // // //1d 
// // // console.log(fruits.length);
// // // //length is 3
// // // //1E
// // // fruits.shift()
// // // console.log(fruits);
// // // //1F
// // // console.log(fruits.join("$"));
// // // console.log(fruits);

// // // PROBLEM 2
// // // let firstArr = [1, 2, 3];
// // // let secondArr = [1, 5, 2, 4];

// // // if (firstArr.length > secondArr.length) {
// // //     console.log(firstArr) 
// // // } else if (secondArr.length > firstArr.length) {
// // //     console.log(secondArr)
// // // } else {
// // //     console.log("They are the same size.")
// // // }
// // // PROBLEM 3
// // // 3a
// // // let hasExactMeddleArr = [1,5,3];

// // // if (hasExactMeddleArr.length % 2 === 1) {
// // //     console.log(hasExactMeddleArr[(hasExactMeddleArr.length - 1 )/ 2]) 
// // // }

// // // 3b

// // // let hasNoExactMiddleArr = [1,4,6,9];

// // // if (hasNoExactMiddleArr.length % 2 === 0) {
// // //     console.log(hasNoExactMiddleArr[(hasNoExactMiddleArr.length)/2])
// // //     console.log(hasNoExactMiddleArr[(hasNoExactMiddleArr.length/2) - 1])
// // // }

// // // Problem 4
// // // 4a
// // // let labArray = ["Coding", "is", "pretty", "dope"]
// // // let i = 0

// // // for (i; i < labArray.length; i++) {
// // //     console.log(labArray[i]);
// // // }

// // // 4b

// // let labArray2 = ["Coding", "is", "really", "really", "fun"];
// // // let i = 0;

// // // while (i < labArray2.length) {
// // //     console.log(labArray2[i]);
// // //     i++;
// // // }

// // // 4c

// // for (const elementOfArray of labArray2) {
// //     console.log(elementOfArray)
// // }

// // Problem 5
// // 5a

// // let firstArrToSum = [1, 2, 3, 4, 5, 6]
// // let sum = 0

// // for (let i = 0; i < firstArrToSum.length; i++) {
// //     sum += firstArrToSum[i];
// // } 
// // console.log(sum);

// // 5b

// // let secondArrToSum = [1,2,3,4,5,-6]
// // let i = 0
// // let sum = 0

// // while (i < secondArrToSum.length) {
// //     sum += secondArrToSum[i];
// //     i++;
// // }
// // console.log(sum);

// // Problem 6
// // 6a

// // let evenAndOddArr = [1,5,2,4,11,12,99,100]

// // for (let i = 0; i < evenAndOddArr.length; i++) {
// //     if (evenAndOddArr[i] % 2 === 1) {
// //         console.log(evenAndOddArr[i])
// //     }
// // }

// // 6b

// // let evenAndOddArrToSum = [1,5,2,3,11,4,6]
// // sum = 0

// // for (let i = 0; i < evenAndOddArrToSum.length; i ++) {
// //     if (evenAndOddArrToSum[i] % 2 === 0) {
// //         sum += evenAndOddArrToSum[i];
// //     }
// // }
// // console.log(sum)

// // // Problem 7

// // let arr = [4,3,7,29,40, 2]
// // let lowestNumber = 0
// // lowestNumber = arr[0]

// // for (let i = 0; i < arr.length; i ++ ) {
// //     if (arr[i] < lowestNumber) {
// //         lowestNumber = arr[i]
// //     } 
// // }
// // console.log(lowestNumber)

// // // Problem 8 

// // let secondSmallestArr = [11,52,10,7,50,46,79,78,13,26,83,92,89,81,1,41,4,23,57,41,80,83,41,69]
// // let lowestNumber = secondSmallestArr[0]
// // let secondLowestNumber = secondSmallestArr[0]

// // for (let i = 0; i < secondSmallestArr.length; i ++ ) {
// //     if (secondSmallestArr[i] < lowestNumber) {
// //         lowestNumber = secondSmallestArr[i]
// //     } else if (secondLowestNumber[i] === lowestNumber) {
        
// //     }
// //     else if (secondSmallestArr[i] < secondLowestNumber) {
// //         secondLowestNumber = secondSmallestArr[i]
// //     } 
// // }
// // console.log(lowestNumber)
// // console.log(secondLowestNumber)

// // Problem 9
// let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// let noDupelist = []

// for (let i = 0; i < dupeFriendlyList.length; i++) {
//     if (noDupelist.includes(dupeFriendlyList[i])) {

// } else {
//     noDupelist.push(dupeFriendlyList[i])
// }
// }
// console.log(noDupelist)