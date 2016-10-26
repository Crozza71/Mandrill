var express    = require("express");
var app2        = express();
var mandrill = require('mandrill-api/mandrill');

mandrill_client = new mandrill.Mandrill('wOw8h_wydGj7qFRkjKJLNQ');
var name = "Bob Template";
var from_email = "paul@stampede.co.uk";
var from_name = "Paul";
var subject = "Results Template";
var code = "<div>example code</div>";
var text = "Example Results";
var publish = false;
var labels = [
    "example-label"
];
mandrill_client.templates.add({"name": name, "from_email": from_email, "from_name": from_name, "subject": subject, "code": code, "text": text, "publish": publish, "labels": labels}, function(result) {
    console.log(result);
    /*
    {
        "slug": "example-template",
        "name": "Example Template",
        "labels": [
            "example-label"
        ],
        "code": "<div mc:edit=\"editable\">editable content</div>",
        "subject": "example subject",
        "from_email": "from.email@example.com",
        "from_name": "Example Name",
        "text": "Example text",
        "publish_name": "Example Template",
        "publish_code": "<div mc:edit=\"editable\">different than draft content</div>",
        "publish_subject": "example publish_subject",
        "publish_from_email": "from.email.published@example.com",
        "publish_from_name": "Example Published Name",
        "publish_text": "Example published text",
        "published_at": "2013-01-01 15:30:40",
        "created_at": "2013-01-01 15:30:27",
        "updated_at": "2013-01-01 15:30:49"
    }
    */
}, function(e) {
    // Mandrill returns the error as an object with name and message keys
    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    // A mandrill error occurred: Invalid_Key - Invalid API key
});

app2.get('/index/:id', function (req, res) {
  res.render('index',{
    user:users[req.params.id]
  });

});

app2.get('/chase', function (req, res) {
  res.render('chase');
});

//only works if you take the "user.name" out
// app.get('/results', function (req, res) {
//   res.render('results');
// });

app2.get('/results/:id', function (req, res) {
  res.render('results', {
    user: users[req.params.id]
  });
});

app2.get('/users', function (req, res) {
  res.render('users',{users: users});
});

app2.post('/index', function(req, res) {
  res.render('index');
});

app2.post('/chase', function(req, res) {
  res.render('chase');
});

app2.post('/results', function(req, res) {
  res.render('results');
});

app2.post('/users', function(req, res) {
  res.render('users', {users:users});
});

app2.post('/test', function(req, res) {
  res.render('test');
});


app2.listen(3000, function () {
  console.log(' listening on port 3000!');
});