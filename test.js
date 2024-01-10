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