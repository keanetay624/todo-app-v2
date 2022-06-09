import React from "react";
import BtnAddTodo from "./btnAddTodo";
import BtnClearCompletedTodos from "./btnClearCompletedTodos";
import BtnClearAllTodos from "./btnClearAllTodos";

function Navbar(props) {
  return (
    <nav
      className="navbar mx-auto"
      style={{ borderBottom: "2px solid grey", maxWidth: "50%" }}
    >
      <span className="navbar-brand" href="#">
        Todo-List App
      </span>
      {/* <h3 className="d-flex justify-content-center">
        Outstanding Tasks: {props.numTasks}
      </h3> */}
      <BtnAddTodo
        addTodoHandler={() => props.addTodoHandler(props.newTodoId)}
      />
      <BtnClearCompletedTodos
        clearCompletedTodosHandler={props.clearCompletedTodosHandler}
      />
      <BtnClearAllTodos clearAllTodosHandler={props.clearAllTodosHandler} />
    </nav>
  );
}

export default Navbar;
