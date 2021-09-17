// customerRef.once('value', (snapshot) => {
//     let customers = [];
  
//     snapshot.forEach( (childSnapshot) => {
//       var key = childSnapshot.key;
//       var data = childSnapshot.val();
//       // ...
  
//       customers.push({ key: key, firstname: data.firstname});
//     });
// });



// customersRef.on('child_added', (data) => {
//     // data.key, data.val().firstname, data.val().lastname, ...
//  });
 
//  customersRef.on('child_changed', (data) => {
//    // data.key, data.val().firstname, data.val().lastname, ...
//  });
 
//  customersRef.on('child_removed', (data) => {
//    // data.key, data.val().firstname, data.val().lastname, ...
//  });