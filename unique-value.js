/*
Unique Value - Set() in JavaScript
Recently, I was try to create a categories tab for an application where I needed 
to fetch the categories value from an array.
*/
let animals = [
  {
    name:'Lion',
    category: 'carnivore'
  },
  {
    name:'dog',
    category:'pet'
  },
  {
    name:'cat',
    category:'pet'
  },
  {
    name:'wolf',
    category:'carnivore'
  }
]
/*
The first thing was to loop through the array, but I got repeated values:
*/
let category = animals.map((animal)=>animal.category);
console.log(category); //["carnivore" , "pet" , "pet" , "carnivore"]

/*
This meant that I needed to set up a condition to avoid repetition. It was a 
little bit tricky until I came across the set() constructor/object provided by ES6 :).

A set is a collection of items which are unique, that is no element can be repeated. 
Let’s see how we can implement this easily.
*/
//wrap your iteration in the set method like this
let category1 = [...new Set(animals.map((animal)=>animal.category))];

console.log(category1); ////["carnivore" , "pet"]