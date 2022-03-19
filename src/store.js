import { createStore, applyMiddleware } from "redux";
import { combinedReducers } from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
