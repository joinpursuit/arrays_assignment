// // Problem 1a
// let fruits = ["strawberry", "banana"]
// fruits.push("Mango")
// console.log(fruits);

// //1b
// fruits.unshift("blueberry");
// console.log(fruits);
// // 1c
// fruits.pop()
// console.log(fruits);
// //1d 
// console.log(fruits.length);
// //length is 3
// //1E
// fruits.shift()
// console.log(fruits);
// //1F
// console.log(fruits.join("$"));
// console.log(fruits);

// PROBLEM 2
// let firstArr = [1, 2, 3];
// let secondArr = [1, 5, 2, 4];

// if (firstArr.length > secondArr.length) {
//     console.log(firstArr) 
// } else if (secondArr.length > firstArr.length) {
//     console.log(secondArr)
// } else {
//     console.log("They are the same size.")
// }
// PROBLEM 3
// 3a
// let hasExactMeddleArr = [1,5,3];

// if (hasExactMeddleArr.length % 2 === 1) {
//     console.log(hasExactMeddleArr[(hasExactMeddleArr.length - 1 )/ 2]) 
// }

// 3b

// let hasNoExactMiddleArr = [1,4,6,9];

// if (hasNoExactMiddleArr.length % 2 === 0) {
//     console.log(hasNoExactMiddleArr[(hasNoExactMiddleArr.length)/2])
//     console.log(hasNoExactMiddleArr[(hasNoExactMiddleArr.length/2) - 1])
// }

// Problem 4
// 4a
// let labArray = ["Coding", "is", "pretty", "dope"]
// let i = 0

// for (i; i < labArray.length; i++) {
//     console.log(labArray[i]);
// }

// 4b

let labArray2 = ["Coding", "is", "really", "really", "fun"];
// let i = 0;

// while (i < labArray2.length) {
//     console.log(labArray2[i]);
//     i++;
// }

for (const elementOfArray of labArray2) {
    console.log(elementOfArray)
}