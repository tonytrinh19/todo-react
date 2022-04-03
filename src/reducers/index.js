import { combineReducers } from "redux";
import { countTasksReducer } from "./countTasks";
import { redirectReducer } from "./redirect";
import { taskReducer } from "./tasks";

export const combinedReducers = combineReducers({
  tasks: taskReducer,
  count: countTasksReducer,
  redirect: redirectReducer,
});
