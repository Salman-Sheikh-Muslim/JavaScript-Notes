var r_coll = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  var Collection_Copy = JSON.parse(JSON.stringify(r_coll)); // Correct usage
  
  r_coll.name = 'Jane';
  
  console.log(Collection_Copy.name); // This will still log 'John'
 
  
  