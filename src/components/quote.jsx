import React from "react";

function Quote(props) {
  return (
    <div className="d-flex justify-content-center m-2">
      <div className="quote">
        <em>
          <q>{props.quote.content}</q>
          <p className="author">
            <strong>- {props.quote.author}</strong>
          </p>
        </em>
      </div>
    </div>
  );
}

export default Quote;
