var express = require('express');
//var mongo = require('mongodb').MongoClient;

var app = express();

app.use('/', express.static(__dirname + '/styles'));

app.get('/api/imagesearch/:terms', function(req, response){
    
});

app.listen(8080, function() {
    console.log('Listening on port 8080');
})