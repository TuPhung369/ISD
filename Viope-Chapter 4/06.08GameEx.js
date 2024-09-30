function play() {
	// Read value from the input field
	var bet =  parseFloat(document.getElementById("bet").value);
	var answerDiv = document.getElementById("answer");		
	// Randomize dice pips between 1-6
	var pips = Math.round((Math.random() * 5) + 1);
	var pay = 0;

	// Calculate win base on pips
	if (bet>=0){
		switch (pips) {
			case 1:
			case 3:
			case 5:
				// No pay for pips 1, 3, or 5
				answerDiv.innerHTML = "Pip was "+pips+" - no pay";
				break;
				
			case 2:
			case 4:
				// Pips 2 and 4 return set coins back 125%
				pay = bet * 1.25;
				answerDiv.innerHTML = "Pip was "+pips+" - Paid back: "+pay+" euros.";
				break;
				
			case 6:
				// Pip 6 returns the inserted bet 150%
				pay = bet * 1.5;
				answerDiv.innerHTML = "Pip was "+pips+" - Paid back: "+pay+" euros.";
				break;
			default:
				// Handle unexpected pips value
				console.log("Unexpected pips value:", pips);
		}

		return pay;
	}else{
		alert('Bet must be a positive number');
	}
}
