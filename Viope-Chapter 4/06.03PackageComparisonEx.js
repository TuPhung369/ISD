function comparePackages() {
	
		// assign input field values into a variables
		var textMessages =  parseFloat(document.getElementById("textMessages").value);
		var callTime =  parseFloat(document.getElementById("callTime").value);
		var totalfee =0;
		// calculate the costs of the Special Package
		var answerDiv = document.getElementById("answer");
		if (Number.isInteger(textMessages) && textMessages > 0 && Number.isInteger(callTime) && callTime > 0){
			totalfee = (19.9 + 0.069*(textMessages+callTime)).toFixed(2);
			if (totalfee > 29.90){
				answerDiv.innerHTML = "The All-inclusive package (29.90) is cheaper than the Special package (" + totalfee + ")";
			}else{
				answerDiv.innerHTML = "The Special package (" + totalfee + ") is cheaper than the All-inclusive package (29.90)";
			}
		}else{
		// Display an error message for invalid input
		alert("Invalid input. Please enter Inputs are Integer and >0.");

		}
	
}