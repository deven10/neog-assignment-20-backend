const express = require("express");

const teacherRouter = express.Router();
teacherRouter.use(express.json());

const {
  addTeacher,
  findAllTeachers,
  deleteTeacher,
  updateTeacher,
} = require("../Controllers/teacher.controller");

// creating a new teacher
teacherRouter.post("/", async (req, res) => {
  try {
    const body = req.body;
    const teacher = await addTeacher(body);
    res
      .status(201)
      .json({ message: "New teacher added successfully", teacher });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// fetching all teachers
teacherRouter.get("/", async (req, res) => {
  try {
    const teachers = await findAllTeachers();
    if (teachers.length > 0) {
      res
        .status(200)
        .json({ message: "Teachers fetched successfully", teachers });
    } else {
      res.status(204).json({ message: "No teacher found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// updating a particular teacher
teacherRouter.post("/:teacherId", async (req, res) => {
  try {
    const teacherId = req.params.teacherId;
    const body = req.body;
    const teacher = await updateTeacher(teacherId, body);
    if (teacher) {
      res
        .status(200)
        .json({ message: "Teacher updated successfully", teacher });
    } else {
      res.status(204).json({ message: "No teacher found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// deleting a particular teacher
teacherRouter.delete("/:teacherId", async (req, res) => {
  try {
    const teacherId = req.params.teacherId;
    const teacher = await deleteTeacher(teacherId);
    if (teacher) {
      res
        .status(200)
        .json({ message: "Teacher deleted successfully", teacher });
    } else {
      res.status(204).json({ message: "No teacher found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

module.exports = teacherRouter;
