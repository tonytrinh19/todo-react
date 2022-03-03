import React, { useEffect, useState, useRef } from "react";
import TasksList from "./TasksList";

const InputField = () => {
  const [tasks, setTasks] = useState([
    { text: "Task 1", finished: false },
    { text: "Task 2", finished: false },
  ]);
  const inputField = useRef();

  const handleAddTask = (e) => {
    e.preventDefault();
    const taskName = inputField.current.value;
    setTasks((tasks) => [...tasks, taskName]);
    inputField.current.value = null;
  };

  const handleClearTasks = (e) => {
    e.preventDefault();
    console.log("clear Task");
  };

  return (
    <div>
      <TasksList tasks={tasks} />
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
