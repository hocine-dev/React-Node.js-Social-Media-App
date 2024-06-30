const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

async function connectToDatabase() {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB", error);
    }
  }
  
  connectToDatabase();

app.listen(8800, () => {
  console.log("backend server is running !");
});
