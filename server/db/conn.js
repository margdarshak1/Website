const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/startup")
.then( ()=> console.log("connection successfull..."))
.catch((err) => console.log("no connection"));