import React, { useEffect, useState, useRef } from "react";
import TasksList from "./TasksList";
import { v4 as uuidv4 } from "uuid";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [countUnfinishedTasks, setCountUnfinishedTasks] = useState(0);
  const TaskManager = useRef();

  const handleAddTask = (e) => {
    e.preventDefault();
    const taskName = TaskManager.current.value;
    if (taskName === "") return;
    setTasks((tasks) => [
      ...tasks,
      { id: uuidv4(), text: taskName, finished: false },
    ]);
    TaskManager.current.value = null;
  };

  const handleClearTasks = (e) => {
    e.preventDefault();
    setTasks([]);
  };

  const toggleFinish = (id) => {
    const newTasks = [...tasks];
    const task = tasks.find((task) => task.id === id);
    task.finished = !task.finished;
    setTasks(newTasks);
  };

  useEffect(() => {
    const unfinishedTasks = tasks.filter((task) => task.finished === false);
    setCountUnfinishedTasks(unfinishedTasks.length);
  }, [tasks]);

  return (
    <div>
      <TasksList tasks={tasks} toggleFinish={toggleFinish} />
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
        <p>Number of tasks left: {countUnfinishedTasks}</p>
      </form>
    </div>
  );
};

export default TaskManager;
