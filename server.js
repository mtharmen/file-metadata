var express = require('express');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads');
    }
});
var upload = multer({ storage: storage });
//var mongo = require('mongodb').MongoClient;

var app = express();

app.use('/', express.static(__dirname + '/styles'));

app.post('/', upload.single('file'), function(req,res){
    console.log(req.file);
    res.send('Hello World.');
});

app.listen(8080, function() {
    console.log('Listening on port 8080');
})