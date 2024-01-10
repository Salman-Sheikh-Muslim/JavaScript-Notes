
var contacts = [
    {
    "firstName": "Akira",
     "LastName": "Laine",
      "number": "0543236543",
       "Likes": ["Pizza", "Coding", "Brownie Points"]

    },
    {
    "firstName":"Harry",
     "LastName": "Potter",
      "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
    "FirstName": "Sherlock", 
    "LastName": "Holmes",
     "number": "0487345643",
      "Likes": ["Intriguing Cases", "Violin"]
}
];

function LookUpProfile (name, prop) {
    for (var i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) {
    return contacts[i][prop] || "No such property";
    }
    }
    return "No such contact";
    }
    // Change these values to test your function
    var data = LookUpProfile("Akira", "Likes");
    console.log(data);