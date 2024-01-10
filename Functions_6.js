//-------------------Function Declaration and Function Expression----------------------------

// Function Declaration
function walk() { 
    console.log('walk');
}
// Anonymous Function Expression
const run = function() {
console.log('run');
};

let move = run; //move and run are now refrencing to the same anonymous function which is 1 object in the memory.
run();
move();

// Named Function Expression
const runs = function runFunc() {
    console.log('run');
    };
    

//-------------------Hoisting And Difference between Function Declaration and Function Expression----------------------------

/*
We can call a Function that is defined by using the Function Declaration Syntax before its defination because
of Hoisting.

When our JavaScript Engine executes the code it moves all the Function Declarations to the top and this
is called Hoisting.
*/
walking(); //We can call a Function that is defined by using the Function Declaration Syntax before its defination.

// Function Declaration
function walking() { 
    console.log('walk');
}

//running();  //We cannot call a Function that is defined by using the Function Expression Syntax before its defination.


// Anonymous Function Expression
const running = function() {
console.log('run');
};

//-------------------Arguments in Function----------------------------

function sum1(a, b) {
    return a + b; // 1 + undefined
    }
    console.log(sum1(1));
    console.log(sum1(1,2,6,8));

/*
Every function in JavaScript has a special object called arguments.
It kind of looks like an array but its not am array its an oject.
The keys we have in this object are the indexes of the arguments
that we passed inside the function.

The argument object has an iterator meaning it caan be used with for...of loop.
*/

function sum() {
    let total = 0;
    for (let value of arguments) //The argument object has an iterator meaning it caan be used with for...of loop.
    total += value;
    return total;
    }
    console.log(sum(1, 2, 3, 4, 5, 10));

//-------------------Rest Operator----------------------------

/*
The rest and spread operator both have the ... 3 dots symbol.
The spread operator is used with arrays.
The rest operator is used in function arguments and it must be 
the last argument in the function.
*/
function sum2(...args) {
    return args.reduce((a,b) => a + b);
   // console.log(args);
    }
    console.log(sum2(1, 2, 3, 4, 5, 10));

//function sum3(discount, ...prices, someValue) //This line will produce a runtime error because the rest operator should be the last argument within a function.
function sum3(discount, ...prices) {
const total = prices.reduce((a, b) => a + b);
return total * (1 - discount);
}
console.log(sum3(0.1, 20, 30));


//-------------------Default Parameters----------------------------

function interest (principal, rate = 3.5, years =5) { //ES6 allowed us to assign a default value to an argument within the () parenthesis of the function.
  //  rate = rate || 3.5;
  //  years = years || 5;
    return principal * rate / 100 * years;
    }

    console.log(interest(10000, 6.7, 5)); //If a value for a specific parameter is not given here than the default value is used.

/*
When assigning default value to an argument in a function; its a good
practice to make that specific argument be the last qrgument in the function.

If you assign a default value to a argument thats in the middle than its a
good practice to assign default value to all the arguments after it.


function interests (principal, rate = 3.5, years) { //Not Good
    return principal * rate / 100 * years;
    }

    console.log(interests(10000, undefined, 5)); //This does not look good to avoid this either make the years have a default value or make rate the last argument in the function.

*/


//-------------------Getters and Setterss----------------------------

/*
Getters and Setters are a special kind of method in objects.
*/

const person = {
    firstName: 'Salman',
    lastName: 'Sheikh',
    fullName() {
    return `${person.firstName} ${person.lastName}`;
    }
    };

    console.log(person.fullName()); //This is read only.

    //----------------

    const persons = {
        firstName: 'Salman',
        lastName: 'Sheikh',
        get fullName() {
        return `${persons.firstName} ${persons.lastName}`;
        }
        };
        persons.fullName = 'John Smith';
        // getters => access properties - get keyword can be added with a property or method.
        // setters => change (mutate) them - set keyword can be added with a property or method.
        //setters allow you to change the value of a property outside the declaration of the object.
        console.log(persons.fullName); //get keyword allows us to set fullName() method as a getter and access the method as a property.

          //----------------

    const personss = {
        firstName: 'Salman',
        lastName: 'Sheikh',
        get fullName() {
        return `${personss.firstName} ${personss.lastName}`;
        },
        set fullName(value) {
            const parts = value.split(' ');
            this.firstName = parts[0];
            this.lastName = parts[1];
        }
        };

        personss.fullName = 'John Smith';
      
        console.log(personss);


//-------------------Try and Catch - Error Handling ----------------------------

/*
Defensive programming is a  style of programmming in which exception handling
at the tart of a function or method.

 let e = new Error(); //This is a plain object
 throw e //When we use the throw keyword with the object it becomes an exception.

 When a error is thrown it also needs to be catched.

 The piece of line that can throw an exception needs to be wrapped around a 
 try block. Try block can have one or more statements. 1 of these statments atleast 
 can throw an exception.

 When an error is thrown its passsed as an argument to the catch block.
*/

