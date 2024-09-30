// Array containing names
let array = ["Pekka", "Minna", "Heikki", "Anna", "Jukka", "Iida"];// Function to loop through the array and log each element to the console
function loopArray() {
    // Loop through the array
    for (let i = 0; i < array.length; i++) {
        // Create a new paragraph element wiht <p> 
        let paragraph = document.createElement("p");
        // Set the text content of the paragraph to the current array element
        paragraph.textContent = array[i];
        // Append the paragraph to the body of the document
        document.body.appendChild(paragraph);
        console.log(array[i]);
    }
}