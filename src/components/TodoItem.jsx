import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";

export default function TodoItem(props) {
  const { todo, removeTodo, completeTodo, importantTodo } = props;
  return (
    <div
      className={todo.completed ? "todo-row complete" : "todo-row"}
      style={
        todo.important
          ? {
              background:
                "linear-gradient( 90deg, rgba(17, 122, 255, 1) 0%, hsl(323deg 59% 48%) 100%)",
            }
          : {}
      }
    >
      {todo.text}{" "}
      <div className="iconsContainer">
        <button
          onClick={() => importantTodo(todo.id)}
          className="important-btn"
        >
          !
        </button>{" "}
        <RiCloseCircleLine
          style={{ marginRight: 5 }}
          onClick={() => removeTodo(todo.id)}
        />{" "}
        <BiCheckCircle onClick={() => completeTodo(todo.id)} />{" "}
      </div>{" "}
    </div>
  );
}
