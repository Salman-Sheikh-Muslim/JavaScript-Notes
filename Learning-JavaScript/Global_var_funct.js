//If you declarde a variable without using a kewyword then it becomes global

var global = 10;

function fun1(){

    oopsGlobal = 5;
    var local = 6;

}

function fun2(){

    var output = "";
    if(typeof global != "undefined"){
        output += "global: " + global;
    }
    if(typeof oopsGlobal != "undefined"){
        output += "\noopsGlobal: " + oopsGlobal;
    }
    if(typeof local != "undefined"){
        output += "\noopsGlobal: " + local;
    }
    console.log(output);
}

fun1();
fun2();