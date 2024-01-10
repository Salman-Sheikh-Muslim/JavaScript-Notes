// => Single Line Comment

var number = 5; // in line comment

// => Multi Line Comment

/*  
Hi, How are you today?
*/

//------------------------------------------------------------------------------

// => Data Types

// Undefined, null, boolean, string, symbol, number, and object

//------------------------------------------------------------------------------

// => Variables

// There are three ways you can declare variables in JavaScript

var Name = "Salman Sheikh"  // global variable

Name = 12 //override

let Company_Name = "What We lyke?" // local variable

const pi = 3.14 // Fixed value cannot be changed.

//------------------------------------------------------------------------------

// => Declaring Variables

var a;
console.log(a);
//------------------------------------------------------------------------------

// => Assigning Variables

var b = 2;

a = 7; //a variable is already declared

b = a;
//------------------------------------------------------------------------------

/* Note: Adding semicolon at the end of a line is a 
best practice and it is recommended by many people. 
Remm=ember it is not requireed just recommended */

//------------------------------------------------------------------------------

// => How to view things in console?

console.log(a);

//------------------------------------------------------------------------------

/* 
Note: Varaibles whose values are undefined means that 
those variables are uuninitailzed.

Example:

var c;

*/

//------------------------------------------------------------------------------



/* Variable names and function names in Javascript are case sensitive.
 That means that capitalization matters. */

 //variable 'a' is different than variable 'A'

 var a;
 var A;

 //------------------------------------------------------------------------------

 // => Basic Math

 var sum = 10 + 10;
 console.log(sum);

 var difference = 30 -15;
 console.log(difference);

 var multiply = 10 * 3;
 console.log(multiply);

 var quotient = 9/3;
 console.log(quotient)

  //------------------------------------------------------------------------------

 // => Increment and Decrement

 var a = 1;

 a = a + 1; //Increment
 a++;

 a = a -1; //Decrement
 a--;

   //------------------------------------------------------------------------------

 // => Decimal / Floating point numbers

 var dec = 1.1;
 
 var product =  3.1 * 5.3;
 console.log(product);

 var quotient = 3.1 / 7.9;

 var remainder = 11 % 3;
 console.log(remainder)

 /* 
 The remainder operator is often used to 
 determine if a number is even or odd.

If you can divide a number by 2 and the remainder is 0,
 that means the number is even.
  */

 //------------------------------------------------------------------------------

 // => Compound Assignment with Augmented adition/subtraction

var a = 3;

a = a + 7; // OR
a += 7;

a = a - 7;
a -= 7;

a = a * 4;
a *= 4;

a = a / 9;
a /= 9;

//------------------------------------------------------------------------------

 // => String

 /* 
String Literals '' , "" , ``
 */
 var a = 'Hi';
 var b = "my";

 // How to add quotes in strings?

var quotes = " I love \"Pakistan\".";
console.log(quotes);

var quotes = ' I love "Pakistan".';

var quotes = `'I love "Pakistan".'`;

//------------------------------------------------------------------------------


//=> Escape Sequnces in  String

/*
\' single quote
\" double quote
\\ back slash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed  

*/

var myStr = "First  Line\n\n\\Second Line\nThird Line"
console.log(myStr)

// => String Concationation
var c = "I am a";
c = c + " String!";
console.log(c);

var ourStr = "I come first. ";
ourStr =+ "I come second.";

//------------------------------------------------------------------------------


// => String Concationation with Variable
var c = "My name is ";
var names = "Salman.";
c = c + names + " I am from Pakistan";
console.log(c);

var ourStr = "I come first. ";
ourStr =+ "I come second.";

var me = 'I';
var heart = " love";
me += heart;

//------------------------------------------------------------------------------

// => Finding length of a String

var sentence = "I love you. Do you love me?";
sentence_Length= sentence.length;
console.log(sentence_Length);
 
// => Finding charachters in a String

