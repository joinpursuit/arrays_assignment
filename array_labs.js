// # Arrays Lab

// To complete this lab (as for most labs), do the following:

// 1. Fork this repo.
// 2. Clone **your** forked repo.
// 3. Create a file called `arrays_lab.js` inside your cloned repo.
// 4. Copy the description of the exercise as a comment.
// 5. Underneath the commented description write your code.
// 6. Ensure your solutions work properly!
// 7. Open PR against this repo.

// ___

// ## Exercises

// ## 1. Problem One - Fruits array

// a. Add "mango" to the end of a fruits array ["strawberry", "banana"].
let fruits = ["strawberry", "banana"];
fruits.push("mango");
console.log(fruits);

// b. Add "blueberry" to the front of the same fruits array.
fruits.unshift("blueberry");
console.log(fruits)

// c. Remove the last element of the fruits array.
fruits.pop();
console.log(fruits);

// d. console.log the length of the fruits array.
console.log(fruits.length);

// e. Remove the first element of the fruits array.
fruits.shift();
console.log(fruits);
// f. Join all the elements in the fruits array with a '$'.
;
console.log(fruits.join(" $ ").split());