// 10.object_warm_up_2.js JavasScript code
// Initially, this program shows the name of a library.
// Modify the program so that it shows also the opening hours of the library.
// Show the hours below the library name as follows: "Opening times today: hh:mm - hh:mm"

var library = {
  name: "Pasila Library",
  openingHours: {
    opens: "10:00",
    closes: "20:00",
  },
};

var outputText = `${library.name}<br>Opening times today: ${library.openingHours.opens} - ${library.openingHours.closes}`;

document.getElementById("pOutput").innerHTML = outputText;

// End// End
