var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Memory = require('./src/Memory');
var database = [];

app.listen(4000, function () {
  console.log('running on port 4000')
});
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var memory = new Memory();

app.get('/', function(req, res){
  res.render('index')
})

app.get('/set', function(req, res){
  var newKey = Object.keys(req.query).join('')
  var newValue = req.query[newKey]
  memory.saveRecord(newKey, newValue)
  res.redirect('/')
})

app.get('/get', function(req, res){
  res.send(memory.database[req.query.key]);
})

module.exports = app;
