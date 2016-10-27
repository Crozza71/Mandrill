var express    = require("express");
var app        = express();
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('wOw8h_wydGj7qFRkjKJLNQ');
var template_name = ""
var subject = template_name


function sendMail(template_name, template_content, recipient){
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
        "merge_language": "mailchimp",
        // "global_merge_vars": [{
        //         "name": "merge1",
        //         "content": "<h1>MERGING</h1>"
        //     }],
        // "merge_vars": [{
        //         "rcpt": "paul@stampede.co.uk",
        //         "vars": [{
        //                 "name": "lname",
        //                 "content": ""
        //             }]
        //     }],
        // "tags": [
        //     "password-resets"
        // ],
        // "subaccount": "customer-123",
        // "google_analytics_domains": [
        //     "example.com"
        // ],
        // "google_analytics_campaign": "message.from_email@example.com",
        // "metadata": {
        //     "website": "www.example.com"
        // },
        // "recipient_metadata": [{
        //         "rcpt": "recipient.email@example.com",
        //         "values": {
        //             "user_id": 123456
        //         }
        //     }],
        // "attachments": [{
        //         "type": "text/plain",
        //         "name": "myfile.txt",
        //         "content": "ZXhhbXBsZSBmaWxl"
        //     }],
        // "images": [{
        //         "type": "image/png",
        //         "name": "IMAGECID",
        //         "content": "ZXhhbXBsZSBmaWxl"
        //     }]
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

var address = {email: "paul71crosby@gmail.com", name: "Paul"}

sendMail("Login", [{"name":"firstname", "content" : "BILLY-BOB"}], [{
                "email": address.email,
                "name": address.name,
                "type": "to"
            }])



// {"name":"header", "content":"Run",}




/*var template_content =[
    
    {
        "name": "header",
        "content": "<h3>Hello *|FNAME|*</h3><h6>*|EMAIL|*</h6>"
           
    },
    {
        "name": "results",
        "content": "<p> *|FNAME|* Congratulations you completed the event!<p>"    
    },
    {
        "name": "welcome",
        "content": "<p>WELL DONE *|LNAME|* !<p>"    
    },
    {
        "name": "login",
        "content": "<p>Congratulations and Thank you for your business!You now have a login for the most prestigious Endurance Event site around! </p>"    
    },
    {
       "name": "greeting",
       "content": "the lads"  
    },
    {"name": "footer",
        "content":"copyright@2016 SBAR Endurance Running team"
    },
    {"name":"imhereandnotused",
        content:"notshown"}
];

var message = {
    "subject": "New Login114 ",
    "from_email": "paul@stampede.co.uk",
    "from_name": "Paul Crosby",
    "recipient": [{
            "email": "king_bing@hotmail.com",
            "name": "Harry Howard",
            "type": "to"
        }],
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
    "merge_language": "mailchimp",
    "global_merge_vars": [{
            "name": "merge1",
            "content": "<h1>MERGING</h1>"
        }],
    "merge_vars": [{
            "rcpt": "paul@stampede.co.uk",
            "vars": [{
                    "name": "lname",
                    "content": ""
                }]
        }],
    "tags": [
        "password-resets"
    ],
    // "subaccount": "customer-123",
    // "google_analytics_domains": [
    //     "example.com"
    // ],
    // "google_analytics_campaign": "message.from_email@example.com",
    // "metadata": {
    //     "website": "www.example.com"
    // },
    // "recipient_metadata": [{
    //         "rcpt": "recipient.email@example.com",
    //         "values": {
    //             "user_id": 123456
    //         }
    //     }],
    // "attachments": [{
    //         "type": "text/plain",
    //         "name": "myfile.txt",
    //         "content": "ZXhhbXBsZSBmaWxl"
    //     }],
    // "images": [{
    //         "type": "image/png",
    //         "name": "IMAGECID",
    //         "content": "ZXhhbXBsZSBmaWxl"
    //     }]
};*/
var async = false;
var ip_pool = "Main Pool";
// var send_at = "example send_at";


app.set("views", __dirname + "/views");
app.set("view engine", "ejs");








