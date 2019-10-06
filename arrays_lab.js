// ## Exercises

// ## 1. Problem One - Fruits array

// a. Add "mango" to the end of a fruits array ["strawberry", "banana"].

// b. Add "blueberry" to the front of the same fruits array.

// c. Remove the last element of the fruits array.

// d. console.log the length of the fruits array.

// e. Remove the first element of the fruits array.

// f. Join all the elements in the fruits array with a '$'.

let fruits = ["strawberry", "banana"];
fruits.push("mango");
fruits.unshift("blueberry");
fruits.pop();
console.log(fruits.length);
fruits.shift();
console.log(fruits.join("$"));
