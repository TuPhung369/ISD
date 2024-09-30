function processName() {
    // Retrieve the name input value
    var name = document.getElementById("name").value;

    // Convert the name to uppercase and lowercase
    var upperCaseName = name.toUpperCase();
    var lowerCaseName = name.toLowerCase();

    // Calculate the length of the name
    var nameLength = name.length;

    // Display the results
    document.getElementById("upperCase").innerHTML = "With upper case letters: " + upperCaseName;
    document.getElementById("lowerCase").innerHTML = "With lower case letters: " + lowerCaseName;
    document.getElementById("length").innerHTML = "Character count: " + nameLength;
}
