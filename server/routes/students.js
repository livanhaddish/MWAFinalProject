var express = require('express');
var router = express.Router();
const Student = require('../model/student')
/* GET users listing. */
router.get('/', function(req, res, next) {
  Student.find({}, (err, students)=>{
    if(err) throw err;
   res.send(students);
})
});
router.post('/register', (req, res) => {
  let userData = req.body
  let student = new Student(userData)
  student.save((err, registeredstudent) => {
    if (err) {
      console.log(err)      
    } else {
      // let payload = {subject: registeredUser._id}
      // let token = jwt.sign(payload, 'secretKey')
      res.status(200).send(registeredstudent)
    }
  })
})

router.delete('/deleteStudent/:id',(req, res) => {
  let userData = req.body
  console.log(req.params.id);
  Student.findOneAndRemove({_id:req.params.id},(err, registeredstaff) => {
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