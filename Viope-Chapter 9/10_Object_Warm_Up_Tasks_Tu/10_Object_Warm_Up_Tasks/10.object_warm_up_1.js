// 10.object_warm_up_1.js JavasScript code
// Initially, this program shows the name of a country.
// Modify the program so that it shows also the population of the country.


var countries = {
    "Finland": "5.501.043",
    "France": "67.348.000",
    "Germany": "83.190.556",
    "Sweden": "10.365.705"
};

var outputText = "";

// Iterate through each country in the 'countries' object
for (var countryName in countries) {
    // Append the country name and population to the output text
    outputText += `Country: ${countryName}<br>Population: ${countries[countryName]}<br><br>`;
}

// Update the HTML content of the element with the ID "pOutput" to display the output text
document.getElementById("pOutput").innerHTML = outputText;
