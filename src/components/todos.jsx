import React from "react";
import Todo from "./todo.jsx";

function Todos(props) {
  const { todos, onChecked } = props;
  return (
    <div className="todo-list">
      <ol>
        {todos.map((todo) => (
          <li className="todo-item" key={todos.indexOf(todo)}>
            <Todo
              id={todos.indexOf(todo)}
              task={todo.task}
              isComplete={todo.isComplete}
              toggleChecked={onChecked}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todos;
