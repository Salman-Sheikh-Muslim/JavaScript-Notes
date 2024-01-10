function randomFraction() {
    return Math.random(); // returns a value between 0 and 1.
    }
    console.log(randomFraction());

   // => Random Whole Number
   // Math.floor rounds down to the nearest whole number.

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

 // => Random Whole Number within a Range

 function ourRandomRange (ourMin, ourMax) {

    return Math.floor(Math.random() (ourMax  - ourMin + 1)) + ourMin; 
}
    ourRandomRange (1, 9);

     // => Random Whole Number within a Range
