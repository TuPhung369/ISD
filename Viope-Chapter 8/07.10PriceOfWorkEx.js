function allCapsTitleTrimmed(text) {
    // Changes the title given to it to be ALL CAPS
    var capsText = text.toUpperCase();
    // Removes any empty white space from the beginning or the end of the title
    var trimmedText = capsText.trim();
    // Return the modified title
    return trimmedText;
}

function isSunday(dateText) {
    // Split the given date text into day, month and year parts
    var parts = dateText.split(".");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10) - 1; // Month is zero-based
    var year = parseInt(parts[2], 10);

    // Create a new Date object
    var asDate = new Date();

    // Set day, month and year properties of the Date object
    asDate.setDate(day);
    asDate.setMonth(month);
    asDate.setFullYear(year);

    // Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
    var dayOfWeek = asDate.getDay();

    // Return true if it's Sunday, otherwise false
    return dayOfWeek === 0;
}

function modifyTitle() {
    // Read value of title from the input field
    var title = document.getElementById("title").value;
    // Modify the title to be all caps and trimmed
    var modifiedTitle = allCapsTitleTrimmed(title);
    // Set the modified title back to the input field
    document.getElementById("title").value = modifiedTitle;
}

function calculate() {
    // Read date text from the input field
    var dateText = document.getElementById("date").value;
    // Check if it's Sunday
    var sunday = isSunday(dateText);
    // Calculate the length of the work (for demonstration purposes, let's say it's 107 minutes)
    var lengthOfTheWork = 107;
    // Calculate the hourly price
    var hourlyPrice = sunday ? 72.00 : 48.00;
    // Calculate the total price
    var totalPrice = (lengthOfTheWork / 60) * hourlyPrice;
    // Show the result
    document.getElementById("answer").innerHTML = "Length of the work was " + lengthOfTheWork + " minutes.<br>" +
        "The hourly price is during the " + (sunday ? "Sundays" : "workdays") + " " + hourlyPrice.toFixed(2) + " euros.<br>" +
        "The price of this repair work is " + totalPrice.toFixed(2) + " euros.";
}