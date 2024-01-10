function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){

    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " TO THE STORE " + myAdverb;

    return result;
}

console.log(wordBlanks("DOG", "big" , "ran" , "quickly"));

