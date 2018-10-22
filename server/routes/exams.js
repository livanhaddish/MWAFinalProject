var express = require('express');
var router = express.Router();
const Questions = require('../model/question');

router.get('/', function(req, res, next) {
    Questions.find({}, (err, questions)=>{
        if(err) throw err;
        console.log(questions);
       res.send(questions);

    })

  });
//   router.get('/edit/:id', function(req, res, next) {
//       let userdata = req.params.id
//     questions.findOne({_id:userdata}, (err, questions)=>{
//         if(err) throw err;
//         console.log(questions);
//        res.send(questions);

//     })

//   });
  
router.post('/add', (req, res) => {
    let questionData = req.body
    let question = new Questions(questionData)
    question.save((err, newQuestion) => {
      if (err) {
        console.log(err)      
      } else {
        // let payload = {subject: registeredUser._id}
        // let token = jwt.sign(payload, 'secretKey')
        res.status(200).send(newQuestion)
      }
    })
  })
  module.exports = router;