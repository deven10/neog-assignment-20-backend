const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    attendance: {
      type: Number,
      required: true,
    },
    marks: {
      type: Number,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
