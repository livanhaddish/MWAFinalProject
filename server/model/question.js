const mongoose = require('mongoose')

const Schema = mongoose.Schema
const questionSchema = new Schema({
    status:Boolean,
    question:String,
    answer:String
})
module.exports =mongoose.model('question',questionSchema,'questions');
//kkkkkkkkkkkkkkk