// Map Model Import
var MapModel = require('../models/map-model');

// Default Map Settings
var default_map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '',
    maxZoom: 18,
    minZoom: 4
}).addTo(mymap);

// Get Lat & Lon Coordinates on Click
// map.on('click', function(e) {
//     alert("Lat: " + e.latlng.lat + ", Lon: " + e.latlng.lng)
// });