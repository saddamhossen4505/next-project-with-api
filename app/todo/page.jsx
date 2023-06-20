"use client";

import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "./todoSlice";
import { useEffect, useState } from "react";
import { createTodo, deleteTodo, fatchAllTodos } from "./todoApi";

const TodoPage = () => {
  const { todos } = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    priority: "",
  });

  // handleInputChange.
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handleTodoForm.
  const handleTodoForm = (e) => {
    e.preventDefault();
    dispatch(createTodo(input));
    setInput({
      name: "",
      priority: "",
    });
  };

  // handleDeleteTodo
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  useEffect(() => {
    dispatch(fatchAllTodos());
  }, [dispatch]);

  return (
    <>
      <form onSubmit={handleTodoForm}>
        <input
          type="text"
          placeholder="Todo Name"
          value={input.name}
          name="name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Priority"
          value={input.priority}
          name="priority"
          onChange={handleInputChange}
        />

        <button type="submit">Add</button>
      </form>
      <hr />
      {todos.length > 0 ? (
        <ul>
          {todos.map((item, index) => {
            return (
              <li key={index}>
                <h2>
                  Todo-Name: {item.name}
                  <button onClick={() => handleDeleteTodo(item._id)}>
                    delete
                  </button>
                </h2>
              </li>
            );
          })}
        </ul>
      ) : (
        "No todos found"
      )}
    </>
  );
};

export default TodoPage;
