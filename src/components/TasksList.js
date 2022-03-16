import React from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function TasksList({ tasks, toggleFinish }) {
  return (
    <div>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} toggleFinish={toggleFinish} />;
      })}
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  toggleFinish: PropTypes.func.isRequired,
};

export default TasksList;
