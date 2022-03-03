import React, { useEffect, useState, useRef } from "react";
import TasksList from "./TasksList";
import { v4 as uuidv4 } from "uuid";

const InputField = () => {
  const [tasks, setTasks] = useState([]);
  const inputField = useRef();

  const handleAddTask = (e) => {
    e.preventDefault();
    const taskName = inputField.current.value;
    if (taskName === "") return;
    setTasks((tasks) => [
      ...tasks,
      { id: uuidv4(), text: taskName, finished: true },
    ]);
    inputField.current.value = null;
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

  return (
    <div>
      <TasksList tasks={tasks} toggleFinish={toggleFinish} />
      <form>
        <input ref={inputField} type="text" placeholder="Task"></input>
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
        <p>Number of tasks left: {}</p>
      </form>
    </div>
  );
};

export default InputField;
