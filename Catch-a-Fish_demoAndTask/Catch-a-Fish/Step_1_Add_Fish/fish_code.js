var speciesArray = ["Pike","Salmon","Salmon","Trout"];
var lengths = [40, 71, 76, 22];
var weights = [4.925, 3.675, 5.400, 1.510];

// ----------------------------------------------------------------------------
function addFish() {
  // Read input
  var species = document.getElementById("txtSpecies").value;
  var length = parseFloat(document.getElementById("txtLength").value);
  var weight = parseFloat(document.getElementById("txtWeight").value);
  if (species !== "" && !isNaN(length) && !isNaN(weight)){
    // Add fish to arrays
    speciesArray.push(species);
    lengths.push(length);
    weights.push(weight);

    // Clear input fields
    document.getElementById("txtSpecies").value = "";
    document.getElementById("txtLength").value = "";
    document.getElementById("txtWeight").value = "";

    // Output success message
    document.getElementById("pOutput1").innerHTML = "Fish added successfully.";
  } else{
      alert("Invalid input.");
  }
}

// ----------------------------------------------------------------------------
function listAllCatch() {

}

// ----------------------------------------------------------------------------
function showAverageWeight() {

}

// ----------------------------------------------------------------------------
function findFish() {

}

// ----------------------------------------------------------------------------
function maxWeightFreshmanWay() {

}

// ----------------------------------------------------------------------------
function maxWeightUsingIndex() {


}

function convertKgToLbs(kilograms) {

}