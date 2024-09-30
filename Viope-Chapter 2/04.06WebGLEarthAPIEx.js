var earth;

function initialize() {
    var options = {
        atmosphere: true,
        center: [0, 0],
        zoom: 0
    };
    earth = new WE.map('earth_div', options);
  
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(earth);

}

function goHome() {
   // todo
   earth.setView([60.245124, 24.867195]); 
   earth.setZoom(17);
}


function showCoords() {
   // todo
   earth.setView([41.893292620836945,12.483070431973514]); 
   earth.setZoom(13);
}