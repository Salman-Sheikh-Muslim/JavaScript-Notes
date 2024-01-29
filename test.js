function greet(name) { //Whatever we write inside () brackets is a 'parameter' in a function declaration.
    console.log('Hello' + name); //String concatenation
}

greet(1);
let a =1;
console.log(a == '1');  
console.log(a !== '1'); 

console.log(false ==  0); 

let x = 10; 
let y = x++; 

console.log(y);

const person = {
    name: 'Salman',
    age: 23
};

for(let key in person){
    console.log(person[key]);
}

console.log(typeof 'sal');

var color = 5; 
//console.log(window.globals);

let users = [
    { firstName: "Susan", lastName: "Steward", age: 14, hobby: "Singing" },
    { firstName: "Daniel", lastName: "Longbottom", age: 16, hobby: "Football" },
    { firstName: "Jacob", lastName: "Black", age: 15, hobby: "Singing" }
  ];

  let singleUser = users.map((user)=>{
    //let's add the firstname and lastname together
    let fullName = user.firstName + ' ' + user.lastName;
    return fullName;
      //`<h3 class='name'>${fullName}</h3>
      //<p class="age">${user.age}</p> `
  });

  console.log(singleUser);

  const Susan = {
    firstName: "Susan",
    lastName: "Steward",
    age: 14,
    hobbies: {
      hobby1: "singing",
      hobby2: "dancing"
    }
  };
  
  const {age, ...rest} = Susan;
  console.log(age, rest);


  //Dynamic Object Keys

  let category = 'carnivore';
let lion = {
  'lion-baby' : "cub",
  [category] : true,
};

console.log(lion); // { lion-baby: "cub" , carnivore: true }

const number = 5;
const gavebirth = true;

let animal = {
  name: 'lion',
  age: 6,
  [gavebirth && 'babies']: number
};

console.log(animal); // { name: "lion" , age: 6 , babies: 5 }