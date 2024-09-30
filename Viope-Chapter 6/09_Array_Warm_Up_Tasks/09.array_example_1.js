// 09.array_example_1.js JavasScript code
 
var attendees = [];	        // Creates an empty array

console.log(attendees.length);  // Prints 0

console.log("=== Attendees ===");

attendees.push("Frank");        // Adds a new element to the end of the array ==> 0

attendees.push("Susan");        // Adds a new element to the end of the array ==> 1

attendees.push("John");	        // Adds a new element to the end of the array ==> 2

attendees[1] = "Alice";	        // Changes the value of the array element at index 1


for (var i = 0; i < attendees.length; i++) {
    console.log (attendees[i]); 	
}

console.log("=== Attendees in alphabetical order ===");

attendees.sort();

for (var i = 0; i < attendees.length; i++) {
    console.log (attendees[i]); 	
}

// End