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

// diff between error and exception. defnsive programming/ code stops when an error is thrown.
const person1 = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    set fullName(value) {

    if (typeof value !== 'string')
    throw new Error('Value is not a string.');

    const parts = value.split(' ');
    if (parts.length !== 2)
    throw new Error('Enter a first and last name.');

    this.firstName = parts [0];
    this.lastName = parts [1];
    }
    };

    try {
        person.fullName = null;
        }
        catch (e) {
        console.log(e);
        }
    console.log(person);