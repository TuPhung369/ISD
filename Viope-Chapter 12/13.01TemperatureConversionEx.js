function convert() {
    var conversionType = document.getElementById("conversion").value;
    var temperature = parseFloat(document.getElementById("temperature").value);
    var resultField = document.getElementById("result");
    
    if (isNaN(temperature)) {
        resultField.value = "Invalid input";
        return;
    }

    if (conversionType === "celsius") {
        var celsius = (temperature - 32) * 5 / 9;
        resultField.value = celsius.toFixed(0);
    } else {
        var fahrenheit = (temperature * 9 / 5) + 32;
        resultField.value = fahrenheit.toFixed(0);
    }
}