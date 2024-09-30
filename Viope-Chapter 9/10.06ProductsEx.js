// JSON data containing product information in string format
let jsonstring = `[
    {"number": 1, "name": "Samsung Smart LED-TV", "price": 449.00, "description": "HD-digi ready"},
    {"number": 2, "name": "Samsung 2.1 SoundBar Home Theater", "price": 198.00, "description": "Connect to TV and stream music wireless"},
    {"number": 3, "name": "Dilog CI+/CA module for pay-tv-cards", "price": 63.90, "description": "CI+ module for the table televisions"}
]`;
// Parse the JSON text into JavaScript objects (1 array, 3 'product' objects)
let products = JSON.parse(jsonstring);

function listProducts() {
    // Target div where the product list will be displayed
    let productListDiv = document.getElementById("productList");

    // Clear previous content
    productListDiv.innerHTML = "";

    // Loop through each product and display its information
    products.forEach(product => {
        let productInfo = document.createElement("p");
        productInfo.innerHTML = `
            Number:</strong> ${product.number}<br>
            Name:</strong> ${product.name}<br>
            Price:</strong> ${product.price.toFixed(2)}<br>
            Description:</strong> ${product.description}
        `;
        productListDiv.appendChild(productInfo);
    });
}
