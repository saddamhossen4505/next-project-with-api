import axios from "axios";

export const createStudent = async (data) => {
  const response = await axios.post("http://localhost:3000/api/student", data);

  // validation.
  if (!response.data) throw new Error("Invalid student data.");

  // send Data.
  return response.data.student;
};
