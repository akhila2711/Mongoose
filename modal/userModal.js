const {default:mongoose} = require("mongoose")
const mangoose=require('mongoose')
const userSchema = new mangoose.Schema({
    name: String,age:Number
})
const userModel = mangoose.model('person', userSchema)
module.exports = userModel