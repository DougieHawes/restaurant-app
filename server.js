// import environment variables
require("dotenv").config();

// setup express app
const express = require("express");

const app = express();

const port = process.env.port;

app.listen(port, console.log(`express app running on port:${port}`));

// import mongo connection
const connectDB = require("./database/db");

connectDB();
