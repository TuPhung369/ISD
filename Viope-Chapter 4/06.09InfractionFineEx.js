function tellInfractionFine() {
    var speedLimit = parseFloat(document.getElementById("speedLimit").value);
    var drivingSpeed = parseFloat(document.getElementById("drivingSpeed").value);
    var answerDiv = document.getElementById("answer");

    if (!isNaN(speedLimit) && !isNaN(drivingSpeed) && speedLimit >= 0 && drivingSpeed >= 0) {
        var speedDifference = drivingSpeed - speedLimit;

        if (speedDifference <= 0) {
            answerDiv.innerHTML = "No speeding, no fine.";
        } else {
            var infractionFine;

            if (speedDifference <= 20) {
                if (speedLimit >= 10 && speedLimit <= 60) {
                    if (speedDifference <= 15) {
                        infractionFine = 85;
                    } else {
                        infractionFine = 115;
                    }
                } else if (speedLimit >= 70 && speedLimit <= 120) {
                    if (speedDifference <= 15) {
                        infractionFine = 70;
                    } else {
                        infractionFine = 100;
                    }
                }
            } else {
                answerDiv.innerHTML = "Income-based unit fine.";
                return;
            }

            if (infractionFine !== undefined) {
                answerDiv.innerHTML = "Infraction fine is " + infractionFine + " euros.";
            } else {
                answerDiv.innerHTML = "No applicable fine for the given speed limit and excess speed.";
            }
        }
    } else {
        // Display an error message for invalid input
        alert("Invalid input. Please enter valid numbers for speed limit and driving speed.");
    }
}