// diff between error and exception. defnsive programming/ code stops when an error is thrown.
const person1 = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    set fullName(value) {

    if (typeof value !== 'string')
    throw new Error('Value is not a string.');

    const parts = value.split(' ');
    console.log(parts);
    if (parts.length !== 2) //Deals with an empty string
    throw new Error('Enter a first and last name.');

    this.firstName = parts [0];
    this.lastName = parts [1];
    }
    };

    try {
        person1.fullName = 'John Smith';
        }
        catch (e) {
        console.log(e);
        }
    console.log(person1);


    //-------------------Local VS Global Scope----------------------------

/*
Local variables take precedence over global variables.

Avoid defining global variables as much as possible.
*/
const global = 'I can be accesed globally'; //Can be accessed everywhere has a global scope.

function start() {
const message = 'hi'; //This variable cannot be accessed outside of the function

if (true) {
const another = 'bye'; //This variable cannot be accessed outside of the if block
const message = 'bye'; //This variable cannot be accessed outside of the if block 
/*
The if block has its own variable named message, and within this block, it prioritizes
its local message variable over the outer function's message variable. Outside of this
block, the outer function's message variable remains unaffected.
*/
console.log(message);
console.log(global);
}

for (let i = 0 ; i < 5; i++) {
console.log(i) ;
}


}

start();


//-------------------Let Vs Var----------------------------

function start() {
for (var i = 0; i < 5; i++) {
if (true) {
var color = 'red';
let color1 = 'red';
}
}
console.log(color);   //variables defined with var are function-scoped in JavaScript
//console.log(color1); will give a error at runtime because variables defined with let cannot be accessed outside of the block they are defined in.
}
// var => function-scoped
// ES6 (ES2015): let, const block-scoped
start();



var globals = 5; 
//console.log(window.globals);
/*When we create a variable using var outside of a function that variable
becomes a global variable and its attaced to the window object in browser.

Global variable defined by let and const are not attached to the window object.

Browsers have a window object its a complex object with lots of properties
and methods. It is usually used a lot when building Frontend applications.

It is bad to attach something to the window object because window object is
something centeral there is only one instance of the window object and lets
say you are using a third party library. If that third-party library also have
a variable with the same name that variable can overwrite your variable.
So you should avoid addind stuff to the window object.
*/


//-------------------This Keyword----------------------------

/*
this keyword refrences the 'object' that is executing the current function.

A function that is defined within an object is called method.

In a method (this) refrences an object. 
In a regular function (this) refrences to the gloabal object which is
the 'window' object in browsers and the 'global' object in Node.

method => obj
function or CallBack => (window, global)
*/

//method => obj
const video = {
    title: 'a',
    play() {
    console.log(this);
    }
    };

    video.stop = function() {
    console.log(this);
    };

    video.play();
    video.stop();

//function => (window, global)

function playVideo() {
    console.log(this);
    }
    
    playVideo();


//Constructor Function => (the new empty object defined by using the new operator)

function Video(title) {
    this.title = title;
    console.log(this);
    }

    const v = new Video('b');
    /*
    The 'new' operator creates a new empty object and sets the 'this' in
    the Constructor function to point to the new empty object.
    */


    const video = {
        title: 'a',
        tags: ['a', 'b', 'c'],

        showTags() {
        this.tags.forEach(function(tag) { 
            console.log(this, tag); //In this line 'this' keyword is refrencing to the window/global object.
        });
        },

        showTagss() {
            this.tags.forEach(function(tag) { 
                console.log(this, tag); //In this line 'this' keyword is refrencing to the object passed as a second argument in forEach() Method.
            }, {firstName : 'Salman'});
            },

        showTagsss() {
            this.tags.forEach(function(tag) { 
                console.log(this.title, tag); //In this line 'this' keyword is refrencing to the this passed as a second argument in forEach() Method and that this is pointing to the object.
            }, this);
            }

        };

        video.showTags();


//-------------------Changing This Keyword----------------------------

/*
Suppose we cannot pass a second argument in forEach() Method that
what can we do?
*/

const videos = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
    const self = this; //Do not use this approach there is a better way to do it. Its done below.
    this.tags.forEach(function(tag) {
    console.log(self.title, tag);
    });
    }
    };
    videos.showTags();


    //------

    function playVideo(a, b) { 
        console.log(this);
    }

    /*
    The only difference between call() and apply() is how the parameters are passed
    into them.

    The first parameter in both is a object. 
    In call() the other parameters are passed 1 by 1.
    In apply() the other parameters are passed as an array.
    */

    /*
    All the 3 moethds below change the value of 'this' in a regular/call-back function
    */
    playVideo.call({ name: 'Mosh' }, 1, 2);
    playVideo.apply({ name: 'Mosh' }, [1, 2]);
    playVideo.bind({ name: 'Mosh' })(); // Does not call the playVideo funnction; instead it returns a new function
    playVideo();


    const video2 = {
        title: 'a',
        tags: ['a', 'b', 'c'],
        showTags() {
        this.tags.forEach(function(tag) { console.log(this.title, tag);
        }.bind(this)); //using a bing method is a good way to do this however there is a better way to do it.
        }
        };
        video2.showTags();


//Using Arrow Functions (introduced by ES6)

/*
The good thing about Arrow Functions is that they inherit the 'this' value from
the containing function.
*/

const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
    this.tags.forEach(tag =>  console.log(this.title, tag)); 
    }
    };

    video3.showTags();