// 09.array_example_2.js JavasScript code
// This empty array is created when the HTML page is loaded
var myArray = [];     // Creates an empty array
function insertValue() {
    var txtValue = document.getElementById("txtValue");
    var value = Number(txtValue.value);
    
    if (!isNaN(value)) { //if value is a number
        myArray.push(value);        // Adds a new element to the end of the array
        showArray();
        txtValue.value = "";        // clears the input space
        txtValue.focus();           // Moves the cursor (pointer) to the input field
    } else {
        alert("Please input a number only");
    }
}
function showArray() {

    var outputText = "myArray.length : " + myArray.length + "<br/><br />";
    
    for (var i = 0; i < myArray.length; i++) {
          outputText = outputText + "myArray[" + i + "] : " + myArray[i] + "<br />"; 
    }

    document.getElementById("divOutput").innerHTML = outputText;
}

showArray();

// End