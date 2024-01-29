/*Destructuring Arrays and Objects in JavaScript
Destructuring is a JavaScript feature introduced in ES6 that allows for 
faster and simpler access to and unpacking of variables from arrays and objects.

Before destructuring was introduced, if we had an array of fruits and wanted 
to get the first, second, and third fruits separately, we would end up with 
something like this:
*/
let fruits= ["Mango", "Pineapple" , "Orange", "Lemon", "Apple"];

let fruit1 = fruits[0];
let fruit2 = fruits[1];
let fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3); //"Mango" "Pineapple" "Orange"
/*This is like repeating the same thing over and over which could become 
cumbersome. Let's see how this could be distructured to get the first 3 fruits.
*/

let [fruit11, fruit22, fruit33] = fruits;

console.log(fruit11, fruit22, fruit33); //"Mango" "Pineapple" "Orange"
/*
You might be wondering how you could skip data if you just want to print the 
first and final fruits, or the second and fourth fruits. You would use commas 
as follows:

*/
const [fruit111 ,,,, fruit5] = fruits;
const [,fruit222 ,, fruit4,] = fruits;

/*
Object destructuring
Let’s now see how we could destructure an object – because in React you will be 
doing a lot of object descructuring.

Suppose we have an object of user which contains their firstname, lastname, and 
lots more,
*/

const Susan = {
  firstName: "Susan",
  lastName: "Steward",
  age: 14,
  hobbies: {
    hobby1: "singing",
    hobby2: "dancing"
  }
};

/*
In the old way, getting these data could be stressful and full of repetition:
*/
const firstName = Susan.firstName;
const age = Susan.age;
const hobby1 = Susan.hobbies.hobby1;

console.log(firstName, age, hobby1); //"Susan" 14 "singing"

//but with destructuring its a lot easier:

const {firstName1, age1, hobbies:{hobby11}} = Susan;

console.log(firstName, age, hobby1); //"Susan" 14 "singing"

//We can also do this within a function:

function individualData({firstName, age, hobbies:{hobby1}}){
  console.log(firstName, age, hobby1); //"Susan" 14 "singing"
}
individualData(Susan);