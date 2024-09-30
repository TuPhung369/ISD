// Create an array with miniGolf results of eight players 
let miniGolf = [23, 19, 37, 20, 21, 30, 26, 24];

function showResults() {
    // Sort the array specifying the number
   // miniGolf.sort((a, b) => a - b);
    // Sort the array
    miniGolf.sort();
    // Assign the smallest result to a variable
    let smallestResult = miniGolf[0];

    // Assign the index of the last array item to a variable
    let lastIndex = miniGolf.length - 1;

    // Assign the biggest result to a variable
    let biggestResult = miniGolf[lastIndex];

    // Write the answer on the page, to the answer div, as content of the div
    let answerDiv = document.getElementById("answer");
    answerDiv.innerHTML = `The smallest result is ${smallestResult} (winner).<br>The biggest result is ${biggestResult}.`;
}

// function bubbleSort(array) {
//     let n = array.length;
//     for (let i = 0; i < n - 1; i++) {
//       for (let j = 0; j < n - i - 1; j++) {
//         if (array[j] > array[j + 1]) {
//           // Swap array[j] and array[j+1]
//           let temp = array[j];
//           array[j] = array[j + 1];
//           array[j + 1] = temp;
//         }
//       }
//     }
//   }