const express = require("express")
const app = express()
const dotenv = require("dotenv")
require("./DB/conn")
app.use(express.json())
dotenv.config({path:"./config.env"})
const port = process.env.port
app.use(require("./router/auth"))
app.listen(port,()=>{
    console.log(`listening port ${port}`);
})