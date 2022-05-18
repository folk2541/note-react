import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="col-12 col-lg-6">
      <div class="p-3 border bg-light">
        <h1 className="text-primary text-break">{props.title}</h1>
        <p className="text-muted text-break">{props.content}</p>
        <div className="d-block d-flex justify-content-end">
          <button class="btn btn-danger col-4 col-lg-2" onClick={handleClick}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
