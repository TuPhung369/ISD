// Define the Rolling function to simulate dice rolls until both dice have the same value
function Rolling() {
    
    // Initialize count to 0 to track the number of rolls needed
    let count = 0;
    // Initialize pips1 and pips2 to 0. These variables will store the dice values.
    // Initializing pips2 is not strictly necessary here since it's set in the loop,
    // but doing so can improve readability and consistency.
    let pips1 = 0;
    let pips2 = 0;

    do {
        // Randomize dice values for pips1 and pips2 in each iteration of the loop
        // Math.random() generates a float between 0 (inclusive) and 1 (exclusive)
        // Multiplying by 5 and adding 1 adjusts the range to 1 through 6
        // Math.round() then rounds the result to the nearest integer to simulate a dice roll
        pips1 = Math.round((Math.random() * 5) + 1);
        pips2 = Math.round((Math.random() * 5) + 1);

        // Increment the roll counter by one after each roll
        count++;
    // Continue looping until both dice roll the same value
    } while (pips1 !== pips2);

    // Once matching values are rolled, update the HTML content of the 'answer' element
    // to display how many rolls were needed and the matching dice value
    document.getElementById("answer").innerHTML = `It took ${count} randomization round(s) to get matching pips of ${pips1}.`;
}

// Set the window.onload event handler to call the Rolling function
// This ensures the Rolling function is executed when the web page is fully loaded
window.onload = Rolling;