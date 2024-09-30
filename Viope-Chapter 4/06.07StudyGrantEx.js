function showStudyGrant() {
    var age =  parseFloat(document.getElementById("age").value);
	// change all of inputword to LowerCase
	var withParents = document.getElementById("withParents").value.toLowerCase();
    var answerDiv = document.getElementById("answer");

    if (Number.isInteger(age) && age > 0 && ((withParents === "y") || (withParents === "n"))){
			if (age >= 20 && (withParents === "n")){
				answerDiv.innerHTML = "The study grant is 268.23 euros.";
			}else if (age >= 20 && (withParents === "y")){
				answerDiv.innerHTML = "The study grant is 87.23 - 196.27 euros.";
			}else{
				answerDiv.innerHTML = "Ask Kela.";
      }
    }else{
		// Display an error message for invalid input
		alert("Invalid input. Please enter 'age' is Integer > 0 &  'With Parents' as ('Y/y' or 'N/n').");
    }
}