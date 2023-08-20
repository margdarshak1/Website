const express = require("express");
const router = new express.Router();
const User = require("../model/user")
const nodemailer = require("nodemailer");

let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "start112002up@gmail.com",
        pass: "sxdcthedvkukqlsk"
    }
})

router.post("/message", async(req,res)=>{
    const{name,email, mobile, whnumber, expert, problem} = req.body;
    if (!name || !mobile || !problem ) {
        console.log(req.body)
        res.status(422).json("pls fill the data")
    }
    try {
        let user = await User.findOne({mobile});
        if (user) {
            return res.status(422).json({error: "Sorry this user is already exist"})
        }
        user = await User.create({
            name,email,mobile,whnumber, expert, problem
        })

        const newUser = await user.save();
        res.status(201).json(newUser)
        let details = {
            from: "start112002up@gmail.com",
            to: "me20b1040@iiitdm.ac.in",
            subject: "new user fill the form",
            text: `new user fill form ${newUser}`
        }
        mailTransporter.sendMail(details, (err)=>{
            if (err) {
                console.log("it has an error",err);
            }else{
                console.log("email has sent");
            }
        })
    } catch (error) {
        return res.status(422).json("you have error");
    }
})

module.exports = router;