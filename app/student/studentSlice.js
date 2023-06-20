import { createSlice } from "@reduxjs/toolkit";
import { fatchAllStudent, studentCreate, studentDelete } from "./studentApi";

// Create studentSlice.
export const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fatchAllStudent.fulfilled, (state, action) => {
        state.students = action.payload;
      })
      .addCase(studentCreate.fulfilled, (state, action) => {
        state.students.push(action.payload);
      })
      .addCase(studentDelete.fulfilled, (state, action) => {
        state.students = state.students.filter(
          (data) => data._id !== action.payload
        );
      });
  },
});

// Export selector.
export const studentSelect = (state) => state.student;

// Export actions.
// Export reducer.
export default studentSlice.reducer;
