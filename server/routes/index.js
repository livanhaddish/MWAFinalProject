var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail')

router.get('/', function(req, res, next) {
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'annamereco@gmail.com',
  // to: 'test@example.com
  from: 'livanhaddishmwa@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
});

module.exports = router;
