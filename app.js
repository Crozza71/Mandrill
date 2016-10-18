var express    = require("express");
var app        = express();
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('wOw8h_wydGj7qFRkjKJLNQ');

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get('/index', function (req, res) {
  res.render('index');

});

app.get('/chase', function (req, res) {
  res.render('chase');
});

app.get('/results', function (req, res) {
  res.render('results');
});

app.post('/index', function(req, res) {
  res.render('index');
});

app.post('/chase', function(req, res) {
  res.render('chase');
});

app.post('/results', function(req, res) {
  res.render('results');
});

app.listen(3000, function () {
  console.log(' listening on port 3000!');
});