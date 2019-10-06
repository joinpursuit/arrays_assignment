//Problem 1
//a
let fruits = ["strawberry", "banana"]
fruits.push("mango")
console.log(fruits)
//b
fruits.unshift("blueberry")
console.log(fruits)
//c
fruits.pop()
console.log(fruits)
//d
console.log(fruits.length)
//e
fruits.shift()
console.log(fruits)
//f
console.log(fruits.join("$"))

//Problem 2
let firstArr = [1, 2, 3]
let secondArr = [1, 5, 2, 4]
if(firstArr.length === secondArr.length){
    console.log("They are the same size");
} else if (firstArr > secondArr) {
    console.log(firstArr);
} else {
    console.log(secondArr)
}

//Problem 3
let arr = [1, 5, 3, 4, 5]
if(arr.length%2 !== 0){
    console.log(arr.slice(arr.length/2, arr.length/2+1))
}