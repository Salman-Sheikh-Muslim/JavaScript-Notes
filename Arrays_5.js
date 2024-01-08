
/*
An array created by const cannot be re-assinged how the array elements can be modified.

const numbers = [3,4]; 
numbers = []; //The is piece of code will produce a runtime error as we cannot re-assign an array created by using const.

*/

const numbers = [3,4]; 
console.log(typeof numbers) // Shows Object

//-------------------Adding Elements to an array.-----------------------------


//Adding Elements to the End of an array.-----------------------------

numbers.push(5,6); // Adds 5 and 6 to the end of the array.
console.log(numbers); //Shows [3,4,5,6]

//Adding Elements to the Start of an array.-----------------------------

numbers.unshift(1,2); // Adds 1 and 2 to the start of the array.
console.log(numbers); //Shows [1,2,3,4,5,6]

//Adding or Deleteing Elements within an array on the basis of a specific index (value) within the array..-----------------------------

numbers.slice(2, 0, 'a', 'b'); // Syntax array.slice(index, delete-items, add-items)
console.log(numbers); //Shows [1,2,3,'a','b',4,5,6]


//-------------------Finding Elements within an array.-----------------------------

/*
Finding elements in an array really depends upon what type of element
you are searching is it primitive or refrence type?
*/

//Primitice Types

const num = [1,2,3,4,5, true];
console.log(num.indexOf('a')); //Returns -1 as there is no string with value a in the num array.
console.log(num.indexOf('1')); //Returns -1 as there is no string with value 1 in the num array. There is a 1 in the num array however its type is number and the arrgument being passed in the index0f() is string type.
console.log(num.indexOf(3)); //Returns index = 2 because value 3 is on index 2 of the array.
console.log(num.indexOf(true)); //Returns index = 5 because value true is on index 5 of the array.

const nums = [1,2,3,1,4,5, true];
console.log(num.lastIndexOf(1)); //Returns index = 3 because value 1 was found last time at index = 3 in the array.

//Checking if an element exsits in the array

console.log(num.indexOf(3) !== -1); // -1 means value is not in the array.
console.log(num.includes(3)); //Returns ttrue if value exsits in the array.

/*
All of the index releated method have an optional second argument
that tells from which index to begin searching from within the index.
*/

//const nums = [1,2,3,1,4,5, true]; //defined above

/*
The first argument is a value and the second arguemnt is an index.
num.indexOf(3, 2)
*/
console.log(num.indexOf(3, 2)); // Returns index 2 as value 3 is in index 2.
console.log(num.indexOf(3, 3)); // Returns -1 (not found) even though we have 3 in the num array because it is searching from within the array starting from index 3 and skipping inexes between 0 - 2.


//Reference Types

/*

console.log(courses.includes({id:1, name: 'a'}));
The above line Shows false beaucse the object being passed in the includes method and the object in the courses array are 2 different objects with different address/refremce point.

When searching for something having a refrence type we need
to use the find() or findIndex() method.

To use the find() method; we pass it a function as an argument
and that function is called Predicate/CallBack Function 
because this function is called back as part of finding an
element within the array.

The find() method stop executing as soon as
a conditon becomes true. It is not necessary that it will traverse bettween
all the elements of the array.
*/
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}   
]

const course = courses.find(function(course) {
    return course.name === 'a'; //find() method returns the first element that matches the defined criteria
    });

console.log(course);

const course1 = courses.findIndex(function(course) {
    return course.name === 'a'; //findIndex() method returns the index of the first element that matches the defined criteria
    });

console.log(course1);


//-------------------Arrow Functions-----------------------------

/*
Whenever you want to pass a function as an argument or
use the CallBack function you can instead use Arrow Functions.
Its more eacy to use.

Arrow Functions were introduced by ES6.
*/

const course2 = courses.findIndex((course) => {
    return course.name === 'a'; 
});

const course3 = courses.findIndex(course => course.name === 'a' );

const course4 = courses.findIndex(() => course.name === 'a' );

console.log(course1);

//-------------------Removing Elements from an array.-----------------------------


const integer = [1,2,3,4];

console.log(integer.pop()); // Removes the last element from the array.
console.log(integer.shift()); // Removes the first element from the array.

const integers = [1,2,3,4];
console.log(integers.splice(2, 1)); //First argument is the index of the elment you want to delete. Second argument is the number of elements you want to delete starting from the index specified in the first argument.
console.log(integers.splice(0, 2)); //Deletes elements in indexes 0 and 1.


//-------------------Emptying an array.-----------------------------

let numbersInt = [1, 2, 3, 4];
let another = numbersInt; //pointing another to the same address as numberInt

