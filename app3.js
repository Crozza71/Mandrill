var express    = require("express");
var app3        = express();
var mandrill = require('node-mandrill')('wOw8h_wydGj7qFRkjKJLNQ');
// var results_template = require('./views/results.ejs');

// var mandrill = require('mandrill-api/mandrill');
// var mandrill_client = new mandrill.Mandrill('wOw8h_wydGj7qFRkjKJLNQ');

app3.set("views", __dirname + "/views");
app3.set("view engine", "ejs");


mandrill('/messages/send', {

    message: {

        to: [{email: 'paul@stampede.co.uk', name: 'Paul Crosby'}],
        from_email: 'paul@stampede.co.uk',
        subject: "We are getting there!",
      
        html: "<html>"+
'  <head>'+
'    <title>Results</title>'+
'      <script type="text/javascript" src="app.js"></script>'+
'      <link rel="stylesheet" type="text/css" href="style.css">'+
'  </head>'+
'  <body>'+
'     <h3>*|DATE:d/m/y|*</h3> ' +
'      <h2>Hello *|FNAME|*</h2>'+
'      <h6>*|EMAIL|*</h6>'+
'      <div class="finalised" >'+
'        <p>Well done , you smashed it!'+
'          <ol>'+
'            <li>Winner '+
'            <br>'+
'            <a href>https://stampede.co.uk</a></li>'+
'            <li>Your place '+
'            <br>'+
'            <a href>https://stampede.co.uk</a></li>'+
'            <li>Check out the webpage for the splits '+
'            <br>'+
'            <a href>https://stampede.co.uk</a></li>'+
'          </ol>'+
'        </div> '+
'          <p>Keep on Running</p>'+
'          <br>'+
'          <div class="greeting">'+
'          Regards'+
'          <br>'+
'          Stampede Team'+
'          </div>'+
'        '+
'  </body>'+
'</html>'
    }
}, function(error, response)
{
    //uh oh, there was an error
    if (error) console.log( JSON.stringify(error) );

    //everything's good, lets see what mandrill said
    else console.log(response);
});





//fake data
var users = [{
  id: 0,
  user: "bob@gmail.com",
  name: "Bob",
  interests: "Cycling, Marathons"
},
{
  id: 1,
  user: "Nancy@hotmail.com",
  name: "Nancy",
  interests: "Swimming"
},
{
  id: 2,
  user: "Brutus@hotmail.com",
  name: "Brutus",
  interests: "Triathlons,Marathons, Swimming, Cycling"
},
{
  id: 3,
  user: "Doris@hotmail.com",
  name: "Doris",
  interests: "Swimming, Cycling"
},
{
  id: 4,
  user: "dave@pro.com",
  name: "Dave",
  interests: "Swimming, Cycling"
}];

app3.get('/index/:id', function (req, res) {
  res.render('index',{
    user:users[req.params.id]
  });

});

app3.get('/chase', function (req, res) {
  res.render('chase');
});

//only works if you take the "user.name" out
// app.get('/results', function (req, res) {
//   res.render('results');
// });

app3.get('/results/:id', function (req, res) {
  res.render('results', {
    user: users[req.params.id]
  });
});

app3.get('/users', function (req, res) {
  res.render('users',{users: users});
});

app3.post('/index', function(req, res) {
  res.render('index');
});

app3.post('/chase', function(req, res) {
  res.render('chase');
});

app3.post('/results', function(req, res) {
  res.render('results');
});

app3.post('/users', function(req, res) {
  res.render('users', {users:users});
});

app3.post('/test', function(req, res) {
  res.render('test');
});


app3.listen(3000, function () {
  console.log(' listening on port 3000!');
});