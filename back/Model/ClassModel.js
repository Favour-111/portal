const express = require("express");
const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    className: {
      type: String,
      required: true,
    },
    Building: {
      type: String,
      required: true,
    },
    Capacity: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const ClassModel = mongoose.model("classModel", classSchema);
module.exports = ClassModel;
