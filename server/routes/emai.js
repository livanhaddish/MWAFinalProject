var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail');

router.post('/send-email', function (req, res) {
    console.log(req.body);
sgMail.setApiKey('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');
const msg = {
  to: req.body.to,
  from: 'livanhaddishmwa@gmail.com',
  subject: req.body.subject,
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>'+req.body.body+'</strong>',
};
sgMail.send(msg);
 res.send(" this is from server");
    });
       module.exports=router;