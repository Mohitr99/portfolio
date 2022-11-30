const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({path:"./config.env"})
const db = process.env.databa
mongoose.connect(db)
.then(()=>{console.log("connection successfully")})
.catch((err)=>{console.log(err);})