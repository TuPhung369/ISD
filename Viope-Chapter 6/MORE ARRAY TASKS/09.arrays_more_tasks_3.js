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
