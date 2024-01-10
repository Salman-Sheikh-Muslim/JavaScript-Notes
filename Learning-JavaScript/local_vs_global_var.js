//local variable takes precedens over gloabal variable
var outer_Wear = "T-Shirt Global";

function myOutfit(){

    var outer_Wear = "sweater Local";
    return outer_Wear;
}

console.log(myOutfit);
console.log(outer_Wear);