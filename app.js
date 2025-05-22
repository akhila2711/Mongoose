const mongoose = require('mongoose');
const User=require('./modal/userModal')

mongoose.connect("mongodb://127.0.0.1:27017/").then(() => {
    console.log("Connected to MongoDB");
}).catch(() => {
    console.error("Error connecting to MongoDB");

})

// user.save().then(() => {
//     console.log("User saved successfully");
// }).catch((error) => {
//     console.error("Error saving user:", error);
// });

async function run(){
    const newUser =await User.create({
        name: "Akhi",
        age: 25,
        email: "akhila123@gmail.com",
    })
    console.log("newUser",newUser)
}
run()
//schema
