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
router.get("/",(req,res)=>{
    res.status(200).json("hi");
})
// Example GET endpoint
router.get('/users/:id', async(req, res) => {
    try {
        const userId = req.params.id;

        // You can replace this hardcoded data with actual database retrieval logic
        const newUser = new User({
            name: 'John Doe',
            email: 'johndoe@example.com',
            mobile: '1234567890',
            whnumber: 'wh123',
            expert: 'some expert',
            problem: 'some problem'
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post('/users', async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, mobile, whnumber, expert, problem } = req.body;
        
        const newUser = new User({
            name,
            email,
            mobile,
            whnumber,
            expert,
            problem
        });
        console.log("got the data : ",JSON.stringify(newUser))
        // Validate the user data
        const validationError = newUser.validateSync();
        console.log(validationError)
        if (validationError) {
            res.status(400).json({ message: validationError.message });
            return;
        }
        else{
            console.log("no validation error")
        }

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post("/message", async(req,res)=>{
    const{name,email, mobile, whnumber, expert, problem} = req.body;
    if (!name || !mobile || !problem ) {
        console.log(req.body)
        res.status(422).json("pls fill the data")
    }
    else{
        console.log("got it",req.body)

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
       
let details = {
    from: "start112002up@gmail.com",
    to: "me20b2003@iiitdm.ac.in",
    subject: "New User Form Submission",
    html: `
        <html>
        <body>
            <h1>New User Form Submission</h1>
            <table>
                <tr>
                    <td>Name:</td>
                    <td>${name}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>${email}</td>
                </tr>
                <tr>
                    <td>Mobile:</td>
                    <td>${mobile}</td>
                </tr>
                <tr>
                    <td>WhatsApp Number:</td>
                    <td>${whnumber}</td>
                </tr>
                <tr>
                    <td>Expertise:</td>
                    <td>${expert}</td>
                </tr>
                <tr>
                    <td>Problem:</td>
                    <td>${problem}</td>
                </tr>
            </table>
        </body>
        </html>
    `
};

        
        mailTransporter.sendMail(details, (err)=>{
            if (err) {
                console.log("it has an error",err);
            }else{
                console.log("email has sent");
                res.status(200).json("mail sent")
            }
        })
        res.status(201).json(newUser)

    } catch (error) {
        return res.status(422).json(error);
    }
})

module.exports = router;
