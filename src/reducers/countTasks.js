const initialState = 0;
export const countTasksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "countTasks/count":
      return payload;
    case "countTasks/increaseUnfinishedTask":
      return state + 1;
    case "countTasks/decreaseUnfinishedTask":
      return state - 1;
    default:
      return state;
  }
};
