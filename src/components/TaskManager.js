import React, { useEffect, useRef } from "react";
import TasksList from "./TasksList";
import { connect } from "react-redux";
import { addTask, clearTasks, getTasks } from "../actions/tasks";
import { countTasks } from "../actions/countTasks";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const TaskManager = ({
  tasks,
  countTasksState,
  addTask,
  countTasks,
  clearTasks,
  getTasks,
  redirectTo,
}) => {
  const TaskManager = useRef();

  const navigate = useNavigate();

  const handleAddTask = (e) => {
    e.preventDefault();
    const taskName = TaskManager.current.value;
    if (taskName === "") return;
    addTask({ description: taskName, completed: false });
    TaskManager.current.value = null;
  };

  const handleClearTasks = (e) => {
    e.preventDefault();
    clearTasks();
  };

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    const uncompletedTasks = tasks.filter((task) => task.completed === false);
    countTasks(uncompletedTasks.length);
  }, [tasks]);

  useEffect(() => {
    if (
      redirectTo &&
      Object.keys(redirectTo).length !== 0 &&
      Object.getPrototypeOf(redirectTo !== Object.prototype)
    ) {
      navigate(redirectTo, { replace: true });
    }
  }, [redirectTo]);

  return (
    <div>
      <TasksList />
      <form>
        <input ref={TaskManager} type="description" placeholder="Task"></input>
        <input
          onClick={handleAddTask}
          type="submit"
          name="addTask"
          value="Add Task"
        ></input>
        <input
          onClick={handleClearTasks}
          type="submit"
          name="clearTasks"
          value="Clear Tasks"
        ></input>
        <p>Number of tasks left: {countTasksState}</p>
      </form>
    </div>
  );
};

TaskManager.propTypes = {
  tasks: PropTypes.array.isRequired,
  countTasksState: PropTypes.number.isRequired,
  addTask: PropTypes.func.isRequired,
  countTasks: PropTypes.func.isRequired,
  clearTasks: PropTypes.func.isRequired,
  getTasks: PropTypes.func.isRequired,
  redirectTo: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    countTasksState: state.count,
    redirectTo: state.redirect,
  };
};

// Without redux-thunk middleware
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTask: (task) => dispatch(addTask(task)),
//     countTasks: (uncompletedTasks) => dispatch(countTasks(uncompletedTasks)),
//     clearTasks: () => dispatch(clearTasks()),
//     getTasks: (tasks) => dispatch(getTasks(tasks)),
//   };
// };

export default connect(mapStateToProps, {
  getTasks,
  clearTasks,
  addTask,
  countTasks,
})(TaskManager);
