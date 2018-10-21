const mongoose = require('mongoose')

const Schema = mongoose.Schema
const questionSchema = new Schema({
    status:boolean,
    question:String
})
module.exports =mongoose.model('question',questionSchema,'questions')