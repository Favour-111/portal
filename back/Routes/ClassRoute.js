const express = require("express");
const classRoute = express.Router();
const ClassModel = require("../Model/ClassModel");

classRoute.post("/api/class", async (req, res) => {
  const { className, Building, Capacity, status } = req.body;
  const createNew = await ClassModel.create({
    className,
    Building,
    Capacity,
    status,
  });
  res.send({
    success: true,
    msg: "class added successfully",
    createNew,
  });
});
classRoute.get("/api/classes", async (req, res) => {
  const findAll = await ClassModel.find();
  return res.send({
    success: true,
    msg: findAll,
  });
});
classRoute.delete("/api/delclass/:id", async (req, res) => {
  const { id } = req.params;
  const deleteClass = await ClassModel.findByIdAndDelete({ _id: id });
  res.send({
    success: true,
    msg: "class deleted",
  });
});

module.exports = classRoute;
