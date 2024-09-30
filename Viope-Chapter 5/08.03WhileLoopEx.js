// Function to display confirm dialog and return the result
function showConfirmDialog() {
    // confirm displays OK & Cancel buttons
    // If OK is clicked, it returns true; if Cancel is clicked, it returns false
    return confirm("Do you want to continue?");
}
// Function to display alert dialog
function showAlert() {
    // alert displays a message with an OK button
    alert("Hello!");
    // Clicking OK passes or exits the function
}
// Main program
while (true) {
    // The outer loop continues indefinitely
    // The inner loop for "OK" scenario
    while (showConfirmDialog()) {
        // Inside the loop, showAlert is called, displaying the "Hello!" message.
        showAlert();
    }
    // After the inner loop (user clicked "Cancel")
    // Perform some fun action or prompt the user for another activity
    //var funAction = prompt("Do you want to do something fun now? Enter 'yes' or 'no'.");
    //indefinitely because funAction can't no or yes, so can't break.
    //if (funAction !== null && funAction.toLowerCase() === 'get out') {
        // If the user enters 'no', break out of the outer loop
     //   break;
   // }
    // Otherwise, continue the outer loop for another round
   
var funAction = prompt("Can you escape? 'yes' or 'puzzle'.");
// Convert user input to lowercase for case-insensitive comparison
var lowercasedFunAction = funAction.toLowerCase();

// Introduce a puzzle condition
var luckyNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number (1-10)
var userGuess = lowercasedFunAction === 'yes' ? 0 : parseInt(funAction);

if (userGuess === luckyNumber) {
    // If the user is lucky, print a message
    document.write("Congratulations! You are a LUCKY person!");
    break;
} 
}