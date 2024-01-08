/*
In JavaScript we use "Operators and Variables" together to create "Expressions"
and withe these expressions we can implement "Logics and Algorithm".

There are 5 types of Oerators in JavaScript

-Arthimetic
-Assignment
-Comparison
-Logical
-Bitwise
*/



//-------------------Arthimetic----------------------------

let x=10;
let y=5;
// 'x +y' is an Expression.
//Expression is something that produces a value.

console.log(x + y); //Addition
console.log(x - y); //Subtraction
console.log(x * y); //Multiplication
console.log(x / y); //Division
console.log(x % y); //Remainder
console.log(x ** y); //Exponentiation

/*
 To multi-comment more than one line at once select all the lines you want to comment
and press "Control + / on Windows" and " Command + / on Mac"
*/

//Increment and Decrment Operator work differently depending whether you put the operator symbol or the left or right.
//Increment
console.log(++x) // x has the value of 10. By using the operator before x what happens it that first a value of 1 is added in x and than displayed on the console. So the value of 11 would be displayed on the console.
console.log(x++) // x has the value of 10. By using the operator after x what happens it that first the value of x is diplayed on the console; Meaning we see 10 on the console and after that the value of 1 is added in x.


//Decrement

x = 10;
console.log(--x) // x has the value of 10. By using the operator before x what happens it that first a value of 1 is subtracted from x and than displayed on the console. So the value of 9 would be displayed on the console.
console.log(x--) // x has the value of 10. By using the operator after x what happens it that first the value of x is diplayed on the console; Meaning we see 10 on the console and after that the value of 1 is subtracted from x.


//-------------------Assignment----------------------------

let z = 10;

/*
x++ is same as x = x + 1

x+=5 is same as x = x + 5
x-=5 is same as x = x - 5
x*=5 is same as x = x * 5
x/=5 is same as x = x / 5
*/

//-------------------Comparison----------------------------

//We us these operators to compare the value of a variable with something else.
//These operators provide the result in a boolean value. It can either be true or false.

let a = 1;

//The fours operators below are also called "Relational Operators".
console.log(a > 0); // Greater than
console.log(a < 0); // Less than

console.log(a >= 0); // Greater than or equal to
console.log(a <= 0); // Less than or equal to 

//Equality Operators

    //Strict Equals To
    console.log(a === 1); 
    // Does not change the type of variables when comparing.
    //Ensures Type and Value is same on both sides.

    //Lose Equals To
    console.log(a == '1');  
    //Ensures Value is same on both sides.
    //If needed automatically converts the type of the right value to match the left value.
    // a == '1' , == will convert '1' to 1. Meaning change it from string to number type. As variable a is a number type.


    //Strict Not Equal To
    console.log(a !== 1); 
    // Does not change the type of variables when comparing.
    //Ensures Value is different on both sides. Does not change the Type of the variable.

    //Lose Not Equal To
    console.log(a != '1'); 
    //Ensures Value is different on both sides.
    //If needed automatically converts the type of the right value to match the left value.
    // a != '1' , != will convert '1' to 1. Meaning change it from string to number type. As variable a is a number type.


//-------------------Ternary or Conditional Operator----------------------------

let marks = 59;
let status =  marks >= 50 ? 'Pass' : 'Fail';
/* 
Ternary Operator Syntax: 
condition ? If Condition True Say This : If Condition False Say This
*/

//-------------------Logical Operators----------------------------

/*
We use these operators to make decisions based on multiple conditions.

    There are 3 types of Logical Operator:

    AND - &&
    OR - ||
    NOT - !
*/

// AND Operator - Returns True If Both Operands are True
let highIncome = true;
let goodCreditScore= true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

// OR Operator - Returns True If Even a Single Operand is True
highIncome = true;
goodCreditScore= false;
eligibleForLoan = highIncome || goodCreditScore;

console.log(eligibleForLoan);

//NOT Operator - Requires a boolean value to work. Converts the boolean to the opposite of whatever you give it.

applicationRefused = (!eligibleForLoan === true);

let opposite = true;
console.log(!opposite); //Will return false due to NOT operator.


//-------------------Logical Operators with Non-Boolean Operands----------------------------


/*
The result of Logical operators is not always in a boolean value; it depends upon
 the value  of opreands being used with the operator.
*/
console.log(true && 'Salman' );  //Salman
console.log(false && 'Salman' ); //false

console.log(false || 'Salman' ); //Salman
console.log(true || 'Salman' ); //true

console.log("not: " + !''); //falsy value ''
console.log("not: " + !5); //truthy value 5

/*
If a logical operator does not have a boolean value than the logical operators
check if a value is a Truthy or Falsey value.

    Falsey Values:
        undefined
        null
        0
        false
        ''
        NaN
    
    Truthy Values:
        Anything that is not falsy is a truthy value.
*/

console.log(false || 'Salman' || 5 ); //Salman
console.log(true || 'Salman' ); //true

/*
The OR operator stops executing as soon as it finds true/truthy value even
 if there are more operands on the right side. This is known as "SShort Circuting".
*/

let userColor = undefined; //Falsey Value
let defaultColor = black;

let currentColor = userColor || defaultColor;
console.log(currentColor); //returns black;

userColor = 'green'; //Truthy Value
currentColor = userColor || defaultColor;
console.log(currentColor); //returns green;


//-------------------BitWise Operators----------------------------

// 1 = 00000001
// 2 = 00000010
//OR
// R = 00000011
console.log(1 | 2);

// 1 = 00000001
// 2 = 00000010
//AND
// R = 00000000
onsole.log(1 & 2);

// Read, Write, Execute
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = (myPermission & readPermission) ? 'yes': 'no';
console.log(message);

//-------------------Operator Precedence----------------------------

/*
Operator Precedence is the order in which operators will be executed within
an expression.
*/
