import React from "react";

function NewTodo(props) {
  return (
    <div className="d-flex justify-content-center m-2">
      <input
        id="userInput"
        type="text"
        placeholder="Enter a new Todo"
        onChange={props.userInputChangeHandler}
      ></input>
    </div>
  );
}

export default NewTodo;
