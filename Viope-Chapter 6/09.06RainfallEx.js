// Create an array with twelve rainfall values
let rainfall = [47.0, 36.6, 34.7, 37.0, 41.9, 47.5, 61.7, 74.8,
    65.4, 69.7, 66.1, 54.6];
function calculateSum() {

    // Initialize the sum variable to start from 0
    let sum = 0;

    // Loop through the array
    for (let i = 0; i < rainfall.length; i++) {
        // Add each rainfall value to the sum
        sum += rainfall[i];
    }

    // Write the sum of the rainfall values on the HTML page
    let answerDiv = document.getElementById("answer");
    answerDiv.innerHTML = "The annual rainfall in Helsinki is" + sum.toFixed(1) + " mm.";
}
// const array = [
//                     [
//                         [12,11],
//                         [36,21],
//                         [12,43]
//                     ],

//                     [
//                         [12,81], 
//                         [36,21],
//                         [12,43]
//                     ]
//                 ];

// for (let i = 0; i < array.length; i++){
//     for (let j = 0; j < array[i].length; j++){
//         for (let k = 0; k < array[i][j].length; k++){
//             console.log(array[i][j][k]);
//         } 
//     }
// }