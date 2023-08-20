const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
    },
    mobile:{
        type: String,
        require: true
    },
    whnumber:{
        type: String,
        require: true
    },
    expert:{
        type: String,
        require: true
    },
    problem:{
        type: String,
        require: true
    }
})
const User = new mongoose.model('User', UserSchema);
module.exports = User;