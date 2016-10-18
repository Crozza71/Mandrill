var express    = require("express");
var app        = express();
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('wOw8h_wydGj7qFRkjKJLNQ');

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");



app.listen(3000, function () {
  console.log(' listening on port 3000!');
});