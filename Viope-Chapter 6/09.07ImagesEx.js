// Create an array with file names of images
let images = ["face.png", "heart.png", "sun.png", "moon.png", "cloud.png"];

function addImages() {

    // Loop through the images array
    for (let i = 0; i < images.length; i++) {
        // Write an image element to the document
        document.write(`<img src="${images[i]}" alt="Funny shape">`);
        //document.write("<img src=\"images[i]\" alt=\"Funny shape\">");
    }
    
}
