var express    = require("express");
var app        = express();
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('wOw8h_wydGj7qFRkjKJLNQ');
// var routes     = require (__dirname+"/config/routes")


function sendMail(template_name, template_content, recipient){
    var subject = template_name
    console.log(template_name)
    console.log(template_content)
    console.log(recipient)
    console.log(subject)

    var message = {
        "subject": subject,
        "from_email": "paul@stampede.co.uk",
        "from_name": "Paul Crosby",
        "to": recipient,
        "headers": {
            "Reply-To": "message.reply@example.com"
        },
        "important": false,
        "track_opens": null,
        "track_clicks": null,
        "auto_text": null,
        "auto_html": null,
        "inline_css": null,
        "url_strip_qs": null,
        "preserve_recipients": null,
        "view_content_link": null,
        "bcc_address": null,
        "tracking_domain": null,
        "signing_domain": null,
        "return_path_domain": null,
        "merge": true,
        "merge_language": "mailchimp"
    };
    var async = false;
    var ip_pool = "Main Pool";
    // var send_at = "example send_at";
    mandrill_client.messages.sendTemplate({"template_name":template_name,"template_content":template_content,"message": message, "async": async, "ip_pool": ip_pool }, function(result) {
        console.log(result);
        
    }, function(e) {
        // Mandrill returns the error as an object with name and message keys
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
        // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
    });

}

var address = {email: "paul71crosby@gmail.com", name: "Paul"};

template_name= "Organiser-Login";


if (template_name == "Login"){
    sendMail("Login", [{"name":"firstname", "content" : "Peter"},              
                        ], 
                        [{
                    "email": address.email,
                    "name": address.name,
                    "type": "to"
                }])

} else if (template_name == "Organiser-Login"){

    sendMail(template_name, [{"name":"organisername", "content" : "SAB Miller"},
                              {"name":"firstname", "content" : "David" },
                        {"name" :"header","content":"Thank you for supporting Stampede"},
                        ], 
                        [{
                    "email": address.email,
                    "name": address.name,
                    "type": "to"
                }])

} else if  (template_name == "Index"){  

    sendMail(template_name, [{"name":"greeting", "content" : "the lads"},              
                    ], 
                    [{
                "email": address.email,
                "name": address.name,
                "type": "to"
            }])
   } else if (template_name == "Results"){

        sendMail(template_name, [{"name" :"footer" , "content" :"STAMPEDE2016"},
        {"name" :"results","content":"Well done you BEAUTY!"},              
                            ], 
                            [{
                        "email": address.email,
                        "name": address.name,
                        "type": "to"
                    }])
      }  else if (template_name == "Smash it"){
            sendMail(template_name, [{"name":"firstname", "content" : "Peter"}, 
              {"name":"raceLocation", "content" : "Try Berlin, Brighton, Blackpool or anything with a B"},
                                ], 
                                [{
                            "email": address.email,
                            "name": address.name,
                            "type": "to"
                        }])
    }        else {
                sendMail(template_name, [{"name":"firstname", "content" : "Colin"},
                                    {"name" :"greeting","content":"the Usual Suspects"},
                                    {"name" :"3up","content":"www.virginmoneylondonmarathon.com  Try the kids event"},
                                    ], 
                                    [{
                                "email": address.email,
                                "name": address.name,
                                "type": "to"
                            }])
};


var async = false;
var ip_pool = "Main Pool";
// var send_at = "example send_at";

// var users = [{
//   id: 0,
//   user: "bob@gmail.com",
//   name: "Bob",
//   interests: "Cycling, Marathons"
// },{
//   id: 1,
//   user: "Nancy",
//   name: "Nancy@hotmail.com",
//   interests: "Swimming"
// },
// {
//   id: 2,
//   user: "Dave",
//   name: "dave@pro.com",
//   interests: "Swimming, Cycling"
// }];



app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get('/index', function (req, res) {
  res.render('index');

});

app.get('/login', function (req, res) {
  res.render('login');

});

app.get('/organiser-login', function (req, res) {
  res.render('organiser-login');
});

app.get('/results', function (req, res) {
  res.render('results');
});

app.get('/smash-it', function (req, res) {
  res.render('smash-it');
});

app.get('/try-our-run', function (req, res) {
  res.render('try-our-run');
});


app.post('/index', function(req, res) {
  res.render('index');
});

app.post('/Login', function (req, res) {
  res.render('login');

});

app.post('/organiser-login', function (req, res) {
  res.render('organiser-login');
});

app.post('/results', function(req, res) {
  res.render('results');
});

app.post('/smash-it', function (req, res) {
  res.render('smash-it');
});

app.post('/try-our-run', function (req, res) {
  res.render('try-our-run');
});



// app.use(routes);
app.listen(3000, function () {
  console.log(' listening on port 3000!');
});