finding = sentence[0]; //0 based Indexing

// => String Immutability

/* 
Strings are immutable, meaning they cannot be altered once created.
This does not mean that they cannot be changed, 
just that the individual characters of a string literal cannot be changed.
*/
var text = "Jelllo World";

text[0] = "H"; // Logical Error The line will w=execute however it will not change the string.

/*
var a = "t";
console.log(a); -- t
a[0] = "s";
console.log(a); -- t
a = "s";
console.log(a); -- s
*/
text="Hello World;"

//=> Find last charachter in a String

last_char = text[text.length -1]
last_char = text[text.length -3] //3rd to olast letter

//------------------------------------------------------------------------------

// => Arrays

var myArray = ["Salman" , 23];

var Nested_Array = [["Hi" , 2], ["Salman!" , 7]]; //Nested Array

var Num_Array = [50,60,70];
var index_1 = Num_Array[1];
console.log(index_1);


//=> Modify Array Data

Num_Array[1] = 9;
console.log(Num_Array);

var Multi_Num_Array = [[1,2,3], [4,5,6], [7,8,9]];

var check = Multi_Num_Array[2][1]; // Row and Column

//=> Manipulate Arrays with Push()

var Sen_Array = ["My" ,"Name"];;
Sen_Array.push(["is" , "Salman" , "."]); //will add these values to the end of the array.
console.log(Sen_Array);

//=> Manipulate Arrays with Pop()

var Sen_Array = ["My" ,"Name"];
Sen_Array.pop() // will remove the last element from he array.
// The Sen_Array will only have "My" in it.

//=> Manipulate Arrays with Shift()

var Sen_Array = ["My" ,"Name"];
Sen_Array.pop() // will remove the first element from he array.
// The Sen_Array will only have "Name" in it.

//=> Manipulate Arrays with Unshift()

var Sen_Array = ["My" ,"Name"];;
Sen_Array.unshift(["is" , "Salman" , "."]); //will add these values to the start of the array.
console.log(Sen_Array);

//------------------------------------------------------------------------------


//=> Shooping List

var My_List = [["cereal" , 3], ["milk", 2], ["apple" , 12], ["potatoes"]]

//------------------------------------------------------------------------------


//=> Function

function ourReusableFunction(){

    console.log("Hi, everyone");
}

ourReusableFunction();

function BASIC_MATH(a, b){

    console.log(a-b);
}

BASIC_MATH(10, 5);

//------------------------------------------------------------------------------

/* 
[Global Scope and Functions] 
Scope refers to the visibility of variables.
 Variables which are defined outside of a function block have global scope.
Global scope means they can be seen everywhere in your Javascript code.
*/

//------------------------------------------------------------------------------


//=> Return Statement

  function subtract(num){

    return num - 4;
  }

  var save = subtract(6);
  console.log(save);

  //------------------------------------------------------------------------------


//=> Simulating a queue

   function nextInLine (arr, item) {
    // Your code here
    arr.push(item);
    
    
    
    }
    
    var testArr = [1,2,3,4,5];
    
    return arr.shift();
    console.log("Before: " + JSON.stringify(testArr));
     console.log(nextInLine(testArr, 6));
    console.log("After: " + JSON.stringify (testArr));

     //------------------------------------------------------------------------------

     
     //=> Boolean

     function welcomeToBooleans() {
      return true;
      }

//------------------------------------------------------------------------------

     
     //=> if else statement

     function trueOrFalse (wasThatTrue) {
      if (wasThatTrue) {
      return "Yes, that was true";
      }
      return "No, that was false";
      }
      console.log(trueOrFalse (true));

//------------------------------------------------------------------------------

     
//=> Equality Operator

function testEqual(val) {
  if (val == 12) { 
  return "Equal";
  } return "Not Equal";
  }
  // Change this value to test 
  console.log(testEqual(10));

  //------------------------------------------------------------------------------

     
//=> Strict Equality Operator

