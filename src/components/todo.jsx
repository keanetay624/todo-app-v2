import React from "react";

function Todo(props) {
  return (
    <div className="m-2 p-2">
      <span className="p-2">
        <strong>
          {props.isComplete ? <strike>{props.task}</strike> : props.task}
        </strong>
      </span>
      <input
        className="form-check-input"
        type="checkbox"
        onChange={() => {
          props.toggleChecked(props.id);
        }}
        checked={props.isComplete}
      ></input>
    </div>
  );
}

export default Todo;
