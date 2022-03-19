export const increaseUnfinishedTask = () => {
  return {
    type: "countTasks/increaseUnfinishedTask",
  };
};

export const decreaseUnfinishedTask = () => {
  return {
    type: "countTasks/decreaseUnfinishedTask",
  };
};

export const countTasks = (uncompletedTasks) => {
  return {
    type: "countTasks/count",
    payload: uncompletedTasks,
  };
};