/*
We learned about the equality operator which is the double equal == sign.
 There’s also the strict equality operator, the triple equal sign ===.

So, here we're checking if 3 equals 3 with the strict equality operator.

So, the difference is that the equality operator, 
the double equals sign attempts to convert both values 
being compared to a common type while the strict equality operator
 does not do the type conversion. So, this is going to evaluate to true,
  the 3 === 3.

But the 3 === ‘3’ with the string on the side is going to evaluate to false.
Both of these would be true if we were using the double equals sign == because
 the string would be converted to a number and it would be equal to true.
But with the === it does not get converted to a number, so it would be
 evaluated to false 
*/

// Setup
function testStrict (val) {
  if (val === 7) { // Change this line return "Equal";
  } return "Not Equal";
  }
  // Change this value to test 
  testStrict(10);
  /*
  3 == 3
  3 === 134
  */

  //Comparison between the Equality Operators

  // Setup
function compareEquality (a, b) {
  if (a == b) { // Change this line 
    
    return "== Equal";
  } 

  if (a === b) { // Change this line 
    
    return "=== Equal";
  } 
  return null;


  }
  // Change this value to test
  console.log(compareEquality (10, "10"));

//------------------------------------------------------------------------------

     
//=>  InEquality Operator (performs type conversion)

// Setup
function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  } return "Equal";
  }
  // Change this value to test
  console.log(testNotEqual(10));

  //=> Strict InEquality Operator (does not perform type conversion)

// Setup
function testNotEqual(val) {
  if (val !== 99) { 
    return "Not Equal";
  } return "Equal";
  }
  // Change this value to test
  console.log(testNotEqual(10));

  //------------------------------------------------------------------------------

     
//=>  Comparison Operators

// <, <= , >= , >

  function testGreaterOrEqual (val) {
    if (val > 100) {  
      return "Over 100";
    }
    if (val > 10) { // Change this line return "Over 10";
    }
    return "10 or Under";
    }
    // Change this value to test 
    console.log(testGreaterOrEqual(10));

    //---------
//------------------------------------------------------------------------------

     
//=>  AND, OR Operators

function testLogicalAnd(val) {
  // Only change code below this line
  if (val <= 50 && val >= 25) 
  {
     return "Yes";
    }
  return "No";
  }
  // Change this value to test testLogicalAnd(10);

  //----

  function testLogicalor (val) {
    // Only change code below this line
    if (val < 10 || val > 20 ) 
    { return "Outside"; }
    // Only change code above this line return "Inside"; }
    // Change this value to test 
    testLogicalor(15);
  }

  //------------------------------------------------------------------------------

     
//=>   else if statement

function testElseIf (val) {
  if (val > 10) {
  return "Greater than 10";
  } else if (val < 5) {
  return "Smaller than 5";
  } else {
  return "Between 5 and 10";
  }
  }
  // Change this value to test 
  testElseIf(7);

    //------------------------------------------------------------------------------

     
//=>   Switch statement

function prac_Switch(val){
  var ans = "";
  switch(val){

    case 1:
      ans = "alpha";
      break;

      case 2:
        ans = "beta";
        break;
    
        case 3:
          ans = "gama";
          break;

          case 4:
            ans = "delta";
            break;

            default: 
            ans = "stuff";
  }

 return ans;

}

console.log(prac_Switch(2));

//=> Multiple Inputs with same answer in  Switch statement

function sequentialSizes (val) {
  var answer = "";
  switch(val) {
  case 1:
  case 2:
  case 3:
  answer = "Low";
  break;

  case 4:
  case 5:
  case 6:
  answer = "High";
  break;
  }
  return answer;
  }
  // Change this value to test
  console.log(sequentialSizes (1));

      //------------------------------------------------------------------------------

     
//=>   Boolean

