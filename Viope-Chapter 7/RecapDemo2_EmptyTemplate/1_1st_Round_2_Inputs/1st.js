let players = [];
// function for adding players
function addPlayer() {
    let playerName = document.getElementById("txtName").value;
    let playerScore = document.getElementById("txtScore").value;

    // Validate input
    if (playerName.trim() === "" || playerScore.trim() === "") {
        alert("Please enter both player name and score.");
        return;
    }

    // Convert score to a number
    playerScore = parseInt(playerScore);

    // Validate score
    if (isNaN(playerScore)) {
        alert("Please enter a valid score.");
        return;
    }

    // Add player to the list
    players.push({ name: playerName, score: playerScore });

    // Clear input fields
    document.getElementById("txtName").value = "";
    document.getElementById("txtScore").value = "";
}

//Function to show the list of players
function listPlayers() {
    let output = "";
    players.forEach(player => {
        output += player.name + ": " + player.score + "<br>";
    });
    document.getElementById("pOutput").innerHTML = output;
}
//Function to search the Player
function searchPlayer() {
    let searchName = document.getElementById("txtSearchName").value;
    let foundPlayer = players.find(player => player.name === searchName);
    if (foundPlayer) {
        document.getElementById("pOutput2").innerHTML = foundPlayer.name + ": " + foundPlayer.score;
    } else {
        document.getElementById("pOutput2").innerHTML = "Player not found.";
    }
}
//Function to find the Winner (highestScore)
function findWinner() {
    let highestScore = -Infinity;
    let winner = "";
    players.forEach(player => {
        if (player.score > highestScore) {
            highestScore = player.score;
            winner = player.name;
        }
    });
    document.getElementById("pOutput3").innerHTML = "Winner: " + winner + " with score " + highestScore;
}