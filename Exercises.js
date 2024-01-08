//-------------------Swapping Variables----------------------------

let a = 'red';
let b = 'blue';

let c = a;
    a = b;
    b = c;

console.log('a: ' +a);
console.log('b: ' +b);

//-------------------Function that returns the maximum number between 2 numbers----------------------------

// function max_numbers(a, b){
//     return a>b ? 'A is Greater' : 'B is Greater';
// }

function max_numbers(a, b){
    return a>b ? console.log('A is Greater') : a<b ? console.log('B is Greater') : console.log('A and B are Equal');
}

max_numbers(9,3);


// function max_numbers(a, b) {
//     if (a > b) {
//         return console.log('A is Greater');
//     } else if (a < b) {
//         return console.log('B is Greater');
//     } else {
//         return console.log('A and B are Equal');
//     }
// }

// max_numbers(10,10);

//-------------------Function that tells the orientation of the screen----------------------------

function screenOrientation(width, height){
 return width>height ? console.log('Landscape') : console.log('Portrait');
}

screenOrientation(78, 80);

function isLandscape(width, height){
    return (width>height); // We do not need to explicity mention true and ekse fase over here.
   }
   
  console.log(isLandscape(78, 80));

//-------------------Function that tells the orientation of the screen----------------------------

const output= fizzBuzz(11);
console.log(output);

function fizzBuzz(a){
    
    if(typeof(a) !== 'number'){
        return 'Not A Number';
    }
    else if(a%3 === 0 && a%5 === 0){
        return 'FizzBuzz';
    }
    else if(a%3 === 0){
        return 'Fizz';
    }
    else if(a%5 === 0){
        return 'Buzz';
    }
    else if(a%3 !== 0 || a%5 !== 0){
        return a;
    }

} 


const output1 = fizzBuzz1(7);
console.log(output);

function fizzBuzz1(input) {
    if (typeof input !== 'number')
        return NaN;
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';
    if (input % 3 === 0) 
        return 'Fizz';
    if (input % 5 === 0) 
        return 'Buzz';
    return input;
}

//-------------------Speed Limit Function----------------------------

function checkingCurrentSpeed(speed){
    
    const speedLimit = 70
    const every5km = 5; //you will recieve a point every 5km per our speed if you are aboe 70.
    if(speed < (speedLimit + every5km)){
        return 'OK';
    }

    if(speed>70){
        const points = Math.floor((speed - 70)/every5km)
        if(points > 12){
            return 'Your Licensce is suspended. \nPoints: ' + points;
        }
        return 'You have ' + points + ' points.';
    }
}

console.log(checkingCurrentSpeed(75));

//-------------------Function Even & Odd Numbers----------------------------

function evenOrOdd(limit){
  
    for(let i = 0; i<=limit; i++){
        (i%2 === 0) ? console.log(i + ' Even') : console.log(i + ' Odd');
    }
    return ;
}

evenOrOdd(10);


//-------------------Function Count Truthy and Falsy Values in An Array----------------------------

//There is a better way you can write the code for this function its listed below.
function countingTruthyFalseyValues(array){
    let countingTruthy = 0;
    let countingFalsey = 0;
    for(let index of array){
        if(index === undefined || index === null || index === 0 || index === false || (typeof index === 'string' && index.trim() === '')  ||  (typeof index === 'number' && isNaN(index))){
            countingFalsey++;
        }
        else{
            countingTruthy++;
        }
    }
    console.log('The following array has ' + countingTruthy + ' Truthy values and ' + countingFalsey + ' Falsey Values');
}

let array = [undefined, null, 0, false, '' , null, NaN, 1, true, 'love', 51, NaN];
countingTruthyFalseyValues(array);


//Better Way to do the above code.

function countingTruthyFalseyValuesEasy(array){
    let countingTruthy = 0;
    let countingFalsey = 0;
    for(let index of array){
        if(index){
            countingTruthy++;
        }
        else{
            countingFalsey++;
        }
    }
    console.log('The following array has ' + countingTruthy + ' Truthy values and ' + countingFalsey + ' Falsey Values');
    return;
}


array = [undefined, null, 0, false, '' , null, NaN, 1, true, 'love', 51, NaN];
countingTruthyFalseyValuesEasy(array);

//-------------------Function - Show String properties of an object----------------------------

function stringProperties(obj){

    for(let prop in obj){
        if((typeof obj[prop]) === 'string'){
            console.log(prop + ': ' + obj[prop]);
        }
    }
}

let human = {
    name: 'Salman',
    age: 23,
    Address: 'Rawalpindi',
    eyes: 2
};

stringProperties(human);

//-------------------Function - Add Multiples of Two Numbers----------------------------

let number1 = 3;
let number2 = 5;
let limitToNumber = 10;

function addingMultiplesFun(a , b, c){
    let AddingMultiples = 0;
    for(let i = 1; i<=c; i++){
        if((a * i) <= c){
            AddingMultiples+=(a*i);
            //console.log(AddingMultiples);
        }
        if((b * i) <= c){
            AddingMultiples+=(b*i);
            //console.log(AddingMultiples);

        }
    }
    return AddingMultiples;
}

console.log(addingMultiplesFun(number1, number2, limitToNumber));

//Another way to write the same function

function sum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++)
     if (i % 3 === 0 || 1 % 5 === 0)
        sum += i;
    return sum;
    }


//-------------------Function - Calculate Grades----------------------------

