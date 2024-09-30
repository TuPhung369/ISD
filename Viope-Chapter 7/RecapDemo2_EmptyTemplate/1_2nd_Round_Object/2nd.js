//Declaration the Oject Player
class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}

let players = [];
//function addPlayer
function addPlayer() {
    let playerInfo = document.getElementById("txtPlayerInfo").value;

    // Validate input
    if (!playerInfo.includes(":")) {
        alert("Please enter player information in the format: Name:Score");
        return;
    }

    let [name, score] = playerInfo.split(":");
    score = parseInt(score);

    // Validate score
    if (isNaN(score)) {
        alert("Please enter a valid score as Number.");
        return;
    }

    // Create a new Player object and add it to the players array
    let player = new Player(name.trim(), score);
    players.push(player);

    // Clear input field
    document.getElementById("txtPlayerInfo").value = "";
}

function listPlayers() {
    let output = "";
    players.forEach(player => {
        output += player.name + ": " + player.score + "<br>";
    });
    document.getElementById("pOutput").innerHTML = output;
}

function searchPlayer() {
    let searchName = document.getElementById("txtSearchName").value;
    let foundPlayer = players.find(player => player.name === searchName);
    if (foundPlayer) {
        document.getElementById("pOutput2").innerHTML = foundPlayer.name + ": " + foundPlayer.score;
    } else {
        document.getElementById("pOutput2").innerHTML = "Player not found.";
    }
}

function findWinner() {
    if (players.length === 0) {
        alert("No players added yet.");
        return;
    }

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
