console.log("prblem 1")
let fruits = ["strawberry", "banana"]
fruits.push("mango")
console.log(fruits)
fruits.unshift("blueberry")
fruits.pop()
console.log(fruits.length)
// console.log(fruits)
fruits.shift()
console.log(fruits)

console.log(fruits.join("$"))

console.log("prblem 2")
let firstArr = [1,2,3,5]
let secondArr = [1,5,2,4]

if(secondArr.length > firstArr.length){
    console.log(secondArr)
}
    else if( firstArr.length> secondArr.length){
        console.log(firstArr)
    }
    else {
        console.log("They are the same length")
    }

console.log("prblem 3")

let hasExactMiddleArr = [1,5,3,4,6]

let middle = Math.floor(hasExactMiddleArr.length/2)
console.log(middle) //showing the middile #

if (hasExactMiddleArr.length%2===0){
    console.log(hasExactMiddleArr.slice(middle-1, middle+1))
}
    else {
        console.log(hasExactMiddleArr[middle])
}

console.log("problem 4")
let arrP4 =["I", "am", "a", "happy", "array"]
for (let x = 0; x < arrP4.length; x++){
    console.log(arrP4[x])
}

console.log("problem 4-b")
let i = 0
while (i < arrP4.length){
    console.log(arrP4[i]);
    i++;
}

console.log("problem 4-c")
const array1 = ['a', 'b', 'c'];

for (element of array1) {
  console.log(element);
}


console.log("problem 5")

let firstArrToSum = [1, 2, 3, 4, 5, 6]
let sum = 0
for (let x = 0; x < firstArrToSum.length; x++){
    console.log(sum += firstArrToSum[x])
}
