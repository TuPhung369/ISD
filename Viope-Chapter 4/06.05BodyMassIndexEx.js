function calculateBMI() {
    var weight =  parseFloat(document.getElementById("weight").value);
	var height =  parseFloat(document.getElementById("height").value);
    var BMI = 0;
    var answerDiv = document.getElementById("answer");
    if (!isNaN(weight) && weight > 0 && !isNaN(height) && height > 0){
			BMI = (weight/(height*height/100/100)).toFixed(2);
			if (BMI >= 25){
				answerDiv.innerHTML = "Body Mass Index (BMI) is " + BMI + "(Overweight)";
			}else if (BMI <= 18.4){
				answerDiv.innerHTML = "Body Mass Index (BMI) is " + BMI + "(Weight less than normal weight)";
			}else{
				answerDiv.innerHTML = "Body Mass Index (BMI) is " + BMI + "(Normal weight)";
      }
    }else{
		// Display an error message for invalid input
		alert("Invalid input. Please enter Inputs are number and > 0.");
    }
}
