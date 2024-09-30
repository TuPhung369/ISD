function processName() {
    // Retrieve the input text string
    var name = document.getElementById("name").value;

    // Convert to uppercase and lowercase
    var upperCaseName = name.toUpperCase();
    var lowerCaseName = name.toLowerCase();

    // Calculate length
    var characterCount = name.length;

    // Check if the string contains 'muumi'
    var containsMuumi = name.toLowerCase().includes('muumi');

    // Get the first character
    var firstCharacter = name.charAt(0);

    // Get the first three characters
    var firstThreeCharacters = name.substring(0, 3);

    // Display the information
    document.getElementById("upperCase").innerHTML = "With upper case letters: " + upperCaseName;
    document.getElementById("lowerCase").innerHTML = "With lower case letters: " + lowerCaseName;
    document.getElementById("length").innerHTML = "Character count: " + characterCount;
    document.getElementById("contains").innerHTML = containsMuumi ? "Contains the text 'muumi'." : "Doesn't contain the text muumi.";
    document.getElementById("firstCharacter").innerHTML = "First character: " + firstCharacter;
    document.getElementById("manyCharacters").innerHTML = "First three characters: " + firstThreeCharacters;
}