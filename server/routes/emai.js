var express = require('express');
var router = express.Router();
var nodeMailer = require('nodemailer')
var bodyParser = require('body-parser');

router.post('/send-email', function (req, res) {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'livanhadishmwa@gmail.com',
            pass: 'zpqekmubquyrrerw'
        }
    });
    let mailOptions = {
        from: '"Krunal Lathiya" livanhadishmwa@gmail.com', // Krunal Lathiya /<xx@gmail.com>/sender address
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.body, // plain text body
        html: '<b>NodeJS Email Tutorial</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
            res.send('index');
        });
    });
       module.exports=router;