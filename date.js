// Create a new Date object
var currentDate = new Date();

// Get day, year, and month
var day = currentDate.getDate();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; // Note: Months are zero-based, so we add 1

// Display the date information
console.log('Day: ' + day);
console.log('Year: ' + year);
console.log('Month: ' + month);
