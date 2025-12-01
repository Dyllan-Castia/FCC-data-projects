//Defines a collection of records and their details in an object with objects inside.
const recordCollection = {
  2548: {
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
    albumTitle: 'ABBA Gold'
  }
};

//function updates records with the given arguments. Ex. function updateRecords(recordCollection, 2468, tracks, "Automatic")
function updateRecords(records, id, prop, value) {
  if (value === '') {
    delete records[id][prop];
    return records;
  } else if (prop !== 'tracks') {
    records[id][prop] = value;
    return records;
  } else if (prop === 'tracks' && value !== '' && !records[id].hasOwnProperty('tracks')) {
    records[id].tracks = [];
    records[id].tracks.push(value);
    return records;
  } else {
    records[id].tracks.push(value);
    return records;
  } 
}

console.log(updateRecords(recordCollection, 2468, 'tracks', 'Automatic'))
//returns
//{ '1245': { artist: 'Robert Palmer', tracks: [] },
 // '2468': 
   //{ albumTitle: '1999',
     //artist: 'Prince',                       vvvvvvvvv
     tracks: [ '1999', 'Little Red Corvette', 'Automatic' ] },
  //'2548':                                    ^^^^^^^^^
   //{ albumTitle: 'Slippery When Wet',
     //artist: 'Bon Jovi',
     //tracks: [ 'Let It Rock', 'You Give Love a Bad Name' ] },
  //'5439': { albumTitle: 'ABBA Gold' } }


   
