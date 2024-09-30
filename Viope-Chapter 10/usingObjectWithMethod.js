var Book = function (bName, bAuthorName, bRate, bPublishYear) {
  this.name = bName;
  this.author = bAuthorName;
  this.rate = bRate;
  this.publishYear = bPublishYear;
  //
  this.getRate = () => {
    var rateText = "";

    if (this.rate > 4.5) rateText = "Amazing";
    else if (this.rate > 3.5) rateText = "Liked it";
    else if (this.rate > 2.5) rateText = "Average";
    else rateText = "didn't like it";

    return rateText;
  };
};

function objectInitializer() {
  // add three books to the list
  bookArray.push(
    new Book("Thinking, Fast and Slow", "Daniel Kahneman", 4.2, 2011)
  );
  bookArray.push(
    new Book("Zero to One", "Peter Thiel, Blake Masters", 4.2, 2004)
  );
  bookArray.push(new Book("Atomic Habits", "James Clear", 4.7, 2018));
}

function bookList() {
  // show the list of books
  var resultText = "";
  resultText +=
    "<table width='75%' ><tr>" +
    "<th>name </th><th> author </th><th> rate </th><th> publishYear </th></tr>";

  for (var i = 0; i < bookArray.length; i++) {
    resultText +=
      "<tr><td>" +
      bookArray[i].name +
      "</td><td>" +
      bookArray[i].author +
      "</td><td>" +
      bookArray[i].getRate() +
      "</td><td>" +
      bookArray[i].publishYear +
      "</td></tr>";
  }
  resultText += "</table>";

  document.getElementById("listOfbooks").innerHTML = resultText;
}

function addBook() {
  console.log("Before");
  console.log(bookArray);

  // Get information from the form
  var bookName = document.getElementById("txtBookName").value;
  var bookAuthor = document.getElementById("txtAuthorName").value;
  var bookRate = Number(document.getElementById("txtRate").value);
  var bookYear = Number(document.getElementById("txtYear").value);

  // Add the book to the list
  bookArray.push(new Book(bookName, bookAuthor, bookRate, bookYear));
  console.log("after");
  console.log(bookArray);

  // Empty the form after the book has been added
  document.getElementById("txtBookName").value = "";
  document.getElementById("txtAuthorName").value = "";
  document.getElementById("txtRate").value = "";
  document.getElementById("txtYear").value = "";
}

var bookArray = [];
// initialize the values of three books!!!
objectInitializer();
