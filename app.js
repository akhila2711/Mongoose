const mongoose = require('mongoose');
const User=require('./modal/userModal')

mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
    console.log("Connected to MongoDB");
}).catch(() => {
    console.error("Error connecting to MongoDB");

})

const user = new User({
    name: "Akhi",
    age: 25
});
// user.save().then(() => {
//     console.log("User saved successfully");
// }).catch((error) => {
//     console.error("Error saving user:", error);
// });

async function run(){
    const newUser = user.save()
    console.log(newUser)
}
run()
//schema
