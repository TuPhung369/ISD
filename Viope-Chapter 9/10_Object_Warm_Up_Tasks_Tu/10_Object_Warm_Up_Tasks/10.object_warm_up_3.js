// 10.object_warm_up_3.js JavasScript code
// Initially, this program can translate only three words (cat, dog, bird).
// Modify the program so that it can translate more words. 
// Please feel free to choose the words yourself.

function translateToFinnish() {
    translateTo("finnish");
}

function translateToSwedish() {
    translateTo("swedish");
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
            } else {
                outputText = wordArray[index].swedishWord;
            }
        }
    } 
    
    document.getElementById("pOutput").innerHTML = outputText;
}

// This array is created when the HTML page is loaded
// Note: The array is initialised with three object literals.
var wordArray = [ 
    { englishWord: "cat", finnishWord: "kissa", swedishWord: "katt" },
    { englishWord: "dog", finnishWord: "koira", swedishWord: "hund" },
    { englishWord: "bird", finnishWord: "lintu", swedishWord: "fågel" },
    { englishWord: "apple", finnishWord: "omena", swedishWord: "äpple" },
    { englishWord: "car", finnishWord: "auto", swedishWord: "bil" },
    { englishWord: "book", finnishWord: "kirja", swedishWord: "bok" },
    { englishWord: "house", finnishWord: "talo", swedishWord: "hus" },
    { englishWord: "tree", finnishWord: "puu", swedishWord: "träd" },
    { englishWord: "sun", finnishWord: "aurinko", swedishWord: "sol" },
    { englishWord: "moon", finnishWord: "kuu", swedishWord: "mån" }
];

// End