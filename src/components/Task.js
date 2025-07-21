import React from "react";

function Task({ text, category, onDelete }) {
  return (
    <div className="task">
      <span>{text}</span>
      <span className="category">{category}</span>
      <button onClick={onDelete}>delete</button>
    </div>
  );
}

export default Task;
