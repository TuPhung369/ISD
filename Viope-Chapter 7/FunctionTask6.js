// Define the getGreetingWithAge function
function getGreetingWithAge(name, yob) {
    // Calculate the age
    let currentYear = new Date().getFullYear();
    let age = currentYear - yob;

    // Return the greeting with age
    return "Hello " + name + "! You are " + age + " years old this year.";
}

// Define the displayGreetingWithAge function
function displayGreetingWithAge(name, yob) {
    // Call getGreetingWithAge to get the greeting
    let greeting = getGreetingWithAge(name, yob);

    // Display the greeting to the console
    console.log(greeting);
}

// Test calls with different names and years of birth
displayGreetingWithAge("Mike", 1989);
displayGreetingWithAge("Anne", 2002);
displayGreetingWithAge("Joe", 2010);