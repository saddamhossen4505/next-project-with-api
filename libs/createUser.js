import axios from "axios";

// Create user
export const createUser = async (data) => {
  // api call.
  const response = await axios.post("http://localhost:3000/api/user", data);

  // validation.
  if (!response.data) throw new Error("Invalid user data");

  // Send data.
  return response.data.user;
};
