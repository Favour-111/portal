const express = require("express");
const route = express.Router();
const AdminModel = require("../Model/AdminModel");

//importing bcrypt
const bcrypt = require("bcryptjs");

route.post("/admin", async (req, res) => {
  const { name, email, password, school, gender } = req.body;

  //allowing two users not to register with the same information

  const findOneAdmin = await AdminModel.findOne({ email: email });
  if (findOneAdmin) {
    res.send({
      success: false,
      msg: "user already exists",
    });
  } else {
    //applying bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const User = await AdminModel.create({
      name,
      email,
      password: hashPassword,
      school,
      gender,
    });
    res.send({
      success: true,
      msg: "Student added successfully",
      User,
    });
  }
});

//login Route

route.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const User = await AdminModel.findOne({ email: email });
  if (!User) {
    res.send({
      success: false,
      msg: "User not found",
    });
  } else {
    const validPassword = await bcrypt.compare(password, User.password);
    if (validPassword) {
      res.send({ success: true, msg: "user logged in successfully", User });
    } else {
      res.send({ success: false, msg: "incorrect" });
    }
  }
});

module.exports = route;
