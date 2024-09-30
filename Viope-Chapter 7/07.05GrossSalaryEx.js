function calculateSalary(hours, hourlySalary) {
    // Calculate gross salary
    var grossSalary = hours * hourlySalary;
    
    // Return the gross salary
    return grossSalary.toFixed(2); // Round to 2 decimal places
}

function showGrossSalary() {
    // Get input values
    var hours = parseFloat(document.getElementById("hours").value);
    var hourlySalary = parseFloat(document.getElementById("hourlySalary").value);
    
    // Call calculateSalary function
    var grossSalary = calculateSalary(hours, hourlySalary);
    
    // Display the result
    document.getElementById("answer").innerText = "Gross salary is " + grossSalary + " euros.";
}
