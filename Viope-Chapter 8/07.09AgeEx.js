function tellAge() {
    // Read value of yearOfBirth from the input field
    const yearOfBirth = parseInt(document.getElementById("yearOfBirth").value);

       // Use getFullYear() method to get the current year out from the today variable
    const currentYear = new Date().getFullYear();

    // Calculate the (rough estimate of the) age
    const age = currentYear - yearOfBirth;

    // If age is less than zero
    if (age < 0) {
        // Show an error message
        document.getElementById("answer").innerHTML = "Error: Invalid year of birth.";
    } else {
        // otherwise tell the age
        document.getElementById("answer").innerHTML = "You are now " + age + " years old.<br>(Current year is " + currentYear + ".)";
    }
}
