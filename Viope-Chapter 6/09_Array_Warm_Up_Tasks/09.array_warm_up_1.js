// 09.array_warm_up_2.js JavasScript code
// Initially, this program shows the given digit (0-9) as a Finnish word.
// Modify the program so that it asks the user to enter a month number (1-12).
// When the user clicks the button the program should show the month name in English. 

function showMonth() {
    var wordArray = ["Jan", "Feb",  "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];
    
    var digitText = document.getElementById("txtDigit").value;
    var digit = Number(digitText);
    digit -= 1; //transfer to the index of array element.
    
    if (digit >= 0 && digit < 12) {
        outputText = wordArray[digit];
    } else {
        outputText = "Please enter a valid digit (from 1 to 12)!"
    }
        
    document.getElementById("pOutput").innerHTML = outputText;
}

// End