import { Navigate } from "react-router-dom";
import { urlDev } from "../constants/url";
const url = urlDev + "/tasks";
const token = localStorage.getItem("token");

// With redux-thunk middleware, can now return a function instead of just ab object {type:...}
export const getTasks = () => (dispatch) => {
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
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

export const addTask =
  ({ description, completed }) =>
  (dispatch) => {
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description, completed }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) return;
        dispatch({
          type: "tasks/addTask",
          payload: {
            id: data._id,
            description: data.description,
            completed: data.completed,
          },
        });
      })
      .catch((e) => {
        console.error(e);
        // dispatch error
      });
  };

export const clearTasks = () => {
  return {
    type: "tasks/clearTasks",
  };
};

export const toggleTask =
  ({ id, completed }) =>
  (dispatch) => {
    const toggleUrl = url + "/" + id;
    fetch(toggleUrl, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !completed }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) return;
        dispatch({
          type: "tasks/toggleTask",
          payload: {
            id: data._id,
          },
        });
      })
      .catch((e) => {
        console.error(e);
        // dispatch error
      });
  };
