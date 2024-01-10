
// The following function is an anonymus function because it does not have a name.

var magic = function() {
    return new Date();
    };

//Whenever you have an anonymus function you can CONVERT IT TO AN arrow function

var magic = () => {
    return new Date();
    };

// If we are just have a single statement in the function
//than we do not even need the curly brackets.

var magic = () => new Date();

//=> Arrow Functions With Parameters

//Before
var myConcat = function(arr1, arr2) 
{
     return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));

//After

var myConcat = (arr1, arr2) => arr1.concat(arr2);  //concat() is a built in function
console.log(myConcat([1, 2], [3, 4, 5]));

//=> HighOrder Arrow Functions

/*

Arrow functions work really well with higher order functions such as map, 
filter, and reduce.

I’ll go into more detail at a different time about map, filter, and reduce.

 But the main thing to know is that they take functions as arguments for
  processing collections of data.

Whenever one function takes another function as an argument, 
that’s a good time for an arrow function.
*/


const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {

const squaredIntegers = arr. filter (num => Number.isInteger (num) && num > 0).map(x => x * x);
return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

/*
 In order to create more flexible functions you can use default parameters.
The default parameter kicks in when the argument is not specified or is undefined.
*/

const increment = (function() {
    return function increment (number, value = 1) {
    return number + value;
    };
    })();
    console.log(increment (5, 2));
    console.log(increment (5));

