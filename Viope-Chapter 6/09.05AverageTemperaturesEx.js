// Create an array of twelve average temperatures
let temperatures = [-3.3, -4.7, -1.3, 3.9, 10.2, 14.6, 17.8,
    16.3, 11.5, 6.6, 1.6, -2.0];

function loopTemperatures() {
// For loop
for(let index = 1; index < temperatures.length+1; index++) {
// Use the console.log() method to write each temperature of the array
console.log(index + ". " + temperatures[index-1].toFixed(1));
}
/// Show the list of temperature on the screen
    // Select the container element where temperatures will be displayed
    let container = document.getElementById("btnShow");
  
    // Initialize an empty string to hold the HTML content
    let content = "";
    
    // Loop through the temperatures array
    for (let index = 0; index < temperatures.length; index++) {
        // Append each temperature with its corresponding index to the content string
        content += (index + 1) + ". " + temperatures[index].toFixed(1) + "<br>";
    }

    // Update the innerHTML of the container element with the generated content
    container.innerHTML = content;
}