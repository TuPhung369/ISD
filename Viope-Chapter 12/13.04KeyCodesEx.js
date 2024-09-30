// Function to generate a unique key code between min and max,
// ensuring that the key code is not already in the usedKeyCodes set
function generateKeyCode(min, max, usedKeyCodes) {
    let keyCode;
    // Loop until a unique key code is generated
    do {
        keyCode = Math.round(Math.random() * (max - min) + min);
    } while (usedKeyCodes.includes(keyCode)); // Check if the generated key code is already used

    // Add the generated key code to the set of used key codes
    usedKeyCodes.push(keyCode);

    // Convert the key code to a string and pad with zeros if necessary
    let keyCodeString = keyCode.toString();
    while (keyCodeString.length < 4) {
        keyCodeString = "0" + keyCodeString;
    }

    // Return the generated key code as a string
    return keyCodeString;
}

// Initialize a string to store the generated key codes
let keyCodesString = '';
// Initialize an array to keep track of used key codes
let usedKeyCodes = [];

// Loop to generate 100 unique key codes
for (let i = 0; i < 100; i++) {
    // Generate a unique key code and add it to the string
    let keyCode = generateKeyCode(0, 9999, usedKeyCodes);
    keyCodesString += keyCode;

    // Add line breaks every 10 key codes for readability
    if ((i + 1) % 10 === 0) {
        keyCodesString += "<br>";
    } else {
        keyCodesString += " ";
    }
}

// Display the generated key codes on the HTML page
document.getElementById("keycodes").innerHTML = keyCodesString;
