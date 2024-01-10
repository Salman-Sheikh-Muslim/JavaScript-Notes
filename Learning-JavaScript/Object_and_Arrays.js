var Cat = {

    "name": "Chris",
    "Legs": 4,
    "Tail": 1,
    "Gender": 'M',
    "Breed": "Unknown",
    "friends": ['Sam', 'Momo']

};

//=> Accesing Object properties with Dot Notation


/* 
Note: In order to use Dot notation to access an object properties then
the property name must not have a space in it.
*/
var prop = Cat.Gender;

console.log( prop = Cat["Gender"]);

//=> Accesing Object properties with Bracket Notation

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
    };
    // Only change code below this line
    var entreeValue = testObj["an entree"]; 
    var drinkValue = testObj ['the drink'];

    
//=> Accesing Object properties with Variable

// Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
    };
    var playerNumber = 16;
    var player = testObj[playerNumber];

//=> Updating Object properties

var ourDog = {
    "name": "Camper",
    "Legs": 4,
    "tails": 1,
    "friends": ["everything!"]
    };
    ourDog.name = "Happy Camper";
 
//=> Adding New Object properties

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
    };
    ourDog.bark = "bow-wow";


//=> Deleting Object properties

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
    };
    delete ourDog.bark;


//=> Using Object for lookups

/* 
Objects can be thought of as a key value storage like a dictionary.
 You can use an object too lookup values.
*/ 

function phoneticLookup(val) { 
    
    var result = "";

    var lookup =  {
"alpha": "Adams",
"bravo": "Boston", 
"charlie": "Chicago",
 "delta": "Denver", 
 "echo": "Easy",
"foxtrot": "frank"
}; 


result = lookup[val];
// Only change code above this line return result;
}
// Change this value to test 
phoneticLookup("charlie");

//=> Testing Object for Properties

/*
The hasOwnProperty() method returns true if the specified property
 is a direct property of the object — even if the value is null or undefined.
  The method returns false if the property is inherited, or has not been declared
   at all.
*/
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
    };

    function checkObj (checkProp) 
    {
    if (myObj.hasOwnProperty (checkProp)) {
    return myObj [checkProp];
    } else { return "Not Found"
    } return "Change Me!";
    }
    // Test your code by modifying these values 
    console.log(checkObj("gift"));

    //=> Manipulating Complex Object 

    MUSIC = [
        {
 "artist":"Billy Joel",
"title": "Piano Man",
"release_year": 1973,
"formats": [
"CD",
"87",
"LP"
],
"gold": true
},
// Add record here
{
"artist": "Beau Carnes",
"title": "Cereal Man",
"release_year": 2003,
"formats":[
"YouTube video"
] }
    ]



    //=> ACCESSING Nested Object 

    var myStorage = {
        "car": {
        "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
        },
        "outside": {
        "trunk": "jack"
        }
        }
        };
        var gloveBoxContents = myStorage.car.inside["glove box"];
        console.log(gloveBoxContents)


    //=> ACCESSING Nested Arrays 

    var myPlants = [
        {
        type: "flowers",
        list: [
        "rose",
        "tulip",
        "dandelion"]
        },
        {
        type: "trees",
        list: [
        "fir",
        "pine",
        "birch"
        ]
        }
        ];
        // Only change code below this line
        var secondTree = myPlants[1].list[1];

//=> Mutate an Array Declared with const

const s = [5, 7, 2];
function editInPlace() {
"use strict";
 // s = [2, 5, 7] // Will not work you cannot reassign a value to
 // an array declared with const
s[0] = 2 ; //Using bracket Notation we can change the value in an array
//even if its declared with const.
s[1] = 5 ;
s[2] = 7;
}
editInPlace();
console.log(s);

//=> Prevent Object Mutation

/*
If you have an object or an array, you can still mutate
 it even if it’s declared with const.
There is something called object.freeze that will prevent data mutation.
*/

function freezeObj() { 
    "use strict";
const MATH_CONSTANTS = {
PI: 3.14
};

Object.freeze (MATH_CONSTANTS); //This prevents any changes to the MATH)CONSTATS object.

try {
MATH_CONSTANTS.PI = 99;
} catch(ex) {
console.log(ex);
}

return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

//=> [Write Concise Declarative Functions] 

//An object can contain a function.

//Before

const bicycle = {
    gear: 2,
    setGear: function (newGear) {
    "use strict";
    this.gear = newGear;
    }
    };
    bicycle.setGear (3);
    console.log(bicycle.gear);

//After

const bicycles = {
    gear: 2,
    setGear(newGear) {
    "use strict";
    this.gear = newGear;
    }
    };
    bicycles.setGear (3);
    console.log(bicycles.gear);

    //=> [Use class Syntax to Define a Constructor Function]

    //old way

    var SpaceShuttle = function (targetPlanet){
        this.targetPlanet = targetPlanet;
        }
        var zeus = new SpaceShuttle ('Jupiter');
        console.log(zeus.targetPlanet)

    //new way

    class SpaceShuttle {
        constructor (targetPlanet) {
        this.targetPlanet = targetPlanet;
        }
        }
        var zeus = new SpaceShuttle ('Jupiter');
        console.log(zeus.targetPlanet)


        //--------

        function makeClass() {
            class Vegetable {
            constructor (name) {
            this.name = name;
            }
            }
            return Vegetable;
            }
            const Vegetable = makeClass();
            const carrot = new Vegetable('carrot');
            console.log(carrot.name);

            //=> [Use getters and setters to Control Access to an Object]
            /*
With the class object you often want to obtain values from the object
getters and setters

and set a value of a property within an object. 
This are often called getters and setters. 
   */
  
//operator precedence

