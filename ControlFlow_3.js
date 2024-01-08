
//-------------------Conditional Statements----------------------------

/*
In JavaScript we have 2 Conditional Statements
  if...else
  Switch...case
*/


//-------------------if...else Statement----------------------------

/*
Syntax:

if (condition) {
    statement
}
else if (anotherCondition) {
    statement
}
else if (yetAnotherCondition)
    statement
else
    statement
*/

let hour = 10;

if (hour >= 6 && hour < 12) {
console.log('Good morning');
}
else if (hour >= 12 && hour < 18) { 
    console.log('Good afternoon');
}
else
    console.log('Good evening');


//-------------------Switch...case Statement----------------------------



let role = 'guest'

switch (role) { 
    case 'guest': 
        console.log('Guest User'); 
        break;
    case 'moderator':
        console.log('Moderator User'); 
        break;
    default: 
        console.log('Unknown User');
}

//-------------------Loops----------------------------

/*
Loops are used to repeat a certain actions a number of times.

Types of Loop in JavaScript:

    For Loop
    While Loop
    Do...While Loop
    For...in Loop
    For...of Loop

    In For loop the loop variable is initialized within the loop.
    In While and Do...While Loop the loop variable is initialized outside of the loop.
*/

//-------------------For Loop----------------------------

/*
for(initialExpression; condition; incrementalExpression){
    Block of Statements 
}
 */

for (let i = 1 ; i <= 5 ; i++) {
    if (i % 2 !== 0) console.log(i);
    }

for (let i = 5 ; i >=1  ; i--) {
    if (i % 2 !== 0) console.log(i);
    }

//-------------------While Loop----------------------------

let i = 0 ;
while (i <= 5) {
if (i % 2 !== 0) console.log(i);
i++;
}

//-------------------Do...While Loop----------------------------


//Do..While Loops are always executed atleast once even if the condition is false.
let j = 0 ;
do {
if (j % 2 !== 0) console.log(j);
j++;
} while (j <= 5) ;


//-------------------Infinite Loop----------------------------

/*
Infinite loop can crash your program as it has no way to stop.
At this point your only option is to end the program itself. 

Examples:
    let i = 0 ;
    while (i < 5) {
    console.log(i);
    }

    while (true) {
    }

    let x = 0 ;
    do {

    } while (x < 5) ;

    for (let i = 0; i > 0 ; i++){

    }

*/

//-------------------For...in and For...of Loop----------------------------

/*
For...in and For..of Loop are used to iterate over the properties of an 
object or elements within an array.
*/


const person = {
    name: 'Salman',
    age: 23
};


//Best Practice is to use For...in loop for itetrating over the properties of an object.
for(let key in person){
    console.log(key, person[key]);
}

const colors = ['red', 'green', 'blue'];

for(let index in colors){
    console.log(index, colors[index]);
}

/*
There is a better way to access the elements of an array. ES6 introduced
a for...of loop that does a better job for iterating over the elements
of an Array.
*/

for(let index of colors){
    console.log(index);
}

//In For...of loop you do not need to deal with the index of the array.

//-------------------Break and Continue keywords used in Loops----------------------------

let ij = 0
while (ij <= 10) {

if (ij === 7) break;  //Break keyword Exits the loop

if (ij % 2 === 0) {
ij++; 
continue; //continue keyword stops the loops for the current iteration and moves on to the next iteration. continue is not used often.
}

log(ij) ;
ij++;
}