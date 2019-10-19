var compression = require('compression');
var express = require('express');
var app = express();


//app.use(compression());
app.use(express.static('public'));
app.use('/museums', express.static(__dirname + '/Museums'));
app.use('/places', express.static(__dirname + '/Museums/Sections'));
var port = process.env.PORT || 3000
var bodyParser = require('body-parser');
var fs = require('fs');
var mongoose = require('mongoose');
var city = module.exports
    //var cities = require('.citydata/cities.json');
    //console.log("starting");


museum = require('./models/museums');

fmuseum = require('./models/fmuseums');
//console.log(fmuseum);

mongoose.connect('mongodb://localhost/mguido');
var db = mongoose.Connection;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


console.log(__dirname);

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

var muSchema = mongoose.Schema({
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

var Museum = mongoose.model('Museum', muSchema);
var contents = fs.readFileSync("cities.json");

app.get("/", function(req, res) {
    res.send("hello");

})
app.get("/citylist", function(req, res) {
        var cityDetails = JSON.parse(contents);
        res.send(cityDetails);
        Console.log("citylist request");
    })
    //console.log(mu);
app.get('/Famous/museums', function(req, res) {

    museum.getMuseums(function(err, museums) {
        if (err) {
            throw err;
        }

        res.json(museums);
        console.log("Museums rquest is made");
        console.log(museums);
    })
});


app.post('/Search/museums', function(req, res) {
    city = req.body.city;
    console.log(city);

    Museum.find({ city }, function(err, museums) {
        if (err) {
            res.send('something went wrong');
        }
        res.send(museums);
    });
});
app.get('/fmuseums', function(req, res) {
    console.log("hello");
    fmuseum.getFmuseums(function(err, fmuseums) {
        console.log("hello");
        if (err) {
            throw err;
        }
        res.json(fmuseums);
    })
});

/*var callback = function(err, data) {
        if (err) {
            return console.error(err);
        } else {
            console.log('hello');
            res.send(data);
        }
    }
    /*mu.find(function (err, todos) {
        if (err) return console.error(err);
        console.log(todos)
      });*/
// mu.find({ city }, callback);
/*  db.open(function(err,db){ // <------everything wrapped inside this function
      db.collection('museums', function(err, collection) {
          collection.find(city).toArray(function(err, items) {
              console.log(items);
              res.send(items);
          });
      });
  });*/
/* mongoose.connect('mongodb://localhost', function(err, client) {
     if (err) throw err;

     var db = client.db('mguido');

     db.collection('museums').find({ city }, function(err, items) {
         if (err) throw err;
         ///    console.log(result.name);
         res.send(items);
         client.close();
     });
 });
 //console.log(app.set('data', req.body.city));
 // museum.find({ city }, callback).limit(limit);
 /* museum.getSearchMuseums(function(err, museums) {
      if (err) {
          throw err;
      }
      res.json(museums);
  })*/
app.listen(port, function() {
    console.log("Server running at 3000 port");
});
app.listen(3000, "0.0.0.0");