import { createStudent } from "@/libs/createStudent";
import { deleteStudent } from "@/libs/deleteStudent";
import { getAllStudent } from "@/libs/getAllStudent";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Fatch all students.
export const fatchAllStudent = createAsyncThunk(
  "student/fatchAllStudent",
  async () => {
    const students = await getAllStudent();
    return students;
  }
);

// Create Student.
export const studentCreate = createAsyncThunk(
  "student/studentCreate",
  async (data) => {
    const student = await createStudent(data);
    return student;
  }
);

// Delete Student.
export const studentDelete = createAsyncThunk("student/studentDelete", (id) => {
  deleteStudent(id);
  return id;
});
