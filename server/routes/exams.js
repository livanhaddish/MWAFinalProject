var express = require('express');
var router = express.Router();
const questions = require('../model/user');

router.get('/', function(req, res, next) {
    questions.find({}, (err, questions)=>{
        if(err) throw err;
        console.log(questions);
       res.send(questions);

    })

  });
  router.get('/edit/:id', function(req, res, next) {
      let userdata = req.params.id
    questions.findOne({_id:userdata}, (err, questions)=>{
        if(err) throw err;
        console.log(questions);
       res.send(questions);

    })

  });
  module.exports = router;