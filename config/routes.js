var express = require('express');
var app        = express();

//fake data
var users = [{
  id: 0,
  user: "bob@gmail.com",
  name: "Bob",
  interests: "Cycling, Marathons"
},{
  id: 1,
  user: "Nancy",
  name: "Nancy@hotmail.com",
  interests: "Swimming"
},
{
  id: 2,
  user: "Dave",
  name: "dave@pro.com",
  interests: "Swimming, Cycling"
}];

app.get('/', function (req, res) {
  res.send('index');

});

app.get('/chase', function (req, res) {
  res.render('chase');
});

app.get('/results', function (req, res) {
  res.render('results');
});

app.get('/users', function (req, res) {
  res.send('users');
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