function isLess (a, b) {
  // Fix this code return a < b;
  }
  // Change these values to test
  console.log(isLess (20, 15));

  //=> ParseInt function (Converts string to numbers)

  function convertToInteger (str) {
    return parseInt(str);
    }
    convertToInteger ("56");

      //=> ParseInt function with Radix

      function convertToInteger (str) {
        return parseInt(str, 2)
        }
        convertToInteger ("10011");

    //=> Ternary Operator (Its like a one line if-else statement)

    // condition ? statement-if-true : statement-if-false;

    function checkEqual(a, b) {
      return a === b ? true : false; //Same operation
      return a === b;                //Same operation
      }
      checkEqual(1, 2);

//=> Nested -Multiple Ternary Operator

function checkSign (num) {
  return num > 0 ? "positive": num < 0 ? "negative" : "zero"
  }
  console.log(checkSign (10));

//=> Read Only Variable With Const KeyWord

/*
Const is another way to declare a variable.
 It has all the features of let but it’s also read-only.
You cannot reassign a const. 
*/
  
str = [1]
var sentence = str + " is cool!";
sentence = str + " is amazing!"
for (var i = 0; i < str.length; i+=2) { 
  console.log(sentence);
}

printManyTimes ("freeCodeCamp");

// freeCodeCamp is amazing!

str = [1]
const sentence = str + " is cool!";
sentence = str + " is amazing!"
for (var i = 0; i < str.length; i+=2) { 
  console.log(sentence);
}

printManyTimes ("freeCodeCamp");

//Error: SyntaxError: unknown: "sentence" is read-only 

/*
If you declare a variable with the const keyword you cannot reassign it afterwards.
This can be very helpful to prevent you from accidentally making mistakes later.
If you know for sure that you never want to reassign a variable,
always use const so you don’t accidentally reassign it when you don’t mean to.
Another thing is when you’re using const it’s very common to use all capital letters.
*/

    //=> Rest Operator (...)

    /*
    The rest operator allows you to create a function 
    that takes a variable number of arguments.
    */


//Before
const sum = (function() {
  return function sum(x, y, z) {
  const args = [ x, y, z ];
  return args.reduce((a, b) => a + b, 0);
  };
  })();
  console.log(sum(1, 2, 3)); 

//After

const sum1 = (function() {
return function sum1(...args) {
return args.reduce((a, b) => a + b, 0);
};
})();
console.log(sum1(1, 2, 3));

   //=> Spread Operator (...)

   /**
   
   The spread operator looks just like the rest operator.
Three dots. But it expands an already existing array.
Or it spreads out an array. So, it takes an array and 
spreads it out into its individual parts.

You can only use it in an argument to a function or in an array literal.
    */

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {

//arr2 = arr1; // points aar2 to the same memory location as arr1.
arr2 = [...arr1]; // Spread operater copies all od the content form arr1 to arr2 
arr1[0] = 'potato'
})();
console.log(arr2);


//=> [Understand the Differences Between import and require] 

/*In the past people would use the require function to import functions and code from other files.
3:20:35
But now we have import and export. You can export code in one file and then import it in another file.
3:20:41
It also allows you to only import certain functions from a file or certain variables.
*/

/*
You can export code in one file and then import it in another file.
3:20:41
It also allows you to only import certain functions from a file or certain variables.
*/

export const capitalizeString = str => str.toUpperCase(); //1st file

import { capitalizeString } from "./fileName" //2nd file
const cap = capitalizeString("hello!");
console.log(cap);

//-----

const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1) }
  export { capitalizeString };
  
  export const foo = "bar";
  const bar = "foo";

  //[Use * to Import Everything from a File]

  import * as capitalizeStrings from "capitalize_strings"; // capitalizeStrinds is an object's name

  // [Create an Export Fallback with export default]

  export default function subtract(x,y) {return x - y;F} // use default onle when you neeed to export a single thing from a file

  //Importing a defualt export

  import subtract from "math_functions"; //for a default export when importing it you do not need to use curly brackets for it.
subtract (7,4);
