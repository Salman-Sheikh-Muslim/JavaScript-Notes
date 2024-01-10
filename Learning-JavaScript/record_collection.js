const r_coll = {

    2458: {
    
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },

  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold',
    artist: 'ABBA'
  }
};


  var Collection_Copy = JSON.parse(JSON.stringify(r_coll));

  // Only change code below this line
  function updateRecords (records, id, prop, value)
   {
 
    if (value === "") {
    delete records[id] [prop];
    console.log("delete")
    } else if (prop === "tracks") {
        records[id] [prop] = records[id][prop] || [];
        records[id] [prop].push(value);
    } else {
        records[id] [prop] = value;
    }

    return records;
    }
    // Alter values below to test your code console.log(updateRecords (5439, "artist", "ABBA"));
 console.log(updateRecords(Collection_Copy, 5439, 'artist', ''));
