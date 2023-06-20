"use client";

import { useDispatch, useSelector } from "react-redux";
import { studentSelect } from "./studentSlice";
import { useEffect, useState } from "react";
import { fatchAllStudent, studentCreate, studentDelete } from "./studentApi";

const StudentPage = () => {
  const dispatch = useDispatch();
  const { students } = useSelector(studentSelect);

  useEffect(() => {
    dispatch(fatchAllStudent());
  }, [dispatch]);

  // Get form Data.
  const [input, setInput] = useState({
    name: "",
    roll: "",
    class_: "",
  });

  // handleInputChange.
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handleStudentForm.
  const handleStudentForm = (e) => {
    e.preventDefault();
    dispatch(studentCreate(input));
    setInput({
      name: "",
      roll: "",
      class_: "",
    });
  };

  // handleDeleteStudent.
  const handleDeleteStudent = (id) => {
    dispatch(studentDelete(id));
  };

  return (
    <>
      <hr />
      <br />
      <h2>Student form</h2>
      <hr />
      <br />
      <form onSubmit={handleStudentForm} className="student_form">
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={input.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="roll"
          placeholder="Student Roll"
          value={input.roll}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="class_"
          placeholder="Class"
          value={input.class_}
          onChange={handleInputChange}
        />
        <button type="submit">Add Student</button>
      </form>

      <hr />
      <br />

      <h2>All Student</h2>

      <hr />
      <br />
      <br />

      <ul>
        {students.map((item, index) => {
          return (
            <li key={index}>
              <h2>Name: {item.name}</h2>
              <h3>Roll-No : {item.roll}</h3>
              <h3>Class : {item.class_}</h3>
              <button onClick={() => handleDeleteStudent(item._id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default StudentPage;
