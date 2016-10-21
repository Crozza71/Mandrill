var express    = require("express");
var app        = express();
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('wOw8h_wydGj7qFRkjKJLNQ');

var $template_name = 'Results';
var $template_content = {



    // "name" : 'company',
    // "fname": 'firstname',

    "name" : {
        "fname" : "firstname",
        "content" : "personsnamegoeshere"
    },


    "key": "wOw8h_wydGj7qFRkjKJLNQ",
    "message": {
        "html": "<p>Example HTML content</p>",
        "text": "Example text content",
        "subject": "Testing Mandrill",
        "from_email": "paul@stampede.co.uk",
        "from_name": "Paul",
        "to": [
        {
            "email": "king_bing@hotmail.com",
            "name": "Bob",
            "type": "to"
        }
        ],
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
        "bcc_address": "message.bcc_address@example.com",
        "tracking_domain": null,
        "signing_domain": null,
        "return_path_domain": null,
        "merge": true,
        "merge_language": "mailchimp",
        "global_merge_vars": [
        {
            "name": "merge1",
            "content": "merge1 content"
        }
        ],
        "merge_vars": [
        {
            "rcpt": "recipient.email@example.com",
            "vars": [
            {
                "name": "merge2",
                "content": "merge2 content"
            }
            ]
        }
        ],    

        "attachments": [
        {
            "type": "text/plain",
            "name": "myfile.txt",
            "content": "ZXhhbXBsZSBmaWxl"
        }
        ],
        "images": [
        {
            "type": "image/png",
            "name": "IMAGECID",
            "content": "ZXhhbXBsZSBmaWxl"
        }
        ]
    },
    "async": false,
    "ip_pool": "Main Pool",
    "send_at": "example send_at"
    
}




