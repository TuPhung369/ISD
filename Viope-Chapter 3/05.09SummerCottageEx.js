function calculateRent() {
    // Read the value from the input field into a variable
    var rent = parseFloat(document.getElementById("rent").value);//Input by Float
    var participants = parseFloat( document.getElementById("participants").value);

	    // Check if the input is a valid number
    if (!isNaN(rent) && rent >= 0 && Number.isInteger(participants) && participants >= 0) {
        // Calculate the unit fine and assign the result into another variable
        var unitrent = rent/participants;

        // Write the answer to the web page DOM, in the answer div, as the content
        var answerDiv = document.getElementById("answerDiv");
        answerDiv.innerHTML = "Rent per participants is " + unitrent.toFixed(2) + " euros.";
    } else {
        // Display an error message for invalid input
        alert("Invalid input. Please enter Rent >=0 and Participants Integer > 0.");
    }
}