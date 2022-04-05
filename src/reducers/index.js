import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { countTasksReducer } from "./countTasks";
import { loadingReducer } from "./loading";
import { taskReducer } from "./tasks";

export const combinedReducers = combineReducers({
  tasks: taskReducer,
  count: countTasksReducer,
  auth: authReducer,
  loading: loadingReducer,
});
