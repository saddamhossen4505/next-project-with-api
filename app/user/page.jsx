"use client";

import { useDispatch, useSelector } from "react-redux";
import { fatchAllUser, userCreate, userDelete } from "./userApi";
import { useEffect, useState } from "react";
import { userSelect } from "./userSlice";

const UserPage = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(userSelect);

  useEffect(() => {
    dispatch(fatchAllUser());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    email: "",
  });

  // handleInputChange.
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handleUserForm.
  const handleUserForm = (e) => {
    e.preventDefault();
    dispatch(userCreate(input));
    setInput({
      name: "",
      email: "",
    });
  };

  // handleDeleteUser.
  const handleDeleteUser = (id) => {
    dispatch(userDelete(id));
  };

  return (
    <>
      <form onSubmit={handleUserForm} className="user_form">
        <input
          type="text"
          placeholder="User-Name"
          value={input.name}
          name="name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Email"
          value={input.email}
          name="email"
          onChange={handleInputChange}
        />

        <button type="submit">Add Now</button>
      </form>

      <hr />

      <ul>
        {users.map((item, index) => {
          return (
            <li key={index}>
              <h2>UserName: {item.name}</h2>
              <h2>Email: {item.email}</h2>
              <button onClick={() => handleDeleteUser(item._id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserPage;
