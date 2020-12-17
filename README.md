[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

# Arrays Lab

What is an Array is?
The Length Property
Index/ Key into an Array and what that mean
Change the assignment of an array

Push/Pop/Shift/Unshift


What is an Array? A collection of Items
This means: If we had a collection of Animals
Ex. Let Cat = "Cat"
    Let Dog = "Dog"

This allows for a collection
//Array is a type of data structure that's super common.

Let animals = [Bracket Literal Syntax: ex. "cat","dog"]

const fruits = ["banana". "cherry","apples"];
console.log(fruits)

let nums=[7,5,6,5]
let booleans= [true, true, false]
let multidimentionalArray =[1,2,3],[4,5,6],[7,8,9]

Let mixedDataArray= [1,2,"cat,"blue]//BAD PRACTICE, KEEP UNIFORM DATA

//make your own array. that includes three of something.

const students = ["Anju", "Flower","Joshua"];

console.log (students)





Day 2:

let arr1=[1,2,3];
let arr2= arr1;
arr2.push(4)
console.log(arr1)
[1,2,3,4] if we mutate one we mutate the other


let arr1=[1,2,3];
let arr2=[1,2,3];
console.log(arr1===arr2)  Answer: False

How do we duplicate an Array:

//slice allows us to slice (duplicate) parts of the array or all of the array

let arr1=[1,2,3]
let arr2=arr1.slice(0,3)

Practice getting familiar with arrays.  [Documentation link](https://joinpursuit.github.io/Pursuit-Core-Web-Arrays-Lab/)

## Learning Objectives 
 * Be able to key / index into an array 
 * Be able to set values into an array 
 * Be able to use push, pop, unshift, and shift
 * Be able to use `.length` property on an array. 

## Prerequisites 
* Experience with values types and operators 

___

## Getting Started 
* Fork this repo
* Clone the forked repository
* `cd` to the directory where you cloned it
* `npm install` to install dependencies
* `npm test` to run the tests

> *Note*: Remember to `git add`, `git commit` and `git push` regularly

## Submission Guidelines
  * When finished, commit and push your work.
  * Make a pull request on github.
  * Submit the link to your pull request on Canvas. 

## Resources 
 - [MDN Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
 - [w3 schools Arrays](https://www.w3schools.com/js/js_arrays.asp)

