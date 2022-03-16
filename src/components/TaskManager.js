import React, { useEffect, useState, useRef } from "react";
import TasksList from "./TasksList";
import { v4 as uuidv4 } from "uuid";
import { connect, useDispatch, useSelector } from "react-redux";
import { addTask, clearTasks, toggleTask } from "../actions/tasks";
import { count } from "../actions/countTasks";

const TaskManager = ({
  tasksState,
  countTasksState,
  addTask,
  countTasks,
  clearTasks,
  toggleTask,
}) => {
  const TaskManager = useRef();
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    const taskName = TaskManager.current.value;
    if (taskName === "") return;
    addTask({ id: uuidv4(), text: taskName, completed: false });
    TaskManager.current.value = null;
  };

  const handleClearTasks = (e) => {
    e.preventDefault();
    clearTasks();
  };

  const toggleFinish = (id) => {
    toggleTask(id);
  };

  useEffect(() => {
    const uncompletedTasks = tasksState.filter(
      (task) => task.completed === false
    );
    countTasks(uncompletedTasks.length);
  }, [tasksState]);

  return (
    <div>
      <TasksList toggleFinish={toggleFinish} />
      <form>
        <input ref={TaskManager} type="text" placeholder="Task"></input>
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

const mapStateToProps = (state) => {
  return {
    tasksState: state.tasks,
    countTasksState: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
    countTasks: (uncompletedTasks) => dispatch(count(uncompletedTasks)),
    clearTasks: () => dispatch(clearTasks()),
    toggleTask: (id) => dispatch(toggleTask({ id })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);

//
// useEffect(() => {
//   fetch("http://localhost:1234/tasks", {
//     method: "GET",
//     headers: {
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIyZGVjYTU5ZDA4MDEzN2MxZjdlMDIiLCJpYXQiOjE2NDY0NTI0OTIsImV4cCI6MTY0NjQ1OTY5Mn0.VcYUybsdPgQbPKMn3MR02JOfwqxnTV_RPmEItSwwKDY",
//       // "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.error) return;
//       const tasks = data.map((task) => {
//         return {
//           id: uuidv4(),
//           text: task.description,
//           completed: task.completed,
//         };
//       });
//       setTasks([...tasks]);
//     })
//     .catch((e) => console.error(e));
// }, []);
