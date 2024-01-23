const Student = require("../Models/Student");

// ----------------------------
// for creating new student
async function addStudent(studentDetails) {
  try {
    const newStudent = new Student(studentDetails);
    const savedStudent = await newStudent.save();
    return savedStudent;
  } catch (e) {
    throw e;
  }
}

// ----------------------------
// for getting all students
async function findAllStudents() {
  try {
    const students = await Student.find();
    return students;
  } catch (e) {
    throw e;
  }
}

// ----------------------------
// for updating an student
async function updateStudent(studentId, studentDetails) {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      studentDetails,
      { new: true, runValidators: true }
    );
    return updatedStudent;
  } catch (e) {
    throw e;
  }
}

// --------------------------------------
// delete an existing student
async function deleteStudent(studentId) {
  try {
    const student = await Student.findByIdAndDelete(studentId);
    return student;
  } catch (e) {
    throw e;
  }
}

module.exports = { addStudent, findAllStudents, updateStudent, deleteStudent };
