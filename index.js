var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var memory = require('./src/Memory');

app.listen(4000, function () {
console.log('running on port 4000')
});
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index')
})
