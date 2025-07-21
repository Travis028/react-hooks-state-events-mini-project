import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(categories[0]);
  };

  // Filter out "All" category from options
  const categoryOptions = categories.filter(cat => cat !== "All");

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="task-text">Details</label>
        <input
          id="task-text"
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="task-category">Category</label>
        <select 
          id="task-category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categoryOptions.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
