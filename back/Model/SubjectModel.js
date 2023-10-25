const express = require("express");
const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema(
  {
    courseTitle: {
      type: String,
      require: true,
    },
    courseCode: {
      type: String,
      require: true,
    },
    Level: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const SubjectModel = mongoose.model("Subject", SubjectSchema);
module.exports = SubjectModel;
