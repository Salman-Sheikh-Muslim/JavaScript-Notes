/*
when you have variables that are highly related or the variables
can be linked to a single entity tahn its better to create an 
object ans add those variables in the object as properties.
*/

let radius = 1;
let x = 1;
let y = 1;

/*
The value of a key value pair in an object can be anything 
it can a object, array, function basically anything. 
*/

//Object Oriented Programing (OOP)

/* 
OOP is a style of programming where a collection of objects tallk to each other
to perform some functionality.
*/

const circle = {
radius: 1,
location: {
x: 1,
y: 1
},
isVisible: true,
draw: function(){
    console.log('draw');
},
};

/*
In the terms of OOP if a function is defined inside of an object then that
function is called Method.
*/

circle.location.x; // Accesing properties within the object using Dot Notation.
circle.draw(); // draw Method of the circle object.


//-------------------Factory Functions----------------------------

/*
Just as a Factory produces procduct these functions produce objects.
*/


/*
If the key and value are same you can simply remove the value and just add the key.
"radius: radius" is same as "radius"

There are 2 ways you can define/add a function in the object:

draw: function(){
    console.log('Draw');
    }
}

OR

draw(){
    console.log('Draw');
    }
}
*/

function createCitcle(radius, location){
    return {
      //  radius: radius,
        radius,
      //  location: location,
        location,
        isVisible: true,
        draw(){
            console.log('draw');
        }
    };
}

const circle1 = createCitcle(5, 't6vngyvryh');
console.log(circle1);

//-------------------Constructor Functions----------------------------

function Circle(radius){ //It is a onvention to use Pascal Notation for constructor functions.
this.radius = radius;      //this keyword refers to the object that is executing the current code.
this.draw = function(){
    console.log('draw');
}
}

const circlle = new Circle(5);

/*The new keyword does 3 things under the hood.

    The new operator creates an empty JavaScrit object such as const x={};
    Next the new operator will help to set all the properties using this keyword to point to the empty object created in the previous step.
    Finally the new operator will return the new object created from the function being used to invoke the new operator.
*/

//-------------------Objects are Dynamic in Nature----------------------------


const circles = { 
    radius: 1
};
// circles = {}; // This line of code will generate an error because circles is defined by using the keyword constant.
circles.color = 'yellow';
circles.draw = function() {}

delete circles.color;
delete circles.draw;

console.log(circles);

//-------------------Constructor Function for Objects----------------------------

let obj = {};

/*
When we create a new object using object literals such as let obj = {};
in JavaScript the JavaScript engine translates it into something like this:
let x = new Object(); //The function in this line is a constructor function.
*/

//------------------- Function Are Objects----------------------------

function Circle(radius) {
this.radius = radius;
this.draw = function() {
console.log('draw');
}
}

const Circle1 = new Function('radius', //Function is a built-in constructor function also used to create/produce objects 
`this.radius = radius;
this.draw = function(){
console.log('draw');
}`);

const circle_1 = new Circle1(1);
const another = new Circle(1);

/*
the following 2 lines do he exact same work.

Circle.call({}, 1)
const another = new Circle(1);

If you do not use the new operator than this points to the global onject 
which is the window.

Circle.call(window, 1) //the first argument in this line specifies the target of 'this'
const another =  Circle(1);

the apply method does the same work as call however instead of sending exh argument explicitly
using apply we can send all the arguments within an array.
Circle.call({}, 1, 2, 3)
Circle.apply({}, [1, 2, 3])

*/


//------------------- Value/Primitive and Refrence Types----------------------------

/*
Value Types:
    Number
    String
    Boolean
    Symbol // Introduced in ES6
    undefined
    null

Refrence Types:
    Object
    Function  //Is a kind off object in JavaScript
    Array    //Is a kind off object in JavaScript

Primitives are copied by their value.
Objects are copied by their reference.
*/

//Value types
let xx = 10 ; 
let yy = xx;
xx = 20;

console.log(yy); //10
console.log(xx); //20

//refrence types
let xxx = {value: 10} ; 
let yyy = xxx;
xxx.value = 20;

console.log(yyy); //20
console.log(xxx); //20


let number = 10;
function increase (number) { 
   return number++;
}
console.log(increase(number)); 
console.log(number); //SHOWS 10

/*
The reason it shows 10 instead of 11 is because the number variable inside and ourside the
function are completelty independent of each other.

So when we acces the 'number' outside the function we are accesing the number 
that is defined and dec;ared outdide of the function.
*/

let objj = { value: 10 };

function increase(objj) { 
    objj.value++;
}

increase(objj); 
console.log(objj); //SHOWS 11

/*
The reason it shows 11 is because the objj variable inside and ourside the
function are two different variable however they point.refrence to the same address in the memory.

So when we acces the 'objj' it does not matter if its inside or outsdie the
function beacuse both objj variables point to the same addres.
*/


//------------------- Using For...of loop by getting the properties of an object in an array-----------------------------


