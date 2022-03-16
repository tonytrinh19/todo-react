export const addTask = ({ id, text, completed }) => {
  return {
    type: "tasks/addTask",
    payload: { id, text, completed },
  };
};

export const clearTasks = () => {
  return {
    type: "tasks/clearTasks",
  };
};

export const toggleTask = ({ id }) => {
  return {
    type: "tasks/toggleTask",
    payload: { id },
  };
};
