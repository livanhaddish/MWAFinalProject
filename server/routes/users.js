var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')
const User = require('../model/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
<<<<<<< HEAD
function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}
=======
>>>>>>> 286bc838434997d9503f79bddd4e62997e881a00

router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err)      
    } else {
      // let payload = {subject: registeredUser._id}
      // let token = jwt.sign(payload, 'secretKey')
      res.status(200).send(registeredUser)
    }
  })
})


router.post('/login', (req, res) => {
  let userData = req.body
  User.findOne({userName: userData.userName}, (err, user) => {
    if (err) {
      console.log(err)    
    } else {
      if (!user) {
        res.status(401).send('Invalid Email')
      } else 
      if ( user.password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        let payload = {subject: user._id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      }
    }
  })
})
module.exports = router;
