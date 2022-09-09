import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggle } from "../store/todoSlise";

export default function TodoItem(props: any) {
  const dispatch = useDispatch();
  const deleteTask = () => dispatch(deleteTodo(props.todos.id));
  const toggleTask = () => dispatch(toggle(props.todos.id));

  return (
    <div>
      <li>
        <input
          type="checkbox"
          checked={props.todos.complited}
          name=""
          id=""
          onChange={() => toggleTask()}
        />
        <span>{props.todos.text}</span>
        <span
          style={{ marginLeft: "50px", color: "red", cursor: "pointer" }}
          onClick={() => deleteTask()}
        >
          &times;
        </span>
      </li>
    </div>
  );
}
