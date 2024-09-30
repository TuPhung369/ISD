function show() {
    var identityNumber = document.getElementById("identityNumber").value;

    // Check if the input length is 11 characters
    if (identityNumber.length !== 11) {
        document.getElementById("answer").innerHTML = "Invalid identity number";
        return;
    }

    var genderChar = identityNumber.charAt(9); // Get the 2nd last character
    var gender = parseInt(genderChar); // Convert it to a number

    var genderText = (gender % 2 === 0) ? "Female" : "Male"; // Check if the number is even or odd

    var separator = identityNumber.charAt(6); // Get the separator character
    var day = parseInt(identityNumber.substring(0, 2)); // Get day
    var month = parseInt(identityNumber.substring(2, 4)); // Get month
    var year = parseInt(identityNumber.substring(4, 6)); // Get year (last two digits)

    // Ensure months less than 10 have leading zeros
    var monthFormatted = (month < 10) ? '0' + month : month;

    // Determine the century based on the separator character
    var century;
    switch(separator) {
        case '+':
            century = 1800;
            break;
        case '-':
            century = 1900;
            break;
        case 'A':
            century = 2000;
            break;
        default:
            document.getElementById("answer").innerHTML = "Invalid identity number";
            return;
    }

    // Combine century and year
    year += century;

    var dateOfBirth = day + '.' + monthFormatted + '.' + year;

    // Display the result
    document.getElementById("answer").innerHTML = "<p>"+genderText + ", born " + dateOfBirth+".</p>";
}