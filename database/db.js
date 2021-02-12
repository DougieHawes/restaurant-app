const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(
      mongoURI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      console.log("mongoDB connected")
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectDB;
