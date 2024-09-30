var book1;
var book2;
var book3;

function objectInitializer() {
    book1 = {
        name:"Thinking, Fast and Slow",
        author:"Daniel Kahneman",
        rate: 4.2,
        publishYear: 2011
    };

    book2 = {
        name:"Zero to One",
        author:"Peter Thiel, Blake Masters",
        rate: 4.2,
        publishYear: 2014
    };

    book3 = {
        name:"Atomic Habits",
        author:"James Clear",
        rate: 4.7,
        publishYear: 2018
    };

}

function bookListUingObject() {
    
    // initialize the values of three books!!!
    objectInitializer();

    // show the list of books
    var resultText = "";
    resultText = "<table width='75%'><tr>" +
    "<th>name </th><th> author </th><th> rate </th><th> publishYear </th></tr><tr><td>" +
    book1.name + "</td><td>" + book1.author + "</td><td>" + book1.rate + "</td><td>" + book1.publishYear + "</td></tr><tr><td>" +
    book2.name + "</td><td>" + book2.author + "</td><td>" + book2.rate + "</td><td>" + book2.publishYear + "</td></tr><tr><td>" +
    book3.name + "</td><td>" + book3.author + "</td><td>" + book3.rate + "</td><td>" + book3.publishYear + "</td></tr><tr><td></table>"

    document.getElementById("listOfbooks").innerHTML = resultText;
}
    