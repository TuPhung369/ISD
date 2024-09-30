//We can define more bloodTypes: A+, O-, AB+, O+
var bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O-", "AB+"];

function calculatePercentage() {
    var inputBloodType = document.getElementById("bloodType").value.toUpperCase();
    var count = 0;
    for (var i = 0; i < bloodTypes.length; i++) {
        if (bloodTypes[i].toUpperCase === inputBloodType) {
            count++;
        }
    }
    var percentage = (count / bloodTypes.length) * 100;
    document.getElementById("result").innerText = inputBloodType + " " + percentage.toFixed(2) + " percent";
}
