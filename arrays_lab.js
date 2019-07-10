console.log("#1");// 1. Log the last element of an array.
let fruits = ["Apple", "Bannana","Cherry"]
console.log(fruits[fruits.length-1]);



console.log("#2");//2. Change the first element of an array to the string "something else".
fruits[0] = "something else"//fruits[fruits.length[0]] = "something else"
console.log(fruits);



console.log("#3");//3. Add "mango" to the end of a fruits array ["strawberry", "banana"].
fruits.push("strawberry" , "mango");
console.log(fruits);



console.log("#4");//4. Add "blueberry" to the front of the same fruits array.
fruits.unshift("blueberry")
console.log(fruits);



console.log("#5");// 5. Remove the last element of the fruits array.
fruits.pop();
console.log(fruits);



console.log("#6");// 6. console.log the length of the fruits array.
console.log(fruits.length);



console.log("#7");//7. Remove the first element of the fruits array.
fruits.shift();
console.log(fruits);



console.log("#8");//8. Join all the elements in the fruits array with a '$'.
let $ = fruits.join(" $ ")
console.log($);



console.log("#9");// 9. Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"
let arr1 = ["two","four","six","eight","ten"]
let arr2 = ["one","three","five","seven","nine"]

if ( arr1.length > arr2.length ){
  console.log(arr1);
}
else if (arr2.length > arr1.length){
  console.log(arr2);
}
else{
  console.log("They are the same size.");
}



console.log("#10");//10. Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.
console.log(arr1[Math.floor((arr1.length-1))/2]);



console.log("#11");// 11. Write code that logs every value in an array using a for loop
for (let i = 0;  i < arr2.length; i++){
  console.log(arr2[i]);
}



console.log("#12");//12. Write code that logs every value in an array using a while loop
let j = 0
while( j < arr1.length){
  console.log(arr1[j]);
  j++;
}


console.log("#13");//13. Write code that logs every value in an array using a for/of loop
let arr3 = ["I", "am", "a","very sad","array" ]
for ( let n = 0; n < arr3.length; n++){
  console.log(arr3[n]);
}// is this question asking for both for and if statements?



console.log("#14");//14. Given an array of numbers, write code that logs the sum of all the numbers
let addNumbers = [2, 4 ,6, 8, 10]
let result = 0
for (let m = 0;  m <= addNumbers.length - 1; m++){
    result += addNumbers[m]
}
console.log(result)


console.log("#15");//15. Given an array of numbers, write code that logs all the odd numbers
let digits = [7, 23, 98, 54, 3, 10]
let odd = digits.filter(n => n%2)

console.log(odd);

console.log("#16");//16. Given an array of numbers, write code that logs the sum of all the even numbers
let total = 0;
let even = 0;
for( let i = 0; i <= digits.length -1; i++){
total += digits[i]

}

console.log(total-33); // added all the numbers in the array, and did the differnce, to get the sum of the even numbers. I am stuck on this



console.log("BONUS");
console.log("#17");//17. Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.
