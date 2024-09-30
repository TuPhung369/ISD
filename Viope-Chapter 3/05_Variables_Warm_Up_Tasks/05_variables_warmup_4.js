// 05_variables_warmup_4 JavasScript code
function showHoursAndMinutes() {
    var txtMinutes = parseFloat(document.getElementById("txtMinutes").value);
    var pOutput = document.getElementById("pOutput");
    if (!isNaN(txtMinutes) && txtMinutes >= 0){
        var hours = Math.floor(txtMinutes / 60);
        var remainingMinutes = (txtMinutes % 60).toFixed(2);
        pOutput.innerHTML= "Hours: " + hours + ", Minutes: " + remainingMinutes;
    }else{
        alert('Please enter numeric values only');
    }
}

