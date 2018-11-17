var path = require('path')
var fs = require('fs')
var express = require('express')
var app = express()
var multer = require('multer')
var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, path.join(__dirname, '/temp/'))
  },
  filename: function(req, file, callback) {
    callback(null, file.originalname)
  }
})
var upload = multer({ storage })

app.use('/', express.static(path.join(__dirname, '/views')))

app.post('/analyze', upload.single('upfile'), (req,res) => {
  var tempPath = path.join(__dirname, '/temp/', req.file.originalname)
  fs.unlinkSync(tempPath)
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
})

var port = process.env.PORT || 8080
app.listen(port, () => {
  console.log('Listening on port ', port)
})
