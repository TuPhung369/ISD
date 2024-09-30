// The array variable names is declared inside the script element, but NOT inside the function. 
// The array is available for both functions to read from or write to.
let names = [];

function addName() {
    // Get the name from the input field
    let name = document.getElementById("name").value;

    // Add the name to the array if it's not empty
    if (name.trim() !== "") {
        names.push(name.trim());//remove the spaces.
    }

    // Display the inserted names
    displayNames();
    
    // Clear the input field
    document.getElementById("name").value = "";
}

function makeDraw() {
    // Randomize the index of the winner
    let winnerIndex = Math.floor(Math.random() * names.length);

    // Display the winner
    document.getElementById("answer").innerHTML = "<br><em>Winner is: </em>" + names[winnerIndex];
}

function displayNames() {
    // Clear the previous names
    document.getElementById("nameList").innerHTML = "";

    // Display the inserted names
    let nameListHTML = "<strong>Inserted names: </strong><br>";
    for (let i = 0; i < names.length; i++) {
		if (i == names.length -1){//the last element or the nameList have only one no need enter new line.
			nameListHTML +=names[i];
		}else{
        	nameListHTML +=names[i] + "<br>";
		}
    }
    document.getElementById("nameList").innerHTML =  nameListHTML;
}