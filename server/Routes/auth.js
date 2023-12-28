const express = require("express");
const User = require("../models/userModel");
const router = express.Router();
const bcrypt = require("bcrypt");
const { secretKey } = require("../keys");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const getToken = (data, secretKey) => {
  const token = jwt.sign(data, secretKey, { expiresIn: "1hr" });

  return token;
};
router.get("/", (req, res) => {
  res.status(200).json({
    msg: "the auth router is working",
  });
});

router.post("/register", async (req, res) => {
  try {
    const { name, password, email, role, shop } = req.body;

    const isUserExists = await User.exists({ email: email });

    if (isUserExists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashPass = await bcrypt.hash(password, saltRounds);

    const user = new User({
      name: name,
      email: email,
      password: hashPass,
      role: role,
      shop: shop,
    });

    await user.save();

    const token = getToken({ _id: user._id, shop: user.shop }, secretKey);

    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });
    console.log(token);
    console.log(req.cookies.jwt);
    const updatedUser = { ...user._doc, token: token };

    res.status(200).json({
      msg: "Registration successful!",
      updatedUser,
      // user
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.log(err);
      }

      if (!result) {
        return res.status(400).json({ msg: "Invalid password" });
      }

      const token = getToken({ _id: user._id, shop: user.shop }, secretKey);

      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 3600000),
        httpOnly: true,
        sameSite: "None",
        secure: true,
      });
      const updatedUser = { ...user._doc, token: token };

      res.status(200).json({ msg: "Login successful!", updatedUser });
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = router;
