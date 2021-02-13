const bcrypt = require("bcryptjs");

const User = require("../models/User");

exports.signupController = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(400).json({ errorMsg: "email already in use" });
    }

    const newUser = new User({ username, email });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    await newUser.save();

    res.status(200).json({ sucessMsg: "success, please sign-in" });
  } catch (err) {
    console.log("signup controller error: ", err);
  }
};
