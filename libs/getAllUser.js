import axios from "axios";

// Get AllUser.
export const getAllUser = async () => {
  // api call
  const response = await axios.get("http://localhost:3000/api/user");

  // validation.
  if (!response.data) throw new Error("Cannot get any users.");

  // data send
  return response.data.users;
};
