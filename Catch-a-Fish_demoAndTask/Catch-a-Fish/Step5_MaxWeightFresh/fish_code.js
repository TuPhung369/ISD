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
  var outputText = "<strong>All Catches:</strong><br>";
  for (var i = 0; i < speciesArray.length; i++) {
    outputText += speciesArray[i] + ": " + lengths[i] + "cm, " + weights[i] + "kg<br>";
  }
  document.getElementById("pOutput2").innerHTML = outputText;
}

// ----------------------------------------------------------------------------
function showAverageWeight() {
  var totalWeight = 0;
  for (var i = 0; i < weights.length; i++) {
    totalWeight += weights[i];
  }
  var averageWeight = totalWeight / weights.length;
  document.getElementById("pOutput3").innerHTML = "<strong>Average Weight:</strong> " + averageWeight.toFixed(2) + "kg";
}

// ----------------------------------------------------------------------------
function findFish() {
  var speciesSearched = document.getElementById("txtSpeciesSearched").value;
  var foundFish = [];
  for (var i = 0; i < speciesArray.length; i++) {
    if (speciesArray[i].toLowerCase() === speciesSearched.toLowerCase()) {
      foundFish.push({ species: speciesArray[i], length: lengths[i], weight: weights[i] });
    }
  }
  var outputText = "";
  if (foundFish.length > 0) {
    outputText += "<strong>Found " + foundFish.length + " " + speciesSearched + "(s):</strong><br>";
    for (var j = 0; j < foundFish.length; j++) {
      outputText += foundFish[j].species + ": " + foundFish[j].length + "cm, " + foundFish[j].weight + "kg<br>";
    }
  } else {
    outputText = speciesSearched + " not found!";
  }
  document.getElementById("pOutput4").innerHTML = outputText;
}

// ----------------------------------------------------------------------------
function maxWeightFreshmanWay() {
  var maxWeight = 0;
  for (var i = 0; i < weights.length; i++) {
    if (weights[i] > maxWeight) {
      maxWeight = weights[i];
    }
  }
  var ListMax = [];
  for (var i = 0; i < weights.length; i++) {
    if (weights[i] === maxWeight) {
      ListMax.push({species: speciesArray[i], length: lengths[i], weight: weights[i] });
    }
  }
  var outputText = "";
      outputText += "<strong>Heaviest fish (Freshman Way):</strong><br>";
    for (var j = 0; j < ListMax.length; j++) {
      outputText += j+1 + ") " + ListMax[j].species + ": " + ListMax[j].length + "cm, " + ListMax[j].weight + "kg" + " <=> " + convertKgToLbs(ListMax[j].weight).toFixed(2) + "lbs<br>";
    }
  
  document.getElementById("pOutput5").innerHTML = outputText;
}

// ----------------------------------------------------------------------------
function maxWeightUsingIndex() {
 
}

function convertKgToLbs(kilograms) {
  // 1 kg = 2.20462 lbs
  return kilograms * 2.20462;
}