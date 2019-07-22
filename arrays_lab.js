// ## Exercises
//
console.log(`1. Log the last element of an array.`);
let solSystem = ['sun','venus','earth','mars','jupiter','saturn','uranus','neptune']
console.log(solSystem[solSystem.length-1])

console.log(`\n2. Change the first element of an array to "something else".`);
let arrMind = ['firt this','hello world', 'hammer time']
arrMind.splice(0,1, 'something else')
console.log(arrMind);

console.log(`\n3. Add "mango" to the end fruits array ["strawberry", "bannana"].`);
let fruitsArray= ['strawberry','bannana']
fruitsArray.push('mango')
console.log(fruitsArray)

console.log(`\n4. Add "blueberry" to the front of the same fruits array.`);
fruitsArray.unshift('blueberry')
console.log(fruitsArray)

console.log(`\n5. Remove the last element of the fruits array.`);
fruitsArray.pop()
console.log(fruitsArray)

console.log(`\n6. console.log the length of the fruits array.`);
console.log(fruitsArray.length)

console.log(`\n7. Remove the first element of the fruits array.`);
fruitsArray.shift()
console.log(fruitsArray)

console.log(`\n8. Join all the elements in the fruits array with a '$'.`);
console.log(fruitsArray.join('$'))

// let fuitmoney
// let fruitmoney = fruitsArray.join("$")
// console.log(fuitmoney)

console.log(`\n9. Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"`);
//
// ```js
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]
//
// // log [1,5,2,4]
// ```
let firstArr = [ 1,2,3,4,5,6,14,7,78,23]
let secondArr = [1,2,3,4,5,6,7,8,9,10,0]


if ( firstArr.length === secondArr.length){
  console.log("They are the same size")
} else if ( firstArr.length > secondArr.length){
  console.log(firstArr)
} else {
  console.log(secondArr);
 }

console.log(`\n10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.`);
//
// ```js
// let hasExactMiddleArr = [1,5,3]
//
// // log 5
//
// let hasNoExactMiddleArr = [1,4,6,9]
//
// // log 4,6

let midArr = [1,3,4,8,9,4,7,0]
let numMid = Math.floor(midArr.length/2)
if  ( midArr.length % 2 ===0){
      console.log(midArr[numMid], midArr[numMid - 1]);
} else {
  console.log(midArr[numMid]);
}

// ```
//
console.log(`\n11. Write code that logs every value in an array using a for loop`);
//
// ```js
// let logMeOutFor = ["I", "am", "a", "happy", "array"]
//
// /* I
//   am
//   a
//   happy
//   array
// */
// ```
loopArr = ['somewhere', 'over', 'the','rainbow']
for ( let i =0; i < loopArr.length; i++){
     console.log(loopArr[i]);
}


console.log(`\n12. Write code that logs every value in an array using a while loop`);
//
// ```js
// let logMeOutWhile = ["I", "am", "a", "happy", "array"]
//
// /* I
//   am
//   a
//   happy
//   array
// */
// ```
loopArr2 =['get','off', 'off', 'my', 'lawn']
const hut =(suntoucher) => {
  let i =0;
  let goals =[]
    while (i < suntoucher.length) {
      goals.push(suntoucher[i])
    i++
 }
  return goals;
}
console.log(hut(loopArr2));

console.log(`\n13. Write code that logs every value in an array using a for/of loop`);
//
// ```js
// let logMeOutForOf = ["I", "am", "a", "happy", "array"]
//
// /* I
//   am
//   a
//   happy
//   array
// */
// ```
let predArnold = ['get','to','the','chopper']
for(let y of predArnold){
    console.log(y)
}


console.log(`\n14. Given an array of numbers, write code that logs the sum of all the numbers`);
//
// ```js
// let firstArrToSum = [1, 2, 3, 4, 5, 6]
// //  21
//
// let secondArrToSum = [1, 2, 3, 4, 5, -6]
// //  9
// ```

let sumArray =[1, 2, 3, 4, 5, 6];

const addArray = (sumbody) => {
  let total=0
    for (let i = 0; i < sumbody.length; i++){
       total += sumbody[i]
     }
        return total;
};

