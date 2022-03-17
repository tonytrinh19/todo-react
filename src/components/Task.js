import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleTask } from "../actions/tasks";

// different styles of styling components/elements
const styleSheet = {
  display: "flex",
  flexDirection: "row",
};

const Task = ({ task, toggleTask }) => {
  const handleCheckBox = () => {
    toggleTask(task.id);
  };
  console.log(task.completed);
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
  toggleTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    tasksState: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTask: (id) => dispatch(toggleTask({ id })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
