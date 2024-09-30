function calculateKelaReimbursement(visitLength) {
    var reimbursement = 0;
    var length = parseInt(visitLength);

    if (length <= 10) {
        reimbursement = 8.00;
    } else if (length <= 20) {
        reimbursement = 11.00;
    } else if (length <= 30) {
        reimbursement = 13.50;
    } else if (length <= 45) {
        reimbursement = 16.50;
    } else {
        reimbursement = 21.00;
    }

    return reimbursement;
}

function calculateCustomerPayment(doctorsFee, kelaReimbursement) {
    var fee = parseFloat(doctorsFee);
    var reimbursement = parseFloat(kelaReimbursement);

    var officeFee = 15.90;
    var customerPayment = fee - reimbursement + officeFee;

    return customerPayment;
}

function calculate() {
    var visitLength = document.getElementById("length").value;
    var doctorsFee = parseFloat(document.getElementById("doctorsFee").value).toFixed(2);

    var kelaReimbursement = calculateKelaReimbursement(visitLength);
    var customerPayment = calculateCustomerPayment(doctorsFee, kelaReimbursement);

    document.getElementById("answer").innerHTML = "Doctor's Fee is " + doctorsFee + " euros.<br>" +
        "Kela reimbursement is " + kelaReimbursement.toFixed(2) + " euros.<br>" +
        "Office Fee is 15.90 euros.<br>" +
        "Customer needs to pay " + customerPayment.toFixed(2) + " euros.";
}
