const express = require("express");
const subjectRoute = express.Router();
const SubjectModel = require("../Model/SubjectModel");
const studentRoute = require("./StudentRoute");

subjectRoute.post("/api/subject", async (req, res) => {
  const { courseTitle, courseCode, Level } = req.body;

  const addSubject = await SubjectModel.create({
    courseTitle,
    courseCode,
    Level,
  });
  res.send({
    success: true,
    msg: "Subject added successfully",
    addSubject,
  });
});
studentRoute.get("/api/getCourse", async (req, res) => {
  const getAllSCourse = await SubjectModel.find();
  res.send({
    success: true,
    msg: getAllSCourse,
  });
});
studentRoute.delete("/api/deleteCourse/:id", async (req, res) => {
  const { id } = req.params;
  const deleteCourse = await SubjectModel.findByIdAndDelete({ _id: id });
  res.send({
    success: true,
    msg: "Course deleted successfully",
    deleteCourse,
  });
});

module.exports = subjectRoute;
