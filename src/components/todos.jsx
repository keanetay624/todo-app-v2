import React from "react";
import Todo from "./todo.jsx";

function Todos(props) {
  const { todos, onChecked } = props;
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        // <li className="todo-item" key={todos.indexOf(todo)}>
        <Todo
          key={todos.indexOf(todo)}
          id={todos.indexOf(todo)}
          task={todo.task}
          isComplete={todo.isComplete}
          toggleChecked={onChecked}
        />
        // </li>
      ))}
    </div>
  );
}

export default Todos;
