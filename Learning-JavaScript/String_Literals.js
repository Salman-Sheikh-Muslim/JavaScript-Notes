// => [Create Strings using Template Literals] 

/*
Template literals are a special type of string that makes creating
 complex strings easier.
Template Literals
You make them with this backtick. 

A few advantages of using these template literals, these backticks instead of quotation marks, are one, you can make multiline strings.
3:07:13
You can see this has two lines. Here’s the first line and here’s the second line. And if we log the greeting, it’s going to put the new line right in there.
3:07:23
Another thing is you can add single or double quotation marks right in the string
3:07:30
and you don’t have to escape them. The third thing is you can put variables right in the string.
*/

const person = { name: "Zodiac Hasbro", age: 56 };
// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}! 
I am ${person.age} years old.`;

console.log(greeting);

//-------

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure : ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
    };
    function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultDisplayArray;
    }

    const resultDisplayArray = makeList(result.failure);

    // =>  [Write Concise Object Literal Declarations Using Simple Fields]

    //before

    const createPerson = (name, age, gender) => {
        return {
        name: name,
        age: age,
        gender: gender
        };
        };
        console.log(createPerson ("Zodiac Hasbro", 56, "male"));

        //AAfter

         const createPersons = (name, age, gender) ({ name, age, gender });
        console.log(createPersons("Zodiac Hasbro", 56, "male"));