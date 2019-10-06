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

let hasExactMiddleArr = [1,5,3,1,6,1,5,7]
// let hasNoExactMiddleArr = [1,4,6,9]

// console.log(hasExactMiddleArr.slice(2,4))
let middle = Math.floor(hasExactMiddleArr.length/2)
console.log(middle)

if (hasExactMiddleArr.length%2===0){
    console.log(hasExactMiddleArr.slice(middle-1, middle+1))
}
    else {
        console.log(hasExactMiddleArr[middle])
}



// console.log(
//     hasExactMiddleArr(Math.floor(hasExactMiddleArr.length/2)-1),
//      (Math.ceil(hasExactMiddleArr.length/2))
//     )
// console.log(
//     hasExactMiddleArr[Math.ceil(hasExactMiddleArr.length/2)-1]
//     )
