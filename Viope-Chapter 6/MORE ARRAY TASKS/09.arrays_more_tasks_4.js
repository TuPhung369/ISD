function generateLotteryNumbers() {
    var lotteryNumbers = [];

    // Generate 7 unique lottery numbers
    // while (lotteryNumbers.length < 7) {
    //     var randomNumber = Math.floor(Math.random() * 38) + 1;
    //     if (!lotteryNumbers.includes(randomNumber)) {
    //         lotteryNumbers.push(randomNumber);
    //     }
    // }
    //step 1: generate 7 unique lottery numbers
    for (var i = lotteryNumbers.length; i < 7; i++) {
        var randomNumber;
        var found;
        
        for (var j = 0; ; j++) { //generate random number until unique number is found
            randomNumber = Math.floor(Math.random() * 38) + 1;
            found = false; // Reset found flag for each iteration => flag is used to check if randomNumber is already present in lotteryNumbers
            
            // Check if randomNumber is already present in lotteryNumbers
            for (var k = 0; k < lotteryNumbers.length; k++) {
                if (lotteryNumbers[k] === randomNumber) {
                    found = true;
                    break; // Exit the loop if randomNumber is found
                }
            }
            
            if (!found) {
                break; // Exit the loop if a unique randomNumber is found
            }
        }
    
        lotteryNumbers.push(randomNumber);
    }
    
    // Sort the lottery numbers in ascending order
    lotteryNumbers.sort(function(a, b) { //sort default for string not for number. that is the reason we need to call function.
        return a - b;
    });

    return lotteryNumbers;
}

function displayLotteryNumbers() {
    var lotteryNumbers = generateLotteryNumbers();
    var ouputLottery = [];
    //console.log(typeof lotteryNumbers);
    for (var i = 0; i < lotteryNumbers.length; i++) {
        ouputLottery += lotteryNumbers[i] + " "
    }
    //var lotteryNumbersString = lotteryNumbers.join(" ");
    document.getElementById("lotteryNumbers").innerText = ouputLottery;
}

// Call the displayLotteryNumbers function when the page loads
displayLotteryNumbers();
// let lotteryarray = [/* Your array elements */];

// // Bubble sort algorithm
// for (let i = 0; i < lotteryarray.length - 1; i++) {
//     for (let j = 0; j < lotteryarray.length - i - 1; j++) {
//         if (lotteryarray[j] > lotteryarray[j + 1]) {
//             // Swap elements
//             let temp = lotteryarray[j];
//             lotteryarray[j] = lotteryarray[j + 1];
//             lotteryarray[j + 1] = temp;
//         }
//     }
