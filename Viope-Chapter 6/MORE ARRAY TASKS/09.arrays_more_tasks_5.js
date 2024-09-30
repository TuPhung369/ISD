var bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O+", "AB+"];

function calculateBloodTypeDistribution() {
    var bloodTypeCounts = {};
    var totalBloodTypes = bloodTypes.length;

    // Count the occurrences of each blood type
    for (var i = 0; i < totalBloodTypes; i++) {
        var bloodType = bloodTypes[i];
        bloodTypeCounts[bloodType] = (bloodTypeCounts[bloodType] || 0) + 1;

    }
    //console.log(bloodTypeCounts); //{A+: 1, O-: 2, AB+: 5, O+: 2}
    // Calculate the percentage of each blood type
    var bloodTypesArray = Object.keys(bloodTypeCounts);
    //console.log(bloodTypesArray); //['A+', 'O-', 'AB+', 'O+']
    var bloodTypeDistribution = {};
    
    for (var i = 0; i < bloodTypesArray.length; i++) {
        var bloodType = bloodTypesArray[i];
        var count = bloodTypeCounts[bloodType];
        var percentage = (count / totalBloodTypes) * 100;
        bloodTypeDistribution[bloodType] = percentage.toFixed(2) + " %";
    }
    // for (var bloodType in bloodTypeCounts) {
    //     console.log(bloodType, "" ,bloodTypeCounts[bloodType]);
    //     var percentage = (bloodTypeCounts[bloodType] / totalBloodTypes) * 100;
    //     bloodTypeDistribution[bloodType] = percentage.toFixed(2) + " %";
    // }
    return bloodTypeDistribution;
}

function displayBloodTypeDistribution() {
    var bloodTypeDistribution = calculateBloodTypeDistribution();
    var sortedBloodTypes = [];

    // for (var bloodType in bloodTypeDistribution) {
    //     sortedBloodTypes.push(bloodType);
    // }
    for (let i = 0; i < bloodTypeDistribution.length; i++) {
        sortedBloodTypes.push(bloodTypeDistribution[i]);
    }
    
    sortedBloodTypes.sort();

    var output = "";
    for (var i = 0; i < sortedBloodTypes.length; i++) {
        var bloodType = sortedBloodTypes[i];
        output += bloodTypeDistribution[bloodType] + ": " + bloodType + "<br>";
    }

    document.getElementById("bloodTypeDistribution").innerHTML = output;
}

// Call the displayBloodTypeDistribution function when the page loads
displayBloodTypeDistribution();

// function calculateBloodTypeDistribution() {
//     var bloodTypeCounts = {};

//     // Count the occurrences of each blood type
//     bloodTypes.forEach(function(bloodType) {
//         if (bloodTypeCounts[bloodType]) {
//             bloodTypeCounts[bloodType]++;
//         } else {
//             bloodTypeCounts[bloodType] = 1;
//         }
//     });
//     // After bloodTypeCounts =   { "A+":  4,
//     //                             "O-":  2,
//     //                             "AB+": 4,
//     //                             "O+":  2
//     //                            }
//     // Calculate the total number of blood types
//     var totalBloodTypes = bloodTypes.length;

//     // Calculate the percentage of each blood type
//     var bloodTypeDistribution = {};
//     Object.keys(bloodTypeCounts).forEach(function(bloodType) {
//         var percentage = (bloodTypeCounts[bloodType] / totalBloodTypes) * 100;
//         bloodTypeDistribution[bloodType] = percentage.toFixed(2) + " %";
//     });

//     return bloodTypeDistribution;
// }
// function displayBloodTypeDistribution() {
//     var bloodTypeDistribution = calculateBloodTypeDistribution();
//     var sortedBloodTypes = Object.keys(bloodTypeDistribution).sort();

//     var output = "";
//     sortedBloodTypes.forEach(function(bloodType) {
//         output += bloodTypeDistribution[bloodType] + ": " + bloodType + "<br>";
//     });

//     document.getElementById("bloodTypeDistribution").innerHTML = output;
// }