// Solution 1
numbersInt = []; //re-pointing numbersInt to a new address.
//NOT SURE - This solution does not work if you have multiple refrencess pointing to the original array.
console.log(numbersInt);

//If you have multiple refrences to the original array than you can use the following solution:
//All the following solution modify the oeriginal array.
// Solution 2
numbers1 = [1, 2, 3, 4];
numbers1.length = 0;
// Solution 3
numbers2 = [1, 2, 3, 4];
numbers2.splice(0, numbers2.length);
// Solution 4
numbers3 = [1, 2, 3, 4];
while (numbers3.length > 0) {
    numbers3.pop();
}


//-------------------Combining And Slicing arrays.-----------------------------

/*
When using concat() and slice() with primitive values in the array than the values
are copied from the source array to the target array.

If you are detailting with objects in the array the objects themselves are not copied
their refrences are copied.
*/
const first = [1, 2, 3];
const second = [4, 5, 6];
const third = [{id: 1}];

const combined1 = second.concat(third); //As third has a object type value its refrence is copied in the combined array.
third[0].id = 10;
console.log(combined1) //Sows [{id:10}, 4, 5, 6]

const combined = first.concat(second);

const slice = combined.slice(2, 4); //Shows [3,4] does not have index 0
console.log(combined);
console.log(slice);

const slice1 = combined.slice(2); //Shows [3,4,5,6] does not have index 0
console.log(slice1);

const slice2 = combined.slice(); //Creates a copy of the array
console.log(slice2);


//-------------------Spread Operator (ES6)- Combining Arrays-----------------------------

const first1 = [1, 2, 3];
const second1 = [4, 5, 6];

// const combined = first.concat(second);
const combined3 = [...first, 'a',...second, 'b']; //Provides more flexibility and ease when combining arrays.

// const copy = combined.slice();
const copy = [...combined3];


//-------------------Iterating an Arrays-----------------------------

/**
 for...of loop

 forEach()
 */
const numberss = [1, 2, 3];

for (let number of numberss) { //cannot use the indexes of elements in the array with For...of loop.
console.log(number);
}

numbers.forEach(function(number) { 
    console.log(number);
});

numbers.forEach((number, index) => console.log(index, number)); //forEach() allows you to add the index of the elements in an array in the argument.


//-------------------Joining Arrays-----------------------------

/*
The join() method takes each element in the array and combines
those elments within a single string. It asks for a charachter
to use as a separator.

The split() method takes a string and splits it into elements within
an array. It splits on the basis of a charachter you provide. Usually
the character is blank space.
*/
const numbers5 = [1, 2, 3];
const joined = numbers5.join(',');  

console.log(joined); //Shows "1,2,3"

//You can use the method described below to create URL Slugs
const message = 'This is my first message';

const parts = message.split(' '); 
console.log(parts); //Shows [ 'This', 'is', 'my', 'first', 'message' ]

const combined4 = parts.join('-'); 
console.log(combined4); //Shows "This-is-my-first-message"


//-------------------Sorting Arrays-----------------------------

//Primitive Types

const Sorting = [2, 3, 1];
Sorting.sort();  // The sort() method converts each element in the array to a string and than sorts the elements in the array.
console.log(Sorting);

const Sorting1 = [3, 'a', 2, 5, 'b',  1];
Sorting1.reverse(); //The reverse method makes the left side of the array right and right side of the array to left.
console.log(Sorting1);// Shows [ 1, 'b', 5, 2, 'a', 3 ]


//Reference Types

const coursess = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' },
    ];
    coursess.sort(function(a, b) { // the sort() method behind the scenes optional takes an argument and thats a function that is used for comparsion.    
    // a < b => return -1 
    // a > b => return 1
    // a === b => return 0
    if (a.name < b.name) return -1;  // a should come before b
    if (a.name > b.name) return 1;   // a should come after b
    return 0; //Order remains Unchanged
    });
    console.log(coursess); //Shows [ { id: 2, name: 'JavaScript' }, { id: 1, name: 'Node.js' } ]


    const coursess1 = [
        { id: 1, name: 'Node.js' },
        { id: 2, name: 'javaScript' },
        ];

coursess1.sort(function(a, b) { 
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
        });
        console.log(coursess1); //Shows [ { id: 1, name: 'Node.js' }, { id: 2, name: 'javaScript' } ]
/*
The reason captial N is being Showed first rather than small j is
because in programming languages each letter is represnted by a
ASCII number.

Captial letters have a smaller ASCII number than small letters.

N => 78 ASCII
j => 106 ASCII
*/

