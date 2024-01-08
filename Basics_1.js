console.log('Hello World');

//Open the folder in cmd and type: "node index.js" to run this file.

//-------------------Variables: let, const and types of category of values that can be assigned to a variable----------------------------


// "let" keyword was introduced in ES6
let name;
console.log(name);

//By default variables in JavaScript have 'Undefined' value.

let NAME  = 'Salman'; // JavaScript is a case-sensitive Language.
console.log(NAME);

/*
Rules for Naming a Variable

    Cannot Be a reserved Keyword
    Should me meaningful
    Cannot start with a number
    Cannot contain space or hyphen
    Are Case-Sensitive
*/

//When declaring mulptiple variables its best to declare each variable in a new line.

//Variable declared using a let keyword can have its value changed.
let intrestRate=0.3;
intrestRate=1;
console.log(intrestRate);

//Variable declared using a const keyword has a fixed value it cannot be changed.
const intrestRate_const=0.3;
//intrestRate_const=1; //This line over here will not execute and will give a logical error.
console.log(intrestRate_const);

/*
There are 2 categories of types values we can assign to a variable.

    Primitive/Types Value - Strings, Number, Boolean, undefined, null
    Reference Types Value - Object, Arrays, Function

*/

let lastName = 'Sheikh'; //String Literal
let age = 23; // Number Literal
let isApproved = 'Yes'; // Boolean Literal
let storage = undefined;
let SelectedColor = null;

//null is usually used when we want to explicitly clear the value of a variable

//-------------------typeof Operator & JavaScript is A Dynamic Language----------------------------


/*
JavaScript is Dynamic language meaning at runtime the data-type of a variable
can be changed.
*/

console.log(typeof(SelectedColor));
console.log(typeof isApproved);   //typeof is a Operator


//-------------------Object----------------------------


/*
We can put multiple related variables inside a object.
A object contain multiple key value pairs and these are called
the properties of an object.
*/

let person = {name: 'Salman' , age: 23}; //Object Literal
console.log(person);

/*
There are 2 ways to work with the properties of an object.

  Dot Notation
  Bracket Notation
*/

//Dot Notation
person.name = 'Aman';     //Updating
console.log(person.name); //Reading

//Bracket Notation
person['name'] = 'Zubia';     //Updating
console.log(person['name']); //Reading

/*
Sometimes while working with object properties you do not know the specific property
you need to work with until the runtime.

E.G. user selecting the property.

In this case you will need to use Bracket Notation.
*/

let selection = 'User_Name';
person[selection] = 'Zubia';   //In this line the property is being accessed in a dynamic way.

//-------------------Arrays----------------------------

// An array is a data structure that we use to represent a list of items.
//We usually use array to store a list of objects.
//The [] brackets are what we call an array literal.
let selecteColors = [ 'red', 'blue' ];
console.log(selecteColors);

//Each elemet in the array has an index. Index starts from 0.
console.log(selecteColors[0]);

//The length of an array and the type of items/elements in an array are dynamic.
selecteColors[2] = 'green'; //Adding the 'green' item/object in the array at runtime. 
console.log(selecteColors);

//In JavaScript we can add different types of items/elements in an array.
selecteColors[3] = 3; //Adding the value of 3 in the array, of data-type number; at runtime. 
console.log(selecteColors);


//Technically an array is an object so you can do somethings with it using Dot Notation.
console.log(typeof selecteColors); //The result of this output will be an Object.

//An array is an object in JavaScript.
/*
Whenever we create an Array in JavaScript using [] brackets, it automatically recieves
some properties you can view/use these properties by using the following 
Syntax: ArrayName.PropertyName;
*/

console.log(selecteColors.length); //The length property returns the number of items/elements in the array.

//-------------------Function----------------------------

/*
A function is a set of statements that perform a task or calculate a value.
*/

function greet() {
    console.log('Hello World');
}

greet(); //calling the function

function greet(name) { //Whatever we write inside () brackets is a 'parameter' in a function declaration.
    console.log('Hello' + name);
}

greet('Salman'); //When calling the function Whatever we write inside () brackets or the actual value we provife is a 'argument' in a function
greet('Zubia');

//Performing a Task
function greet(name, lastName) { 
    console.log('Hello' + name + '' + lastName);
}

greet('Salman' , 'Sheikh');


//Calculating a Value
function square(number) { 
    return number*number;
}

let result = square(2);
console.log(square(2)); // 2 functions are being called in this line.

/*
square() is the function thats being called first after its value returend its
passed inside log() function as an argument.
*/