var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')
const User = require('../model/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
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

router.post('/register', verifyToken,(req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err)      
    } else {
      let payload = {subject: registeredUser._id}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})
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

        // const token = jwt.sign(
        //   { email: fetchedUser.email, userId: fetchedUser._id },
        //   "secret_this_should_be_longer",
        //   { expiresIn: "1h" }
        // );
        // res.status(200).json({
        //   token: token,
        //   expiresIn: 3600,
        //   userId: fetchedUser._id
        // });


        let payload = {subject: user._id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token,user});
      }
    }
  })
})
module.exports = router;
