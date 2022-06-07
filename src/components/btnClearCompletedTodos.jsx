import React from "react";

function BtnClearCompletedTodos(props) {
  return (
    <React.Fragment>
      <button
        className="btn btn-warning p-1 m-2"
        onClick={props.clearCompletedTodosHandler}
      >
        Clear Completed
      </button>
    </React.Fragment>
  );
}

export default BtnClearCompletedTodos;
