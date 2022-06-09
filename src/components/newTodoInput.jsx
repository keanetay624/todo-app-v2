import React from "react";
import BtnAddTodo from "./btnAddTodo";

function NewTodo(props) {
  return (
    <div className="d-flex flex-column align-items-center">
      <input
        id="userInput"
        className="no-border"
        type="text"
        placeholder="What are you working on?"
        onChange={props.userInputChangeHandler}
      ></input>
      <BtnAddTodo
        addTodoHandler={() => props.addTodoHandler(props.newTodoId)}
      />
    </div>
  );
}

export default NewTodo;
