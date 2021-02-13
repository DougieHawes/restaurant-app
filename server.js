// import environment variables
require("dotenv").config();

// setup express app
const express = require("express");

const app = express();

const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(express.json());
app.use(morgan());

const port = process.env.port;

app.listen(port, console.log(`express app running on port:${port}`));

const authRoutes = require("./routes/auth");

app.use("/api/auth", authRoutes);

// import mongo connection
const connectDB = require("./database/db");

connectDB();
