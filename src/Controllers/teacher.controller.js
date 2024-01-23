const Teacher = require("../Models/Teacher");

// ----------------------------
// for creating new teacher
async function addTeacher(teacherDetails) {
  try {
    const newTeacher = new Teacher(teacherDetails);
    const savedTeacher = await newTeacher.save();
    return savedTeacher;
  } catch (e) {
    throw e;
  }
}

// ----------------------------
// for getting all teachers
async function findAllTeachers() {
  try {
    const Teachers = await Teacher.find();
    return Teachers;
  } catch (e) {
    throw e;
  }
}

// ----------------------------
// for updating an teacher
async function updateTeacher(teacherId, teacherDetails) {
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      teacherId,
      teacherDetails,
      { new: true, runValidators: true }
    );
    return updatedTeacher;
  } catch (e) {
    throw e;
  }
}

// --------------------------------------
// delete an existing teacher
async function deleteTeacher(teacherId) {
  try {
    const teacher = await Teacher.findByIdAndDelete(teacherId);
    return teacher;
  } catch (e) {
    throw e;
  }
}

module.exports = { addTeacher, findAllTeachers, updateTeacher, deleteTeacher };
