import { v4 as uuidv4 } from "uuid";

const initialState = [
  { id: uuidv4(), text: "task 100", completed: false },
  { id: uuidv4(), text: "task 3", completed: true },
];
export const taskReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "tasks/addTask":
      return [...state, payload];
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