const pie = {
    radius: 1,
    draw() {
    console.log('draw');
    }
    };

    for (let key of Object.keys([pie]))  //The Object.key method returns a string array. Object is a constructor function and key is a method.
        console.log(key); // shows "radius - draw"


    for (let entry of Object.entries([pie]))  //The Object.entry method returns each value pair as an array. Object is a constructor function and entry is a method.
    console.log(entry); // shows "["radius"": 1] - ["draw", f]"

    if('radius' in pie) console.log('yes'); //With the help of in operator you can verify if an object contains a specific property.


//-------------------Cloning an Object-----------------------------

    const pipe = {
        radius: 1,
        draw() {
        console.log('draw');
        }
        };

    const anotherPipe = {}

    //old way of copying object properties from one object to another object.
    for(let key in pipe)
        anotherPipe[key] = pipe[key];

    console.log(anotherPipe);

 //New way of copying object properties from one object to another object. There is a mire better way to do this by using the Spread Operator

 const anotherPipe1 = Object.assign({}, pipe);

 const anotherPipe12 = Object.assign({color: 'Yellow'}, pipe);
 /*
 Syntax for using Object.assign():

  Object.assign(Can be an exsiting or a empty object, Source Object can be a single or multiple objects).
  With the assign method we can combine multiple objects into a single object.

 */

//Cloning an Object Using Spread Operator

const oval = {
    radius: 1,
    draw() {
    console.log('draw');
    }
    };

const oval1 = {...oval}; // ... three dots represent spread operator. In this the spread operator copies all the properties and methods in the oval object and puts/pastes it into the oval1 object.

//-------------------Built-in Object Math-----------------------------

console.log(Math.random()) // .random provides a random number between 0 and 1.
console.log(Math.round(1.8)); // rounds off the number to the nearest whole number.
console.log(Math.max(1,2,3,4,5));//Provides themaximum number between all the arguments provided to it.

//There are many more methods and properties in the Math object.

//-------------------Built-in Object String-----------------------------

/*
JavaScript has 2 types of String

//String Primitive
let name = 'Salman';
typeof name; //Shows "string";
name.length;

When use Dot Notation with a String primitive JavaScript
internally wraps that string with a string object.

//String Object
let Name = new String('Salman');
typeof name; //Shows "object"

ALL of the methods or properties within the String Object are case-sensitive.

*/

let message = "Hi. I am practicing JavaScript.";
console.log(message.length); //The length property tells the number of charachter (including spaces) within a string.

//You can use square brackets to access a particular chachter within the string.
message[0]; //Shows "H"

//You can use the includes method to verify if the string has a specific word.
message.includes('am'); //Shows the result in Boolean. In this case "true"

//You can use the startsWith method to verify if the string starts with a specific word.
message.startsWith('I'); //Shows the result in Boolean. In this case "false"
message.startsWith('hi'); //Shows the result in Boolean. In this case "false" as the first letter is capital in the string.
message.endsWith('hi');

message.indexOf('Hi'); //Tells the stating index of a specific word or letter within the string.
console.log(message.replace('practicing', 'learning new stuff about')); //replaces a specific part of the string.

//Note that the replace method returns a new string and does not modify the original string.

message.toUpperCase();
message.toLocaleLowerCase();

let spaces = '  Hello People  ';
spaces.trim(); //Removes the blank space from the Left and Right side of the string.

spaces.trimStart();
spaces.trimEnd();

/*
Escape Notations

Escape Notations help in writing special charachters within the string.

    \n => new line
    \t => 4 spaces (tab)
*/

let text = 'Hello, \'World\'. Hello People,';
console.log(text); // Also shows single quotes within the message because we used escape notation within the String.

console.log(text.split('')); //By using split on the basis of charachter we can split the Entire string into multiple elements within an array. 
//Note by using split we remove the charachter thats being used to split the string from within the string.
//Shows 4 elements within the array. 


//-------------------Template Literals-----------------------------

/*
Template Literals were introduced by ES6 and it is indicated y the `` (backtick) character
 */

const message1 ='This is my\n' + '\'first\' message';


const message2 = `This is my 
'first' message`;  // When you press enter within Template Literals it means new line.


const perName = 'John';
const message3 = 'Hi ' + perName + ',\n';

/*
You can add placeholders/value of variables dynamically within the Template Literals.
We can aslo add matehmatical expression within Template Literals.
You can aslo add a function that returns a value.
*/

const message4 = 
`Hi ${perName} ${2+3},

Thank you for joining my mailing list.

Regards,
Salman`;

//-------------------Built-in Object Date-----------------------------

/**
 Date is a constructor function.

 Date constructor have different versions and you can cycle through these
 by presseing up and down arrow key when the cursor is insode the parenthesis.
 */

const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);

//The Date() constructor function multiplr different setters and getters
now.setFullYear(2017);
now.toDateString();
now.toTimeString();
now.toISOString(); //Its a convention to use ISO format for web and mobile server and client base applications.



