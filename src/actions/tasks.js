const url = "http://localhost:1234/tasks";

// With redux-thunk middleware, can now return a function instead of just ab object {type:...}
export const getTasks = () => (dispatch) => {
  fetch(url, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIyZGVjYTU5ZDA4MDEzN2MxZjdlMDIiLCJpYXQiOjE2NDc3MjQ4MDQsImV4cCI6MTY0NzczMjAwNH0.2sBrnh5Xr_i8qIbEdYz2YbX7yyCPnOiTrdkpNb3zbyM",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) return;
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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIyZGVjYTU5ZDA4MDEzN2MxZjdlMDIiLCJpYXQiOjE2NDc3MjQ4MDQsImV4cCI6MTY0NzczMjAwNH0.2sBrnh5Xr_i8qIbEdYz2YbX7yyCPnOiTrdkpNb3zbyM",
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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIyZGVjYTU5ZDA4MDEzN2MxZjdlMDIiLCJpYXQiOjE2NDc3MjQ4MDQsImV4cCI6MTY0NzczMjAwNH0.2sBrnh5Xr_i8qIbEdYz2YbX7yyCPnOiTrdkpNb3zbyM",
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
