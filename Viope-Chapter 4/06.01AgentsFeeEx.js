function calculateFee() {
		
	// Read value from the input field
	var price = parseFloat(document.getElementById("price").value);//Input by Float
	var fee = 0;
	// Calculate fee, save the result to a variable
	// Check if the input is a valid number
	if (!isNaN(price) && price >= 0) {
	// Calculate the unit fine and assign the result into another variable
		if(0.0344*price > 2400){
			fee = price*0.0344;
		}
			
	// if the fee is under minimum, update it
		else{fee =2400;}
	// Write the answer on the page, to the fee div, as content of the div
	var answerDiv = document.getElementById("fee");
	answerDiv.innerHTML = "Real state agent's fee is " + fee.toFixed(2) + " euros";
        
    } else {
        // Display an error message for invalid input
        alert("Invalid input. Please enter Price is number and >=0.");
    }
				
}