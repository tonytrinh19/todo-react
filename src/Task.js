import React, { useState } from "react";

// different styles of styling components/elements
const styleSheet = {
  display: "flex",
  flexDirection: "row",
};

const Task = ({ task, toggleFinish }) => {
  const handleCheckBox = () => {
    toggleFinish(task.id);
  };

  return (
    <div style={styleSheet}>
      <input
        style={{ margin: "1.15rem 1rem" }}
        type="checkbox"
        checked={task.finish}
        onChange={handleCheckBox}
      ></input>
      <p>{task.text}</p>
    </div>
  );
};

export default Task;
