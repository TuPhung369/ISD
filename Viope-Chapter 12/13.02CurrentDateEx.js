function getCurrentDateTime() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Months are zero-indexed
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var weekday = currentDate.toLocaleDateString('en-US', { weekday: 'long' }); // Get the full name of the weekday

    // Add leading zeros if necessary
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    var formattedDateTime = weekday + ' - ' + day + '.' + month + '.' + year + '<br>' + hours + ':' + minutes + ':' + seconds;
    document.getElementById("answer").innerHTML = formattedDateTime;
}

// Call the function to display the current date and time
getCurrentDateTime();

// Update the date and time every second
setInterval(getCurrentDateTime, 1000);
