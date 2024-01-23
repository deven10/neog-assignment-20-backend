const express = require("express");

const studentRouter = express.Router();
studentRouter.use(express.json());

const {
  addStudent,
  findAllStudents,
  deleteStudent,
  updateStudent,
} = require("../Controllers/student.controller");

// creating a new student
studentRouter.post("/", async (req, res) => {
  try {
    const body = req.body;
    const student = await addStudent(body);
    console.log("student created: ", student);
    res
      .status(201)
      .json({ message: "New Student added successfully", student });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// fetching all students
studentRouter.get("/", async (req, res) => {
  try {
    const students = await findAllStudents();
    if (students.length > 0) {
      res
        .status(200)
        .json({ message: "Students fetched successfully", students });
    } else {
      res.status(204).json({ message: "No Student found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// updating a particular student
studentRouter.post("/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const body = req.body;
    const student = await updateStudent(studentId, body);
    if (student) {
      res
        .status(200)
        .json({ message: "Student updated successfully", student });
    } else {
      res.status(204).json({ message: "No student found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// deleting a particular student
studentRouter.delete("/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const student = await deleteStudent(studentId);
    if (student) {
      res
        .status(200)
        .json({ message: "Student deleted successfully", student });
    } else {
      res.status(204).json({ message: "No Student found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

module.exports = studentRouter;
