// console.log("prblem 1")
// let fruits = ["strawberry", "banana"]
// fruits.push("mango")
// console.log(fruits)
// fruits.unshift("blueberry")
// fruits.pop()
// console.log(fruits.length)
// // console.log(fruits)
// fruits.shift()
// console.log(fruits)

// console.log(fruits.join("$"))

// console.log("prblem 2")
// let firstArr = [1,2,3,5]
// let secondArr = [1,5,2,4]

// if(secondArr.length > firstArr.length){
//     console.log(secondArr)
// }
//     else if( firstArr.length> secondArr.length){
//         console.log(firstArr)
//     }
//     else {
//         console.log("They are the same length")
//     }

// console.log("prblem 3")

// let hasExactMiddleArr = [1,5,3,4,6]

// let middle = Math.floor(hasExactMiddleArr.length/2)
// console.log(middle) //showing the middile #

// if (hasExactMiddleArr.length%2===0){
//     console.log(hasExactMiddleArr.slice(middle-1, middle+1))
// }
//     else {
//         console.log(hasExactMiddleArr[middle])
// }

// console.log("problem 4")
// let arrP4 =["I", "am", "a", "happy", "array"]
// for (let x = 0; x < arrP4.length; x++){
//     console.log(arrP4[x])
// }

// console.log("problem 4-b")
// let i = 0
// while (i < arrP4.length){
//     console.log(arrP4[i]);
//     i++;
// }

// console.log("problem 4-c")
// const array1 = ['a', 'b', 'c'];

// for (element of array1) {
//   console.log(element);
// }


// console.log("problem 5")

// let firstArrToSum = [1, 2, 3, 4, 5, 6]
// let sum = 0
// for (let x = 0; x < firstArrToSum.length; x++){
//     sum += firstArrToSum[x]
// }


// console.log("problem 6-a")

let evenAndOddArr = [1,5,2,4,11,12,99,100]

// for (let x = 0; x < evenAndOddArr.length; x++){
//     if (evenAndOddArr[x]%2 !==0){
//         console.log(evenAndOddArr[x])
//     }
// }
console.log("problem 6-b")

let sumE = 0
for (let x = 0; x < evenAndOddArr.length; x++){
    if (evenAndOddArr[x]%2 ===0){
        sumE += evenAndOddArr[x];
    }
}
console.log(sumE)


let mtx =[
            [1,2,3],
            [4,5,6],
            [7,8,9]
]

let test = [
            1,
            2,
            [3, 4, [5, [6, 'string'],7,8,9]]
]

console.log(test.length)
console.log(test[2][2][1][1][4])//give n in 'string'

console.log("Probelm 7")
// let arr = [4,3,7,29,40,1]
// let small = 0
// for (let x=0;x<arr.length;x++){
//     if (arr[x]>arr[x+1]){
//         small = arr[x];
// }
//     else if(small> arr[x]){
//     small = arr[x]
// }
// }
// console.log(small)

let arr = [4,3,7,29,40]
let small = arr[0]
for (let x=0;x<arr.length;x++){
    if (small>arr[x]){
        small = arr[x];
}
}
console.log(small)

console.log("Probelm 8")

let Arr2rd = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]
let smallLow = Arr2rd[0]
let small2rd = Arr2rd[0]
for (let x=0;x<Arr2rd.length;x++){
    if (smallLow>Arr2rd[x]){
        smallLow = Arr2rd[x];
}
    else if (small2rd>Arr2rd[x]&&small2rd>smallLow){
            small2rd=Arr2rd[x]
    }
}
console.log(smallLow)
console.log(small2rd)

// let smallLow = Arr2rd[0]
// let small2rd = Arr2rd[0]
// for (let x=0;x<Arr2rd.length;x++){
//     if (smallLow>Arr2rd[x]){
//         smallLow = Arr2rd[x];
// }
//     else if (small2rd > Arr2rd[x]) {
//             small2rd=Arr2rd[x]
//     }
// }
// console.log(smallLow)
// console.log(small2rd)

console.log("problem 9")
let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
let noDupeList = [ ]

for (let x = 0; x<dupeFriendlyList.length; x++){
    if (noDupeList.includes(dupeFriendlyList[x])){
        noDupeList += " "
}
    else {
        noDupeList += (dupeFriendlyList[x])
}
}
console.log(noDupeList)