import { Navigate } from "react-router-dom";
import { urlDev } from "../constants/url";
const url = urlDev + "/users/login";

export const getTasks = () => (dispatch) => {
  fetch(url, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error)
        return dispatch({
          type: "redirect/login",
          payload: "/login",
        });
      const tasks = data.map((task) => {
        return {
          id: task._id,
          description: task.description,
          completed: task.completed,
        };
      });
      dispatch({
        type: "tasks/getTasks",
        payload: tasks,
      });
    })
    .catch((e) => {
      console.error(e);
      // dispatch error
    });
};