//Removing Case-Sensitivity When Sorting

const coursess2 = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'javaScript' },
    ];

coursess2.sort(function(a, b) { 

    //By adding the following to lines below we remove the case-sensitivity issue in the array when its being sorted.
    const nameA = a.name.toUpperCase();  
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
    });
    console.log(coursess2); //Shows [ { id: 2, name: 'javaScript' }, { id: 1, name: 'Node.js' } ]


//-------------------Arrays - Every and Some Method-----------------------------

const numbersss = [1, 1, 2, 3];
/* 
every() - checks if all elements meet the condition within the array.
If even a single element result in condition being false it stop traversing
the rest of the array and returns false.

some() - checks if even a single elment within the array satifies the conditon;
as soon as that element is found it stops traversing the rest of the array.
*/

const allPositive = numbersss.every(function(value){
    return value >= 0; });
console.log(allPositive);

const atleastOnePositive = numbersss.some(function(value){
     return value >= 0; });
console.log(atleastOnePositive);


//-------------------Arrays - Filteting Arrays by using filter()-----------------------------

/*
The filter() method traves an array and looks for elements that are valid
for a specific search condition. It check each element one by one and adds
the elements that satisfy rhe search criteria into a new array. 

The filter() method traverses the whole array regardless of the outcome.
*/
const numbers6 = [1, -1, 2, 3];
const filtered = numbers6.filter(value => value >= 0);
console.log(filtered);

/*
In real we mostly deal with arrays filled with objects for example:
Consider you have an array containing objects of restuarants. Each
resturant object has a property of working_hours.

You need to apply a filter to check which restuarnats are currently open.
*/


//-------------------Arrays - Mapping Array or array elements by using map() method-----------------------------

//Primitive Types
const numbersa = [1, -1, 2, 3];
const filteredd = numbersa.filter(n => n >= 0); 
const items = filteredd.map(n => '<li>' + n + '</li>')

const html = '<ul>' + items.join('') + '</ul>'; //By efault join() uses comma as a searator

console.log(html); //Shows <ul><li>1</li><li>2</li><li>3</li></ul>

//Refrence Types
const itemsObj = filteredd.map(n =>{ //Very useful for building real-world applications
    const obj = {value: n};
    return obj;
});

console.log(itemsObj); //Shows [ { value: 1 }, { value: 2 }, { value: 3 } ]

const itemsObj1 = filteredd.map(n =>{ 
    return {value: n}; 
});

console.log(itemsObj1); //Shows [ { value: 1 }, { value: 2 }, { value: 3 } ]

/*
const itemsObj2 = filteredd.map(n => ({value: n}) );

When using oject/refrence type in map() method and you only have 
1 line of code to execute such as '{value: n}' using it in the arrow
function will not work corectly beacuse instead of thinking its an object
the JavaScript engine will assume that the curly brackets represent a code block
so in order to avois that you need to add () parenthesis around the curly brackets
'({value: n})'.
*/

const itemsObj2 = filteredd.map(n => ({value: n}) );

console.log(itemsObj2); //Shows [ { value: 1 }, { value: 2 }, { value: 3 } ]


/*
The filter() and map() method do not modify the original array.
These methods are chainable meaning we can call them one after another,
*/

//Chaining filter() and map() method

const numbersb = [1, -1, 2, 3];

const chain = numbersb
    .filter(n => n >= 0)  
    .map(n => ({value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value); //When Chaining its a convention to use each method on new line.

console.log(chain); //Shows [ 2, 3 ]


//-------------------Arrays - reduce() method - reducing-----------------------------

const numbersRed = [1, -1, 2, 3];
let sum = 0;

for (let n of numbersRed)
    sum += n;

console.log(sum);

/*
reduce() method reduces all the elements into a single element.
The reuturned element can be of any type it can be a number, string, object etc.

It adds elements 1 by 1. It has a accumulator argument and currentValue argument.
The accumulator by default has the value of the 0 index.
The currentValue has the value of 1st index.

If you set accumulator to value 0 than currentValue has the value of 0 index.
*/

// a = 0 , c = 1 => a = 1
// a = 1 , c = - 1 => a = 0
// a = 0 c = 2 => a = 2
// a = 2 c = 3 => a = 5
const sum1 = numbersRed.reduce((accumulator, currentValue) => {
return accumulator + currentValue;
}, 0);

console.log(sum1);

// a = 1 , c = - 1 => a = 0
// a = 0 c =2 Rightarrow a = 2
// a = 2 c = 3 => a = 5
const sum2 = numbersRed.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    });

console.log(sum2);

const sum3 = numbersRed.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum3);
