// This program retrieves library data from a web server (api.kirjastot.fi).
// The web server sends us the data in the JSON format (open the console window to see the details).
// Task 1: Modify the JavaScript code so that the program shows also the homepage address of the library.
// Task 2: Show the homepage address of the library as a link. Make sure that the link works properly.
// Note: Get the homepage address from the library object. Hint: See how the library name is retrieved in the code.

// --- This function sends a request to the server for library info.
function getLibraryInfo(libraryName) {
  //create urlString
  var urlString =
    "https://api.kirjastot.fi/v3/organisation?with=schedules&period.start=today&period.end=today&name=" +
    libraryName;
  //libraryName is "Pasilan kirjasto"
  //Create JSON file
  // Create XMLHttpRequest object
  var libraryQuery = new XMLHttpRequest();

  // Set up event listener for changes in request state
  libraryQuery.onreadystatechange = libraryQueryListener;

  // Open a GET request to the specified URL
  libraryQuery.open("GET", urlString, true);

  // Send the request to the server
  libraryQuery.send();

  function libraryQueryListener() {
    if (libraryQuery.readyState === 4 && libraryQuery.status === 200) {
      console.log(
        "The Library service returned the following JSON text: \n\n" +
          libraryQuery.responseText
      );
      showLibraryInfo(libraryQuery.responseText);
    }
  }
}

// --- This function parses the JSON text and shows the data on the web page.
function showLibraryInfo(jsonText) {
  var libraryObject = JSON.parse(jsonText); //change from JSON string to JSON objects.
  console.log(libraryObject); // Log the libraryObject to the console

  var outputText = "";
  if (libraryObject.items && libraryObject.items.length > 0) {
    var mainLibrary = libraryObject.items.find(
      (item) => item.type === "library" && item.branch_type === "main_library"
    );
    if (mainLibrary) {
      outputText +=
        "Library Name: " +
        mainLibrary.name.en +
        "<br />" +
        "Address: " +
        mainLibrary.address.street.en +
        "<br />" +
        mainLibrary.address.zipcode +
        " " +
        mainLibrary.address.city.en +
        "<br /> ";

      if (mainLibrary.schedules && mainLibrary.schedules.length > 0) {
        if (mainLibrary.schedules[0].closed === true) {
          outputText += "The library is closed today";
        } else {
          outputText +=
            "Opening times today: " +
            mainLibrary.schedules[0].opens +
            " - " +
            mainLibrary.schedules[0].closes;
        }
      }

      // Task 1: Add homepage address to the output text
      var homepage = mainLibrary.homepage && mainLibrary.homepage.en;
      if (homepage) {
        outputText += "<br />Homepage: " + homepage;

        // Task 2: Display the homepage address as a clickable link
        outputText +=
          "<br /><a href='" + homepage + "' target='_blank'>Visit Homepage</a>";
      }
    } else {
      outputText = "Main library data not found.";
    }
  } else {
    outputText = "No library data found.";
  }

  document.getElementById("pOutput").innerHTML = outputText;
}

getLibraryInfo("Pasilan kirjasto");