console.log(addArray(sumArray))


console.log(`\n15. Given an array of numbers, write code that logs all the odd numbers`);
//
// ```js
//
// let evenAndOddArr = [1,5,2,4,11,12,99,100]
//
// // 1, 5, 11, 99
// ```
let oddArr = [1,6,7,9,3,23,79,90,57,44,91]


// for (let i =0; i < oddArr.length; i++){
//       if (oddArr[i] % 2){
//         console.log(oddArr[i]);
//       }
//
const oddNum = (odd) => {
  let value =[];
    for (let i =0; i < odd.length; i++){
      if (odd[i] % 2){
        value.push(odd[i]);
      }
    }
    return value;
}

let notEven = oddNum(oddArr);

console.log(notEven);



console.log(`\n16. Given an array of numbers, write code that logs the sum of all the even numbers`);
//
// ```js
//
// let evenAndOddArrToSum = [1,5,2,3,11,4,6]
//
// // 12
// ```

let evenAndOddArrToSum = [1,5,2,3,11,4,6,9,,60,59,46,37,23,14,90]

const eveOdd = (arrEvenOdd) => {
let sum=0;
  for(let i =0; i< arrEvenOdd.length; i++){
      if (arrEvenOdd[i] % 2 === 0){
            sum += arrEvenOdd[i]
      }
} return sum
}
console.log(eveOdd(evenAndOddArrToSum));

console.log(`\n17. Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.`);
//
// ```js

let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]

const duplicate = (duppy) =>{
    let noDupeList = []
    let exac =[]
  for (let i =0; i < duppy.length; i++){
    if (exac[i] === dupeFriendlyL[i]){
        continue
    } else {
      return (noDupeList.push(exac[i]))
    }
  }
}

//noDupleList = [4, 2, 6, 9, 1]
//
// ```


console.log(`\n18. Make an array that contains all elements that appear exactly once in someRepeatsAgain`);
//
// ```js
 let someRepeatsAgain = [25,11,30,31,50,28,4,37,13,20,24,38,28,14,44,33,7,43,39,35,36,42,1,40,7,14,23,46,21,39,11,42,12,38,41,48,20,23,29,24,50,41,38,23,11,30,50,13,13,16,10,8,3,43,10,20,28,39,24,36,21,13,40,25,37,39,31,4,46,20,38,2,7,11,11,41,45,9,49,31,38,23,41,16,49,29,14,6,6,11,5,39,13,17,43,1,1,15,25]
//
// // [ 44,33,35,42,12,48,30,50,8,3,10,28,24,36,21,1000,40,37,4,46,20,2,7,45,9,31,38,23,41,16,49,29,14,6,11,5,39,13,17,43,1,15,25 ]
// let norep =[]
// for (let i = 0; i <someRepeatsAgain.length; i++){
//    if (norep[i])
// }

// ```
//
console.log(`\n19. Given an array of strings, find the the string with the most "a"s in it.`);
//
// ```js
let mostAStrings = ["apes", "abba","class", "apple","calculate","close"]
//
// //"abba"

//still needs work
function countingAstr(countingStr,letter) {
  let num =0;
  let count =0;
  let holder =countingStr[0]
  for(let i =0; i < countingStr.length; i++){
    for(let v of countingStr[i]){
      if (v === letter){
        num +=1;
      } else if (num > count) {
         holder = countingStr[i];
         count = num;
         return holder;
    }
      }
  }

}
console.log(countingAstr(mostAStrings,"u"));


console.log(`\n20. Find the second smallest number in an Array of Ints`);
let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]

function secSmall(secArr) {
  let smallest = secArr[0];
  let secondSmall=0;
  for (let i = 0; i < secArr.length; i++) {
        if (secArr[i] < smallest){
          secondSmall = smallest;
          smallest = secArr[i];
        } else if (secArr[i] < secondSmall && secArr[i] > smallest){
          secondSmall = secArr[i];
        }
  }
  return secondSmall;
}
console.log(secSmall(secondSmallestArr));
