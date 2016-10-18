var express = require('express');
var app        = express();

//SOME FAKE DATE JUST FOR THIS EXAMPLE
var books = [{
  id: 0,
  title: "Game of thrones",
  author: "GRR Martin",
  description: "Death, Sex, Sex and Death, Dragons"
},{
  id: 1,
  title: "Trainspotting",
  author: "Ervin Welsh",
  description: "More sex, drugs, stuff"
}];


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

