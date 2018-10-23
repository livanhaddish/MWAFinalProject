const mongoose = require('mongoose')

const Schema = mongoose.Schema
const answerSchema = new Schema({
    studentName:String,
    status:Boolean,
     number:String,

    answer:String
})
module.exports =mongoose.model('answer',answerSchema,'answers')