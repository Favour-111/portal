const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  Matric: {
    type: String,
    require: true,
  },
  level: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  department: {
    type: String,
    require: true,
  },
});
const studentModel = mongoose.model("Students", studentSchema);
module.exports = studentModel;
