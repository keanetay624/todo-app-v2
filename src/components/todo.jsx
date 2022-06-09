import React from "react";

function Todo(props) {
  return (
    <div className="todo-item">
      <input
        className="form-check-input m-2"
        type="checkbox"
        onChange={() => {
          props.toggleChecked(props.id);
        }}
        checked={props.isComplete}
      ></input>
      <span>
        <strong>
          {props.isComplete ? <strike>{props.task}</strike> : props.task}
        </strong>
      </span>
    </div>
  );
}

export default Todo;
