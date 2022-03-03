import React, { useEffect, useState } from "react";
import TasksList from "./TasksList";

const InputField = () => {
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]);

  const handleAddTask = (e) => {
    e.preventDefault();
    console.log("add Task");
  };

  const handleClearTasks = (e) => {
    e.preventDefault();
    console.log("clear Task");
  };

  return (
    <div>
      <TasksList tasks={tasks} />
      <form>
        <input type="text" placeholder="Task"></input>
        <input onClick={handleAddTask} type="submit" value="Add Task"></input>
        <input
          onClick={handleClearTasks}
          type="submit"
          value="Clear Tasks"
        ></input>
        <p>Number of tasks left: {}</p>
      </form>
    </div>
  );
};

export default InputField;
