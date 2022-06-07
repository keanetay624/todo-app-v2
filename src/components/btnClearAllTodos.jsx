import React from "react";

function BtnClearAllTodos(props) {
  return (
    <React.Fragment>
      <button
        className="btn btn-danger p-1 m-2"
        onClick={props.clearAllTodosHandler}
      >
        Clear All
      </button>
    </React.Fragment>
  );
}

export default BtnClearAllTodos;
