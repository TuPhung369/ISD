// Aphorisms array Châm Ngôn
var aphorisms = [
    "A great flame follows a little spark.",
    "In the midst of chaos, there is also opportunity.",
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The best way to predict the future is to create it.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Believe you can and you're halfway there.",
    "You must be the change you wish to see in the world.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Happiness is not something readymade. It comes from your own actions.",
    "Change your thoughts and you change your world.",
    "You miss 100% of the shots you don't take.",
    "If you want to lift yourself up, lift up someone else.",
    "The only person you should try to be better than is the person you were yesterday.",
    "The way to get started is to quit talking and begin doing."
];

// Function to display a random aphorism
function displayAphorism() {
    var index = Math.floor(Math.random() * aphorisms.length);
    var aphorism = aphorisms[index];
    var aphorismElement = document.getElementById("aphorism");
    aphorismElement.innerHTML = "<p>" + aphorism + "</p>";
}

// Display a random aphorism when the page is loaded
window.onload = displayAphorism;
