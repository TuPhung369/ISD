function calculateCosts() {
  // Read the value from the input field into a variable
  var kilometers = parseFloat(document.getElementById("kilometers").value);
  var consumption = parseFloat(document.getElementById("consumption").value); //Input by Float
  var price = parseFloat(document.getElementById("price").value);
  var participants = parseFloat(document.getElementById("participants").value);

  // Check if the input is a valid number specially with participans must be Integer.
  if (
    !isNaN(kilometers) &&
    kilometers >= 0 &&
    !isNaN(consumption) &&
    consumption >= 0 &&
    !isNaN(price) &&
    price >= 0 &&
    Number.isInteger(participants) &&
    participants >= 0
  ) {
    // Calculate the unit fine and assign the result into another variable
    var conperparti = ((consumption / 100) * kilometers * price) / participants;

    // Write the answer to the web page DOM, in the answer div, as the content
    var answerId = document.getElementById("answerId");
    answerId.innerHTML =
      "Fuel costs per participant is " + conperparti.toFixed(2) + " euros.";
  } else {
    // Display an error message for invalid input
    alert(
      "Invalid input. Please enter Participants Integer > 0 and Others >=0."
    );
  }
}

