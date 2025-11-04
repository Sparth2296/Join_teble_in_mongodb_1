const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/jointeble")


const db = mongoose.connection


db.once('open', (err)=>{
    if (err) {
        console.log("Mongodb Error : ", err);
        
    }
    console.log("MongoDB Connected Succssefull!!");
    
})

