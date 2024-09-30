// 10.object_more_tasks_1.js JavasScript code
// Initially, this program shows the name and population of a country.<br />
// Modify the program so that it shows also the name of the country in Finnish.<br />
// NB! Add a new property to the object constructor for this purpose.<br /><br />

function Country (countryName, countryPopulation, countryFinnish) {
    this.name = countryName;
    this.population = countryPopulation;
    this.finnish = countryFinnish;
}

var myCountry = new Country("Finland", 5501043,"Suomi");

// Convert the population to a string and insert a period before the last three digits
myCountry.population = myCountry.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

var outputText = "<u>Country</u>: <strong>" + myCountry.name + "</strong>( " + myCountry.finnish + " )" + ", <u>population</u>: <strong>" + myCountry.population + "</strong>";

document.getElementById("pOutput").innerHTML = outputText;

// End
