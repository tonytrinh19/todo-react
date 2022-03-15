import React, { useEffect, useState, useRef } from "react";
import TasksList from "./TasksList";
import { v4 as uuidv4 } from "uuid";

const params = new URLSearchParams("");
params.set("name", "Toni Trinh");
params.set("email", "tonitrinh1@gmail.com");
params.set("password", "tonimail");

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [countUncompletedTasks, setCountUncompletedTasks] = useState(0);
  const TaskManager = useRef();

  const handleAddTask = (e) => {
    e.preventDefault();
    const taskName = TaskManager.current.value;
    if (taskName === "") return;
    setTasks((tasks) => [
      ...tasks,
      { id: uuidv4(), text: taskName, completed: false },
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
    task.completed = !task.completed;
    setTasks(newTasks);
  };

  useEffect(() => {
    fetch("http://localhost:1234/tasks", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIyZGVjYTU5ZDA4MDEzN2MxZjdlMDIiLCJpYXQiOjE2NDY0NTI0OTIsImV4cCI6MTY0NjQ1OTY5Mn0.VcYUybsdPgQbPKMn3MR02JOfwqxnTV_RPmEItSwwKDY",
        // "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) return;
        const tasks = data.map((task) => {
          return {
            id: uuidv4(),
            text: task.description,
            completed: task.completed,
          };
        });
        setTasks([...tasks]);
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    const uncompletedTasks = tasks.filter((task) => task.completed === false);
    setCountUncompletedTasks(uncompletedTasks.length);
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
        <p>Number of tasks left: {countUncompletedTasks}</p>
      </form>
    </div>
  );
};

export default TaskManager;
