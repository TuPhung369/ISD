
function showWeightGoals() {
    var originalWeight = Number(document.getElementById("weight").value);
	//Target Lose Weight Per Week
    var weightToLoseEachWeek = originalWeight * 0.1 / 7;
    var outputText = "";

    for (var i = 1; i <= 7; i++) {
        originalWeight -= weightToLoseEachWeek;
        outputText += `After ${i}. week ${originalWeight.toFixed(1)} kg<br>`;
    }

    document.getElementById("answer").innerHTML = outputText;
}