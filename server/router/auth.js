const express = require("express");
const bcrypt = require("bcryptjs")
const router = express.Router();
require("../DB/conn");
const User = require("../model/schema");
router.get("", (req, res) => {
  res.send("hello from auth");
});
router.get("/about", (req, res) => {
  res.send("hello from ABOUT auth");
});
router.post("/signup", async (req, res) => {
  const { name, email, profession, pass, cpass } = req.body;
  if (!name || !email || !profession || !pass || !cpass) {
    return res.status(422).json({ err: "filled properly" });
  }
  try {
    const userexist = await User.findOne({ email: email });
    if(pass != cpass){
      return res.status(201).json({err: "confirm password does not match"})
    }
    if (userexist) {
      return res.status(422).json({ err: "user already exist" });
    }
    const user = new User({ name, email, profession, pass, cpass });
    const userRegister = await user.save();
    if (userRegister) {
        return res.status(201).json({ err: "sr" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req,res)=>{
  let ismatch;
  try{
  const {email, pass} = req.body;
  if(!email || !pass){
    return res.status(422).json({err:"please fil data"})
  }

    const userlogin = await User.findOne({email : email});
    if(userlogin){

      ismatch = await bcrypt.compare(pass, userlogin.pass)
    }
    if(!ismatch){
      return res.status(400).json({err:"invalid credential"})
    }
    else{
      return res.status(200).json({msg:"lgs"})
    }
  }
  catch(e){

  }

  }
)

module.exports = router;
