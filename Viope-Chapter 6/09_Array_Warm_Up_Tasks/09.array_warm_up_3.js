// 09.array_warm_up_3.js JavasScript code
// Study the code below and change it so that the program shows 
// a hand of 5 cards where cards can be from all four suits.

function randomizeCard() {
    var suitArray = ["c", "d", "h", "s"];
    var suitNumber = Math.floor(Math.random() * 3); //make random number from 0 to 3
    var cardNumber = Math.floor(Math.random() * 12) + 1; // make random number from 1 to 13
    var imageFileName = "cardImages/" + suitArray[suitNumber] + cardNumber + ".gif";
    
    return imageFileName;
}

function checkForDuplicate (hand, imageFileName) {
    for (var i = 0; i < hand.length; i++ ){
        if (hand[i] === imageFileName) {
            return true;
        }
    }
    
    return false;
}


function newHand() {
    var hand = ["", "", "", "",""]; 
    var cardCount = 0;
    
    while (cardCount < hand.length) {
        var imageFileName = randomizeCard();
        var isDuplicate = checkForDuplicate(hand, imageFileName);
        
        if (isDuplicate == false) {        
            hand[cardCount] = imageFileName;
            cardCount++;
        }
    }

    for (var i = 0; i < hand.length; i++) {
        document.write('<img src="' + hand[i] + '" alt="card image" /> ');     
    }
}

newHand();

// End