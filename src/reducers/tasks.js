const initialState = [];
export const taskReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "tasks/getTasks": {
      return payload;
    }
    case "tasks/addTask": {
      return [...state, payload];
    }
    case "tasks/clearTasks":
      return [];
    case "tasks/toggleTask": {
      const newState = [...state];
      const task = newState.find((task) => task.id === payload.id);
      task.completed = !task.completed;
      return newState;
    }
    default:
      return state;
  }
};
