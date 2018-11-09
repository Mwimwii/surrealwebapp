// ========[ Basic Example ]============
// var mymap = L.map('map').setView([51.505, -0.09], 13);
// L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '',
//     maxZoom: 18,
//     minZoom: 4
// }).addTo(mymap);
// ====================================



// Declare the map options we want to use
var mapOptions = {
    // center: [51.505, -0.09],
    center: [56.53696, -115.3939],
    zoom: 10
};

// Declare the default map we're going to use
// 'map' = id="map"
var mapDefault = L.map('map', mapOptions);

// Maps TileLayer
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'surreal machine',
    maxZoom: 18,
    minZoom: 4
}).addTo(mapDefault);

// Feather Icon (Used as Default Icon for Now)
var featherIcon = L.icon({
    iconUrl: '/images/feather_red.svg',
    iconSize: [40, 40], // size of the icon
    iconAnchor: [0, 40], // point of the icon which will correspond to marker's location
    popupAnchor: [20, -45] // point from which the popup should open relative to the iconAnchor
});

// Feather Icon Options
var featherOptions = {
    icon: featherIcon,
    title: "Draggable Feather",
    clickable: true,
    draggable: true
}

var popup = L.popup().setContent('<p>Sawridge<br />First Nation</p>');

// Add Markers to the Map
// ======================
// Stationary Feather
// L.marker([56.53696, -115.3939], { icon: featherIcon }).addTo(mapDefault);
// Draggable Feather
L.marker([55.29671, -114.83253], featherOptions).addTo(mapDefault).bindPopup(popup);

// featherIcon.bindPopup('Hi Welcome to Tutorialspoint').openPopup();

// Get Co-Ordinates from 'Click' event on the map
mapDefault.on('click', function(e) {
    // this function is poorly writ, commenting out parts of it cause logging just "coord" works better.
    var dmap = "[Default Map] ";
    var coord = e.latlng.toString().split(',');
    // var lat = coord[0].split('(');
    // var lng = coord[1].split(')');
    // console.log(dmap + "latitude: " + lat[1] + " & longitude: " + lat[0]);
    console.log(dmap + coord);
});