const mongoose = require('mongoose');
const User=require('./modal/userModal')

mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
    console.log("Connected to MongoDB");
}).catch(() => {
    console.error("Error connecting to MongoDB");
})

//schema
