import axios from "axios";

export const deleteUser = async (id) => {
  // api call
  axios.delete(`http://localhost:3000/api/user?id=${id}`);

  // validation.
  if (!response.data) throw new Error("Not delete any user");

  // send Data.
  return response.id;
};
