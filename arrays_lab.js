// let fruits = ["strawberries", "banana"];

//#1
// fruits.push("mangos");
// console.log(fruits);
// fruits.unshift("blueberries");
// fruits.pop();
// console.log(fruits.length);
// fruits.shift();
// console.log(fruits.join("$"));




//#2
// let arr = ["mango", "kiwi", "apples", "pears", "peaches"];
// let arr2 = ["kiara", "erik", "john", "danny"];

// if( arr.length < arr2.length){
//     console.log(arr2 + " is bigger than "  +  arr);
// } else if( arr.length > arr2.length){
//     console.log(arr + " is larger than " + arr2);
// }else if( arr.length === arr2.length){
//     console.log("they are the same size");
// }


// #3
// let arr3 = [1, 2, 9, 5, 6];
// let i = (arr3.length - 1) / 2;
// if(i % 2 === 0){
//     console.log(arr3[i])
// }else if(i % 2 === .5){
//    console.log(arr3[i-.5]);
//    console.log(arr3[i+.5]);
// }
 


//#4

//4A
// let movies = [ "momento", "brideshead revisited", "lion king", "titanic"];

// for (let i = 0; i < movies.length; i ++){
//     console.log(movies[i])
// }

//4B

// let movies1 = [ "momento", "brideshead revisited", "lion king", "titanic"];

// let i = 0 
// while(i < movies1.length){
//     console.log(movies1[i])
// i ++
// }

//4C
// let movies2 = [ "momento", "brideshead revisited", "lion king", "titanic"];

// for(let element of movies2 ){
// console.log(element)
// }


//#5
// let num = [2, 4, 6, -6];

// let sum = 0
// for(let i = 0;i < num.length; i++){
//   sum += num[i]
// };
// console.log(sum);



//#6

//6A
// let num = [2, 3, 4, 9, 6, 1];

// for(let i = 0; i < num.length; i ++){
//     if(num[i] % 2 != 0){
//         console.log(num[i])
//     }
// }


//6B

// let num2 = [2, 3, 4, 9, 6, 1];
// let sum = 0;

// for( let i = 0; i < num2.length; i ++){
//     if(num2[i] % 2 === 0){
//     sum += num2[i]
//     }
// }
// console.log(sum);

//#7


// let num3 = [40, 603, 7, 2904, 48];
// let smallestNumber = num3[0];

// for(let i = 0; i < num3.length; i ++){
//     if(smallestNumber > num3[i]){
//         smallestNumber = num3[i]
//     }
// }
// console.log(smallestNumber);



//#8


let num4 = [78, 28, 80, 76, 2];
let smallestNumber = num4[2];
let secondSmallestNumber = num4[0];


for (let i = 0; i < num4.length; i ++){
    if( smallestNumber > num4[i]){
        smallestNumber = num4[i]
    }else if(secondSmallestNumber > smallestNumber){
        secondSmallestNumber > num4[i] 
    }else(secondSmallestNumber > num4[i])
}
console.log(secondSmallestNumber);


























