var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
ind = require('../index');

var fmuseumSchema = mongoose.Schema({
    name: {
        type: String
    },
    city: {
        type: String
    },
    lat: {
        type: String
    },
    long: {
        type: String
    },
    description: {
        type: String
    },
    mainImage: {
        type: String
    },
    differentImage: {
        type: Array
    },
    sections: {
        type: Array
    },
});

//var museum = module.exports = mongoose.model('museums', museumSchema);
var museum = module.exports = mongoose.model('fmuseums', fmuseumSchema);

//module.exports.getMuseums = function(callback, limit) {
//  museum.find(callback).limit(limit);
//}


module.exports.getFmuseums = function(callback, limit) {
    museum.find(callback).limit(limit);
}