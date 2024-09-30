let array = ["Milk", "Bread", "Juice", "Eggs", "Butter", "Salt", "Oranges", "Apples"];
function sortArray() {

    array.sort(); // Sort the array alphabetically as String
    array.reverse(); // Sort the array alphabetically by reverse index
    for (let i = 0; i < array.length; i++) {
    console.log(array[i]); // Log sorted array to the console
    }
    let sortedArray = array.join("<br>"); // Join elements with line breaks show on the screen
    document.getElementById("sortedArray").innerHTML = sortedArray; // Display sorted array on the screen
}