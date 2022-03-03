import React, { useEffect, useState } from "react";

const InputField = () => {
  const [todo, setTodo] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    console.log("add Task");
  };

  const handleClearTasks = (e) => {
    e.preventDefault();
    console.log("clear Task");
  };

  return (
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
  );
};

export default InputField;
