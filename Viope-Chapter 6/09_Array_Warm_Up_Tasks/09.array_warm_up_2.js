// 09.array_warm_up_2.js JavasScript code
// Initially, this program can translate only three words (cat, dog, bird).
// Modify the program so that it can translate more words. 
// Please feel free to choose the words yourself.
// These arrays are created when the HTML page is loaded
var englishWords = ["cat",   "dog",   "bird", "elephant", "fish", "station", "bus"]; 
//define 2 arrays it is very hard for update and manage the contents, so we need to use objects. 
var finnishWords = ["kissa", "koira", "lintu","elefanti", "kala", "asema",   "bussi"];
function translateToFinnish() {
    var givenWord = document.getElementById("txtEnglishWord").value;
    givenWord = givenWord.toLowerCase();//process to lower case all letters
    
    var outputText = "unknown word";
    var wordFound = false; //flag to break the loop no need run all of the loops.
    
    for (var index = 0; wordFound === false && index < englishWords.length; index++) {
        if (englishWords[index] === givenWord) {
            outputText = englishWords[index] + ": " + finnishWords[index];
            wordFound = true; //break the loop
        }
    } 
    
    document.getElementById("pOutput").innerHTML = outputText;
}

// End