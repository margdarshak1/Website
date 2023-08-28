const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

mongoose.set('strictQuery', true);

const dbConnectionString = process.env.DATABASE;

mongoose.connect(dbConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connection successful..."))
.catch(err => console.error("Connection failed:", err));

// Rest of your application code
