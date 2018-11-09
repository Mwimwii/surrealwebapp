// Map Model Import
var MapModel = require('./models/map-model');

// Declare the map options we want to use
var mapOptions = {
    center: [51.505, -0.09],
    zoom: 13
};

// Declare the default map we're going to use
var mapDefault = L.map('map', mapOptions);

// Maps TileLayer
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'surreal machine',
    maxZoom: 18,
    minZoom: 4
}).addTo(mapDefault);

// Get Co-Ordinates from 'Click' event on the map
mapDefault.on('click', function(e) {
    var coord = e.latlng.toString().split(',');
    var lat = coord[0].split('(');
    var lng = coord[1].split(')');
    var dmap = "[Default Map] ";
    console.log(dmap + "latitude: " + lat[1] + "longitude: " + lat[0]);
});

// Default Map Settings
// var default_map = L.map('map').setView([51.505, -0.09], 13);
// L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '',
//     maxZoom: 18,
//     minZoom: 4
// }).addTo(mymap);

// Get Lat & Lon Coordinates on Click
// map.on('click', function(e) {
//     alert("Lat: " + e.latlng.lat + ", Lon: " + e.latlng.lng)
// });