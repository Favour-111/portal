const express = require("express");
const studentRoute = express.Router();
const studentModel = require("../Model/StudentModel");
studentRoute.post("/api/student", async (req, res) => {
  const { name, Matric, level, email, department, gender } = req.body;

  const findOneStudent = await studentModel.findOne({ Matric: Matric });
  if (findOneStudent) {
    res.send({ success: false, msg: "Student already exists" });
  } else {
    const addStudent = await studentModel.create({
      name,
      email,
      Matric,
      level,
      gender,
      department,
    });

    res.send({ success: true, msg: "Student added successfully", addStudent });
  }
});
studentRoute.get("/api/fetch", async (req, res) => {
  const getAllStudent = await studentModel.find();
  return res.send({
    success: true,
    msg: getAllStudent,
  });
});
studentRoute.delete("/api/delete/:id", async (req, res) => {
  const { id } = req.params;
  const deleteStudent = await studentModel.findByIdAndDelete({ _id: id });
  res.send({
    success: true,
    msg: "student deleted successfully",
  });
});

studentRoute.get("/api/update/:id", async (req, res) => {
  const { id } = req.params;
  const updateStudent = await studentModel.findByIdAndUpdate(
    { _id: id },
    req.body,
    { new: true, runValidators: true }
  );
  res.send({
    success: true,
    msg: "student updated successfully",
    updateStudent,
  });
});
module.exports = studentRoute;
