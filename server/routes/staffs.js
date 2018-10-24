var express = require('express');
var router = express.Router();
const Staff = require('../model/staff')
/* GET users listing. */
router.get('/', function(req, res, next) {
    Staff.find({}, (err, staffs)=>{
    if(err) throw err;
   res.send(staffs);
})
});

router.get('/:id', function(req, res, next) {
    Staff.findOne({_id:req.params.id}, (err, staffs)=>{
    if(err) throw err;
   res.send(staffs);
})
});

router.post('/createStaff', (req, res) => {
    let userData = req.body
    let staff = new Staff(userData)
    staff.save((err, registeredstaff) => {
      if (err) {
        console.log(err)      
      } else {
        // let payload = {subject: registeredUser._id}
        // let token = jwt.sign(payload, 'secretKey')
        res.status(200).send(registeredstaff)
      }
    })
  })
  router.put('/updateStaff/:id',(req, res) => {
    let userData = req.body
    console.log(userData)
    Staff.findOneAndUpdate({_id:req.params.id},{firstName:userData.firstName,lastName:userData.lastName,email:userData.email,
      street:userData.street,city:userData.city,state:userData.state,country:userData.country,zip:userData.zip,password:userData.lastName
    
    },{new: true},(err, registeredstaff) => {
      if (err) {
        console.log(err)      
      } else {
        // let payload = {subject: registeredUser._id}
        // let token = jwt.sign(payload, 'secretKey')
        res.status(200).send(registeredstaff)
      }
    })
})
router.delete('/deletStaff/:id',(req, res) => {
  let userData = req.body
  console.log(req.params.id);
  Staff.findOneAndRemove({_id:req.params.id},(err, registeredstaff) => {
    if (err) {
      console.log(err)      
    } else {
      // let payload = {subject: registeredUser._id}
      // let token = jwt.sign(payload, 'secretKey')
      res.status(200).send(registeredstaff)
    }
  })
})
  module.exports = router;