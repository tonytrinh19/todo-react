import React from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function TasksList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(TasksList);
