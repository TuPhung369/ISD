var names = [];
var ages = [];

function addMember() {
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value);
    
    names.push(name);
    ages.push(age);
    
    document.getElementById("memberCount").innerText = names.length;
}

function showMinors() {
    var minorsList = "";
    for (var i = 0; i < names.length; i++) {
        if (ages[i] < 18) {
            minorsList += names[i] + ", " + ages[i] + " years<br />";
        }
    }
    document.getElementById("membersList").innerHTML = minorsList;
}

function showAdults() {
    var adultsList = "";
    for (var i = 0; i < names.length; i++) {
        if (ages[i] >= 18) {
            adultsList += names[i] + ", " + ages[i] + " years<br />";
        }
    }
    document.getElementById("membersList").innerHTML = adultsList;
}

function showOldest() {
    var maxAge = Math.max(...ages);
    // var maxAge = ages[0]; // Initialize maxAge with the first element of the array
    // for (var i = 1; i < ages.length; i++) {
    //     if (ages[i] > maxAge) {
    //         maxAge = ages[i]; // Update maxAge if a larger age is found
    //     }
    // }
    var oldestList = "";
    for (var i = 0; i < names.length; i++) {
        if (ages[i] == maxAge) {
            oldestList += names[i] + ", " + ages[i] + " years<br />";
        }
    }
    document.getElementById("membersList").innerHTML = oldestList;
}

function showYoungest() {
    var minAge = Math.min(...ages);
    // Find the minimum age
    // var minAge = ages[0]; // Initialize minAge with the first element of the array
    // for (var i = 1; i < ages.length; i++) {
    //     if (ages[i] < minAge) {
    //         minAge = ages[i]; // Update minAge if a smaller age is found
    //     }
    // }
    var youngestList = "";
    for (var i = 0; i < names.length; i++) {
        if (ages[i] == minAge) {
            youngestList += names[i] + ", " + ages[i] + " years<br />";
        }
    }
    document.getElementById("membersList").innerHTML = youngestList;
}
