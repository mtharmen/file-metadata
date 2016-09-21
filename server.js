var express = require('express');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    }
});
var upload = multer({ storage: storage });

var app = express();

app.use('/', express.static(__dirname + '/styles'));

app.post('/analyze', upload.single('fileSize'), function(req,res){
    res.json({ filesize: req.file.size});
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Listening on port ', port);
});