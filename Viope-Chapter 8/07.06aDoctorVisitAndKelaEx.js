function calculateKelaReimbursement(visitLength) {
    // Convert the visit length to a number
    visitLength = parseInt(visitLength);

    // Determine the maximum Kela reimbursement based on the visit length
    if (visitLength <= 10) {
        return 8.00;
    } else if (visitLength <= 20) {
        return 11.00;
    } else if (visitLength <= 30) {
        return 13.50;
    } else if (visitLength <= 45) {
        return 16.50;
    } else {
        return 21.00;
    }
}

function calculate() {
    // Get the visit length from the input field
    var visitLength = document.getElementById("length").value;

    // Call the function to calculate Kela reimbursement
    var kelaReimbursement = calculateKelaReimbursement(visitLength);

    // Display the result on the page
    document.getElementById("answer").innerHTML = "Length of visit is " + visitLength + " minutes.<br>Kela reimbursement is " + kelaReimbursement.toFixed(2) + " euros.";
}