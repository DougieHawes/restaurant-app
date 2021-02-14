const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtSecret, jwtExpire } = require("../config/keys");

const User = require("../models/User");

exports.signupController = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(400).json({ errorMsg: "signup error" });
    }

    const newUser = new User({ username, email });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    await newUser.save();

    res.status(200).json({ sucessMsg: "success, please sign-in" });
  } catch (err) {
    console.log("signup controller error: ", err);
    return res.status(500).json({ errorMsg: "server error" });
  }
};

exports.signinController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ errorMsg: "signin error" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errorMsg: "signin error" });
    }

    const payload = { user: { _id: user._id } };

    jwt.sign(payload, jwtSecret, { expiresIn: jwtExpire }, (err, token) => {
      if (err) console.log("jwt error");

      const { _id, username, email, role } = user;

      res.status(200).json({ token, user: { _id, username, email, role } });
    });
  } catch (err) {
    console.log("signup controller error: ", err);
    return res.status(500).json({ errorMsg: "server error" });
  }
};
