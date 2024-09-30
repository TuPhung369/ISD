var bookArray = [];


function objectArrayInitializing() {
    bookArray = [
    {
        name:"Thinking, Fast and Slow",
        author:"Daniel Kahneman",
        rate: 4.2,
        publishYear: 2011
    },

    {
        name:"Zero to One",
        author:"Peter Thiel, Blake Masters",
        rate: 4.2,
        publishYear: 2014
    },

    {
        name:"Atomic Habits",
        author:"James Clear",
        rate: 4.7,
        publishYear: 2018
    },
    ]
}

function bookListUingObjectArray() {
    
    // initialize the values of three books!!!
    objectArrayInitializing();
    console.log(bookArray);

    // show the list of books
    var resultText = "";
    resultText += "<table width='75%' ><tr>" +
    "<th>name </th><th> author </th><th> rate </th><th> publishYear </th></tr>";

    for(var i=0; i<bookArray.length; i++){

        resultText += "<tr><td>" + bookArray[i].name + "</td><td>" + bookArray[i].author + "</td><td>" + 
        bookArray[i].rate + "</td><td>" + bookArray[i].publishYear + "</td></tr>";
    }
    resultText += "</table>";
    
    document.getElementById("listOfbooks").innerHTML = resultText;
    toJson();

}
    
function toJson() {
    var jsonString = JSON.stringify(bookArray, null, 2 );
    console.log(jsonString);

}

function addBook() {
    console.log("I'm here");
    var newBook = {
        name:document.getElementById("BookNameField").value,
        author:document.getElementById("AuthorNameField").value,
        rate: document.getElementById("RateField").value,
        publishYear: document.getElementById("yearField").value
    }
    bookArray.push(newBook);
    toJson();
}