import React from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";

function TasksList({ tasks, toggleFinish }) {
  return (
    <div>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} toggleFinish={toggleFinish} />;
      })}
    </div>
  );
}

export default TasksList;
