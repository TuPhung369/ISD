// 05_variables_warmup_3 JavasScript code
function showMinutes() {
    var txtHours = parseFloat(document.getElementById("txtHours").value);
    var txtMinutes = parseFloat(document.getElementById("txtMinutes").value);
    var pOutput = document.getElementById("pOutput");
    if (!isNaN(txtHours) && !isNaN(txtMinutes) && txtHours >= 0 && txtMinutes >= 0){
        var totalMinutes = parseInt(txtHours * 60 + txtMinutes);
        pOutput.innerHTML= totalMinutes + " minutes" ;
    }else{
        alert('Please enter numeric values only');
    }
}

