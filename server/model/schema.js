const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const schema = mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    profession : {
        type : String,
        required: true
    },
    pass: {
        type : String,
        required: true
    },
    cpass: {
        type : String,
        required: true
    },
})

schema.pre("save", async function(next){
    if(this.isModified("pass")){
        this.pass = await bcrypt.hash(this.pass, 12)
        this.cpass = await bcrypt.hash(this.cpass, 12)
    }
    next();
})

const User = mongoose.model("User",schema)
module.exports = User;