let catName = "Quincy"; let quote;
catName = "Beau";
function catTalk() { "use strict";
catName = "Oliver";
quote = catName + " says Meow!";
}

// 'let' does not allow you to declare a variable twice (having the same name)

/*
Another major difference between the var and let keywords
is that when you declare a variable with var, it is declared 
globally or locally if declared inside a function.

However, let – the scope of let is limited to the block statement
 or expression that it was declared in.
*/

//------

function checkScope() {
    "use strict";
    var i = "function scope";
    if (true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
    }
    checkScope();

    /*
    Output: 
    Block scope i is: "block scope"
    Function scope i is: "block scope"
    */


    function checkScope() {
        "use strict";
        let i = "function scope";
        if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
        }
        console.log("Function scope i is: ", i);
        return i;
        }
        checkScope();
    
        /*
        Output: 
        Block scope i is: "block scope"
        Function scope i is: "function scope"
        */

        //------

        function checkScope() {
            "use strict";
            //let i= "function scope";
            if (true) {
            var i = "block scope";
            console.log("Block scope i is: ", i); }
            console.log("Function scope i is: ", i); return i;
            }
            checkScope();

           // block scope i is: "block scope"
          //  function scope i is: "block scope"


          //--------

          function checkScope() {
            "use strict";
           // Let i = "function scope";
            if (true) {
            let i = "block scope";
            console.log("Block scope i is: ", i); }
            console.log("Function scope i is: ", i); return i;
            }
            checkScope();

            // block scope i is: "block scope"
          //  ReferenceError: i is not defined (/index.js:11)

          