function calculateUnitFine() {
    // Read the value from the input field into a variable
    var netIncomeInput = document.getElementById("txtNetIncome"); 
    var netIncome = parseFloat(netIncomeInput.value);
	
    // Check if the input is a valid number
    if (!isNaN(netIncome) && netIncome >= 255) {
        // Calculate the unit fine and assign the result into another variable
        var unitFine = (netIncome - 255) / 60;

        // Write the answer to the web page DOM, in the answer div, as the content
        var answerDiv = document.getElementById("answerDiv");
        answerDiv.innerHTML = "Unit fine is " + unitFine.toFixed(2) + " euros.";
    } else {
        // Display an error message for invalid input
        alert("Invalid input. Please enter netIncome >= 255.");
    }
}