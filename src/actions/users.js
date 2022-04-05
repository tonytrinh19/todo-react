import { urlDev } from "../constants/url";
const url = urlDev + "/users";

export const register = (name, email, password) => (dispatch) => {
  fetch(url, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) throw new Error(data.error);
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
