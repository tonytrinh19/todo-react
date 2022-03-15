import React, { useState } from "react";
import PropTypes from "prop-types";

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
        checked={task.completed}
        onChange={handleCheckBox}
      ></input>
      <p>{task.text}</p>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  toggleFinish: PropTypes.func.isRequired,
};

export default Task;
