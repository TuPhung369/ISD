// 05_variables_warmup_5 JavasScript code

function calculate() {
    var txtStartingBalance = parseFloat(document.getElementById("txtStartingBalance").value);
    var txtInterestRate = parseFloat(document.getElementById("txtInterestRate").value);
    var pOutput = document.getElementById("pOutput");
    //txtInterestRate can be negative
    if (!isNaN(txtStartingBalance) && txtStartingBalance >= 0  && !isNaN(txtInterestRate)) {
        for (let i = 1; i <= 2; i++) {
            var futureValue = txtStartingBalance * Math.pow((1 + txtInterestRate / 100), i);
            pOutput.innerHTML += i + ". Year: " + futureValue.toFixed(2) + "<br>";
        }
    }else{
        alert('Please enter numeric values only');
    }
}
