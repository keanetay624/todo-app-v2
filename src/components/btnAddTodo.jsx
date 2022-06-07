import React from "react";

function BtnAddTodo(props) {
  return (
    <form>
      <button
        className="btn btn-primary p-1 m-2"
        type="submit"
        onClick={props.addTodoHandler}
      >
        Add
      </button>
    </form>
  );
}

export default BtnAddTodo;
