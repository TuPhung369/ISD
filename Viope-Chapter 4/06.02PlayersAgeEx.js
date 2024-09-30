function checkAge() {
	// assign the age input field value into a variable
	var age = parseFloat(document.getElementById("age").value);//Input by Float
	var answerDiv = document.getElementById("answer");
	if(Number.isInteger(age) && age > 0){
		//age < 18
		if(age < 18){
			answerDiv.innerHTML = "Adolescents are not allowed to play.";
		}
		//age >= 18
		else{
			answerDiv.innerHTML = "Old enough to play.";
		}
	}else{
		// Display an error message for invalid input
		alert("Invalid input. Please enter Age is Integer and >0.");
	}
}