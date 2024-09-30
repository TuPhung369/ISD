// Define the displayGreetingWithAge function
function displayGreetingWithAge(name, yob) {
    // Calculate the age by current new 2024
    let currentYear = new Date().getFullYear(); new Date().
    let age = currentYear - yob;

    // Display the greeting with age
    console.log("Hello " + name + "! You are " + age + " years old this year.");
}

// Test calls with different names and years of birth
displayGreetingWithAge("Mike", 1989);
displayGreetingWithAge("Anne", 2002);
displayGreetingWithAge("Joe", 2010);