// DebuggingExercise.js
// 

function classifyAge() {
    var outputText;
    
    var ageText = document.getElementById("txtAge").value;
    var age = Number(ageText);
    if (!isNaN(age)){
        if (age < 0 || age > 122) {
            outputText = "Please enter an integer between 0 and 122.";
        }else if (age > 18) {
            outputText = "You're a adult.";
        }else {
            outputText = "You're an minor.";
        }
    }else
    {
        outputText = "Invalid input! Please enter a number.";
    }
    document.getElementById("pOutput").innerHTML = outputText;
    
}
