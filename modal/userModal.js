const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        required: true,
     
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: Date,
    bestFriend: mongoose.Schema.Types.ObjectId,
    hobbies: [String],
})
const userModel = mongoose.model('person', userSchema)
module.exports = userModel