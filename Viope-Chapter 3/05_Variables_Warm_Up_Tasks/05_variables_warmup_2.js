// 05_variables_warmup_2 JavasScript code
function add() {
    var txtFirst = parseFloat(document.getElementById("txtFirst").value);
    var txtSecond = parseFloat(document.getElementById("txtSecond").value);
    var pOutput = document.getElementById("pOutput");
    if (!isNaN(txtFirst) && !isNaN(txtSecond)) {
        var sum = (txtFirst + txtSecond).toFixed(2);
        pOutput.innerHTML="The sum of "+txtFirst.toFixed(2)+" and "+txtSecond.toFixed(2)+" is: " +sum ;
    }else{
        alert('Please enter numeric values only');
    }
}


