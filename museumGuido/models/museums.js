var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
ind = require('../index');

var museumSchema = mongoose.Schema({
    name: {
        type: String
    },
    city: {
        type: String
    },
    index: {
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
    video: {
        type: String
    }
});

var museum = module.exports = mongoose.model('museums', museumSchema);
//var fmuseum = module.exports = mongoose.model('fmuseums', museumSchema);

module.exports.getMuseums = function(callback, limit) {
    museum.find(callback).limit(limit);
}


//module.exports.getFmuseums = function(callback, limit) {
//  console.log('hello');
// fmuseum.find(callback).limit(limit);
//}

/*module.exports.getSearchMuseums = function(callback, limit) {
    console.log('hello');
    console.log(ind.city);
    // var cityl = app.get('data');

    museum.find({ city: 'jaipur' }, callback).limit(limit);
}*/