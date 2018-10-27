// maybe this class can be a template for map data storage
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema for the Map Model
var mapSchema = new Schema({
    maxZoom: Number,
    minZoom: Number,
    Zoom: Number,

});

// mongo sees this model, and knows that a collection of these
// "map" models will be called "maps"
var Map = mongoose.model('map', mapSchema);

module.exports = Map;