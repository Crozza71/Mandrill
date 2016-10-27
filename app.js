var express    = require("express");
var app        = express();
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('wOw8h_wydGj7qFRkjKJLNQ');



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
template_name= "Login";
if (template_name == "Login"){
    sendMail("Login", [{"name":"greeting", "content" : "Big boys"},              
                        ], 
                        [{
                    "email": address.email,
                    "name": address.name,
                    "type": "to"
                }])

} else if (template_name == "Organiser-Login"){

    sendMail(template_name, [{"name":"greeting", "content" : "the lads"},
                        {"name" :"header","content":""},
                         {"name" :"firstname","content" :"blah blah blah"},
                         {"name" : "welcome" , "content" :""},
                         {"name" :"footer" , "content" :""}               
                        ], 
                        [{
                    "email": address.email,
                    "name": address.name,
                    "type": "to"
                }])

} else if  (template_name == "Index"){  

    sendMail(template_name, [{"name":"greeting", "content" : "the lads"},
                     {"name" :"ID","content":""},
                    {"name" :"header","content":""},
                     {"name" :"firstname","content" :"blah blah blah"},
                     {"name" : "welcome" , "content" :""},
                     {"name" :"footer" , "content" :""}               
                    ], 
                    [{
                "email": address.email,
                "name": address.name,
                "type": "to"
            }])
   } else if (template_name == "Results"){

        sendMail(template_name, [{"name":"greeting", "content" : "the lads"},
                            {"name" :"header","content":""},
                             {"name" :"firstname","content" :"blah blah blah"},
                             {"name" : "welcome" , "content" :""},
                             {"name" :"footer" , "content" :""}               
                            ], 
                            [{
                        "email": address.email,
                        "name": address.name,
                        "type": "to"
                    }])
      }  else if (template_name == "Smash it"){
            sendMail(template_name, [{"name":"greeting", "content" : "the lads"},
                                {"name" :"header","content":""},
                                 {"name" :"firstname","content" :"blah blah blah"},
                                 {"name" : "welcome" , "content" :""},
                                 {"name" :"footer" , "content" :""}               
                                ], 
                                [{
                            "email": address.email,
                            "name": address.name,
                            "type": "to"
                        }])
    }        else {
                sendMail(template_name, [{"name":"greeting", "content" : "the lads"},
                                    {"name" :"header","content":""},
                                     {"name" :"firstname","content" :"blah blah blah"},
                                     {"name" : "welcome" , "content" :""},
                                     {"name" :"footer" , "content" :""}               
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


app.set("views", __dirname + "/views");
app.set("view engine", "ejs");








