// TODO: DEFINE A FUNCTION
function addImg() {
    //CREATE A NEW IMG ELEMENT AND SAVE IT TO A VARIABLE
var img = document.createElement("img");
//SET IMG SRC TO HH LOGO
img.src="https://www.haaga-helia.fi/themes/custom/hh/logo.png";
//APPEND IMG ELEMENT TO THE IMAGES DIV
document.getElementById("images").appendChild(img);
}