// 10.object_warm_up_4.js JavasScript code
// Initially, this program can translate only three words (cat, dog, bird).
// Modify the program so that it can translate these words to German, too (katze, hund, vogel) 
// Please feel free to choose the words yourself.

function translateToFinnish() {
    translateTo("finnish");
}

function translateToSwedish() {
    translateTo("swedish");
}
function translateToGerman() {
    translateTo("german");
}

function translateTo(language) {
    var givenWord = document.getElementById("txtEnglishWord").value;
    givenWord = givenWord.toLowerCase();
    
    var outputText = "unknown word";
    var wordFound = false;
    
    for (var index = 0; wordFound === false && index < wordArray.length; index++) {
        
        if (wordArray[index].englishWord === givenWord) {
            wordFound = true;
            
            if (language === "finnish") {
                outputText = wordArray[index].finnishWord;
            } else if (language === "swedish") {
                outputText = wordArray[index].swedishWord;
            } else {
                // Add the German translation
                outputText = wordArray[index].germanWord;
            }
        }
    } 
    
    document.getElementById("pOutput").innerHTML = outputText;
}

// This array is created when the HTML page is loaded
// Note: The array is initialized with object literals for each word translation.
var wordArray = [ 
    { englishWord: "cat", finnishWord: "kissa", swedishWord: "katt", germanWord: "katze" },
    { englishWord: "dog", finnishWord: "koira", swedishWord: "hund", germanWord: "hund" },
    { englishWord: "bird", finnishWord: "lintu", swedishWord: "fågel", germanWord: "vogel" }
];
