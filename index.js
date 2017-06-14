var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var memory = require('./src/Memory');
var database = [];

app.listen(4000, function () {
console.log('running on port 4000')
});
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.render('index')
})

app.get('/set', function(req, res){
  var params = req.body
  console.log(params)
  res.redirect('/')
})
