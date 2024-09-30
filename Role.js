var names =["a","b","c","d","e","f","g"];
var scores = [23,1,2,3,4,5,6,7];

function listPlayers(){
    var outputText = "";
    for (var i = 0; i < names.length; i++) {
        outputText += "<li>" + names[i] + ":" +
        scores[i] + "</li>";
    }
    document.getElementById("output").innerHTML = outputText;
}


// names - Array of names
// Role: Fixed value
// Explanation: The array names is initialized with a fixed set of values and doesn't change during the execution of the code.

// scores - Array of scores
// Role: Gatherer
// Explanation: The array scores accumulates the effect of individual values (scores) over the iteration.

// var i - Loop variable
// Role: Stepper
// Explanation: The loop variable i steps through a systematic, predictable succession of values during the iteration.

// outputText - String variable
// Role: Temporary
// Explanation: The variable outputText holds some value (string) for a very short time during the construction of the output.

// names.length - Array length property
// Role: Fixed value (or Follower if before this array names was changed)
// Explanation: The length property of the names array is a fixed value representing the number of elements in the array, and it doesn't change.

// document - Document object
// Role: Container (or Organizer)
// Explanation: The document object acts as a container for the HTML document object model (DOM) and provides methods to interact with HTML elements.