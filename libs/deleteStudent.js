import axios from "axios";

// Delete Student.
export const deleteStudent = async (id) => {
  // api call
  axios.delete(`http://localhost:3000/api/student?id=${id}`);
  return id;
};