function calculatingGrade(array){
    let totalSubjects = 0;
    let totalMark = 0;
    let Average = 0;
    for(let marks in array){  //Bad loop used. Its better to use For...od loop for arrays
        totalMark+=array[marks]
        totalSubjects++;
    }
  //  console.log(totalSubjects);
   // console.log(totalMark);

    Average = totalMark/totalSubjects;

    if(Average>=90) console.log('A');
    else if(Average>=80) console.log('B');
    else if(Average>=70) console.log('C');
    else if(Average>=60) console.log('D');
    else console.log('F');

    return;
}

let marksOfStudent = [79, 94, 57, 82, 53, 71];
calculatingGrade(marksOfStudent);


//Another Way

/*
In this way we have created 2 functions in oreder to ensure, only one task
is being done by each function.
This is called single-responsibility-principle.
*/
function calculateGrade (marks) {
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80)
    return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
    sum += value;
    return sum / array.length;
}

//-------------------Function - Showstars ----------------------------


function showStars(rows){
    for(let i=1; i<=rows; i++){
        let star = ''
        for(let j=1; j<=i; j++){
                star+='*';
        }
    console.log(star);
    }
    return;
}

showStars(8);

//-------------------Function - Prime Numbers ----------------------------


function showPrimes (limit) {

for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0){
            isPrime = false;
            break;
        }
    }
if (isPrime) console.log(number);
}
}

//Modualirizing the code


function showingPrime(limit){
    for(let number = 2; number<=limit; number++){
        isPrime(number);
    }
}


function isPrime(number){
    for(let factor = 2; factor<number; factor++){
        if (number % factor === 0){
            return false;
        }
    }
    return true;
}

showingPrime(50);


//-------------------Address Object and Show Address Function----------------------------

let addressObj = {
    street: 26,
    city: 'Rawalpindi',
    zipCode: 46110
};

function showAddress(address){
    let completeAddress = '';
    for(let key in address){
      completeAddress+= address[key] + ' ';
    }
    return completeAddress
}

console.log(showAddress(addressObj));

//-------------------Intializing Factory and Constructor Function for Address----------------------------

function facAddress(street, city, zipCode){
    return{
        street,
        city,
        zipCode
        };
}

let facAddressObj = facAddress(26, 'Rawalpindi', 46330);
console.log(facAddressObj);


function ConAddress(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let conAddressObj = new ConAddress(26, 'Rawalpindi', 46330)
console.log(conAddressObj);


//-------------------Checking if 2 objects hhave the same properties and address----------------------------

function ConstuctorAddress(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let conAddressObj1 = new ConstuctorAddress(26, 'Rawalpindi', 46330);
let conAddressObj2 = new ConstuctorAddress(26, 'Rawalpindi', 46330);
let conAddressObj2Test = new ConstuctorAddress(26, 'Rawalpindi', 46330);

function areObjectPropEqual(object1, object2) {
    // Get the keys of both objects
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    console.log(keys1);
    console.log(keys2);

    // Check if the number of properties is the same
    if (keys1.length !== keys2.length) {
        return false;
    }

    //Check if the properties themselves are the same.
    for (let key in object1) {
        // console.log(key);
        if (!(key in object2)) {
            // console.log(key);
            return false;
        }
        
    }

    // Iterate through the keys and compare the properties
    for (let key in object1) {
        // console.log(object1[key]);
        // console.log(object2[key]);
        if (object1[key] !== object2[key]) {
            return false;
        }
    }

    // If all properties are equal, return true
    return true;
}

function areObjectPropValuesEqual(object1, object2){
    objAreEqual = true;
    for(let key in object1){
       // console.log(object1[key]);
       // console.log(object2[key]);
        if(object1[key] !== object2[key]){
        objAreEqual = false;
        return objAreEqual;
        }
    }
    return objAreEqual;
}


//Another Way

function areEqual(address1, address2) {
    return address1.street === add2.street &&
    address1.city === address2.city &&
    address1.zipCode == address2.zipCode;
}

console.log("Values are Equal: "+ areObjectPropValuesEqual(conAddressObj1, conAddressObj2));

function isSameAddress(object1, object2){
    let isSame = false;
    if (object1 === object2){
        isSame = true;
        return isSame;
    }
    return isSame;
    //    return object1 === object2
}

let testAdd = conAddressObj1
console.log(isSameAddress(conAddressObj1, conAddressObj2));
console.log(isSameAddress(conAddressObj1, testAdd));

console.log(areObjectPropEqual(conAddressObj1, conAddressObj2));

//-------------------Blog Post Object----------------------------

let blogPostObj ={
    title: 'Salman\'s Life',
    body: '365 Days in Salman\'s Life',
    author: 'Salman Sheikh',
    views: 8733,
    comments: [{
        author: 'Zubia Khan',
        body: "When is it being published?"
    },
    {
        author: 'Aman Sheikh',
        body: "I expect great things from it."
    }],
    isLive: true
};

console.log(blogPostObj);

//-------------------Blog Post Constructor Function----------------------------

function ConBlogPost(title,body,author,views,comments,isLive){
this.title = title;
this.body = body;
this.author = author;
this.views = views;
this.comments = comments;
this.isLive = isLive;

}

let conBlogPostObj = new ConBlogPost('a','b','c', 55, [{author:'auth', body:'hi'}, {author:'auth', body:'hi1'}], true);
console.log(conBlogPostObj);

function DraftPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
    }

//-------------------Price Range----------------------------

let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
    ];

let restaurants = [
    { averagePerPerson: 5 }
    ]