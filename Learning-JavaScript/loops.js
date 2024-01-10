//=> While loop

var myArray = [];
var i = 0;
while(i < 5) {
myArray.push(i); i++;
}
console.log(myArray);

//=> For loop

var ourArray = [];

for (var i = 0; i < 5; i++)
 {
ourArray.push(1);
}


//---

var ourArray = [];
for (var i = 0; i < 10; i += 2) {
ourArray.push(i);
}
console.log(ourArray);

//=> Counting Backward with For loop

var ourArray = [];
for (var i = 10; i > 0; i == 2) {
ourArray.push(i);
}
console.log(ourArray);

//=> Interate according to the length of array.

var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;
for (var i = 0; i < ourArr.length; i++) {
ourTotal += ourArr[i];
}
console.log(ourTotal);

//=> Nesting For Loops

function multiplyAll(arr) {
    var product = 1;
    for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
    product *= arr[i][j];
    }
    }
    return product;
    }
    var product = multiplyAll([[1,2], [3,4], [5,6,7]]);

//=>Do While Loops

var myArray = []; var i = 10 ;
// Only change code below this line.
do {
myArray.push(i);
i++;
} while (i < 5)

console.log(i, myArray);
