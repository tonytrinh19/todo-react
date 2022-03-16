import React, { useEffect, useState, useRef } from "react";
import TasksList from "./TasksList";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTask, clearTasks, toggleTask } from "../actions/tasks";
import { count } from "../actions/countTasks";

const TaskManager = () => {
  const TaskManager = useRef();
  const tasksState = useSelector((state) => state.tasks);
  const countTasksState = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    const taskName = TaskManager.current.value;
    if (taskName === "") return;
    dispatch(addTask({ id: uuidv4(), text: taskName, completed: false }));
    TaskManager.current.value = null;
  };

  const handleClearTasks = (e) => {
    e.preventDefault();
    dispatch(clearTasks());
  };

  const toggleFinish = (id) => {
    dispatch(toggleTask({ id }));
  };

  useEffect(() => {
    const uncompletedTasks = tasksState.filter(
      (task) => task.completed === false
    );
    dispatch(count(uncompletedTasks.length));
  }, [tasksState]);

  return (
    <div>
      <TasksList tasks={tasksState} toggleFinish={toggleFinish} />
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

export default TaskManager;

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
