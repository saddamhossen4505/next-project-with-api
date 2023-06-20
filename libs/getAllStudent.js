import axios from "axios";

// Get allStudent.
export const getAllStudent = async () => {
  // api call
  const response = await axios.get("http://localhost:3000/api/student");

  // validation.
  if (!response.data) throw new Error("Cannot get any student.");

  // sendData.
  return response.data.students;
};
