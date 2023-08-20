require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose")
require("./db/conn");
const port = 8000;
const User = require("./model/user");
const cors = require("cors");
const router = require("./routes/router");


app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () =>{
    console.log(`server is starting port number ${port}`);
})
