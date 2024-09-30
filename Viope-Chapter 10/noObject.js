var book1_name;
var book2_name;
var book3_name;

var book1_author;
var book2_author;
var book3_author;

var book1_rate;
var book2_rate;
var book3_rate;

var book1_publishYear;
var book2_publishYear;
var book3_publishYear;

function noObjectInitializer() {
  book1_name = "Thinking, Fast and Slow";
  book2_name = "Zero to One";
  book3_name = "Atomic Habits";
  
  book1_author = "Daniel Kahneman";
  book2_author = "Peter Thiel, Blake Masters";
  book3_author = "James Clear";

  book1_rate = 4.2;
  book2_rate = 4.2;
  book3_rate = 4.7;

  book1_publishYear = 2011;
  book2_publishYear = 2014;
  book3_publishYear = 2018;
}

function bookListNoObject() {
    
    // initialize the values of three books!!!
    noObjectInitializer();

    // show the list of books
    var resultText;
    resultText =  "<table width='75%'><tr>" +
    "<th>name </th><th> author </th><th> rate </th><th> publishYear </th></tr><tr><td>" +
    book1_name + "</td><td>" + book1_author + "</td><td>" + book1_rate + "</td><td>" + book1_publishYear + "</td></tr><tr><td>" +
    book2_name + "</td><td>" + book2_author + "</td><td>" + book2_rate + "</td><td>" + book2_publishYear + "</td></tr><tr><td>" +
    book3_name + "</td><td>" + book3_author + "</td><td>" + book3_rate + "</td><td>" + book3_publishYear + "</td></tr><tr><td></table>"
    
    document.getElementById("listOfbooks").innerHTML = resultText;
    
}
    