//=> [Use Destructuring Assignment to Assign Variables from Objects]

//OLD Way
var voxel = {x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x; 
var y = voxel.y;
var z = voxel.z; // z = 6.54

//New Way 
const {x: a, y: b, z: c} = voxel; // a = 3.6 b = 7.4 

//----

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
    };
    function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // change code below this line
    const { tomorrow: tempOfTomorrow } = avgTemperatures; //
    // change code above this line
    return tempOfTomorrow;
    }
    console.log(getTempOfTmrw(AVG_TEMPERATURES)); 

    //=> [Use Destructuring Assignment to Assign Variables from Nested Objects]

    const LOCAL_FORECAST = { 
         today: { min: 72, max: 83 }, tomorrow: { min: 73.3, max: 84.6 }
};
function getMaxOfTmrw(forecast) { "use strict";
const { tomorrow: { max : maxOfTomorrow }} = forecast;
return maxOfTomorrow;
}
console.log(getMaxOfTmrw (LOCAL_FORECAST));

    //=> [Use Destructuring Assignment to Assign Variables from Arrays]

    const [z, x,, y] = [1, 2, 3, 4, 5, 6]; console.log(z, x, y);
let e = 8, f = 6;
(() => {
"use strict";
[e, f] = [f, e]
})();
console.log(e);
console.log(f);

    //=> [Use Destructuring Assignment with Rest Operator]

    const source = [1,2,3,4,5,6,7,8,9,10];
    function removeFirstTwo (list) {
    const [,,...arr] = list;
    return arr;
    }
    const arr = removeFirstTwo (source);
    console.log(arr);
    console.log(source);
    
    //=>  [Use Destructuring Assignment to Pass an Object as a Function’s Parameters]

    const stats = { max: 56.78,
        standard_deviation: 4.34, median: 34.54, mode: 23.87, min: -0.75, average: 35.85
        };
        const half = (function() {
          //  return function half(stats) {
             //   return (stats.max + stats.min) / 2.0;

        return function half({ max, min }) {
        return (max + min) / 2.0;
        };
        });
        console.log(stats);
        console.log(half (stats));