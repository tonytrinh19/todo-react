import { urlDev } from "../constants/url";
import _ from "lodash";

export const isAuth = () => (dispatch) => {
  const headers = new Headers();
  const token = localStorage.getItem("token");
  headers.append("Authorization", `Bearer ${token}`);

  fetch(`${urlDev}/loggedin`, {
    method: "GET",
    headers,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) throw new Error(data.error);
      if (!_.isEmpty(data)) {
        dispatch({
          type: "auth",
          payload: {
            loggedIn: data.auth,
          },
        });
      }
      // done loading
      dispatch({
        type: "loading",
        payload: {
          loading: false,
        },
      });
    })
    .catch((error) => {
      // dispatch error
      console.log("dispatch error");
      dispatch({
        type: "loading",
        payload: {
          loading: false,
        },
      });
      console.log(error);
    });
};

export const login = (email, password) => (dispatch) => {
  fetch(`${urlDev}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) throw new Error(data.error);
      if (!_.isEmpty(data)) {
        localStorage.setItem("token", data.token);
        dispatch({
          type: "auth/login",
          payload: {
            loggedIn: true,
          },
        });
      }
      dispatch({
        type: "loading",
        payload: {
          loading: false,
        },
      });
    })
    .catch((error) => {
      // dispatch error
      console.log("dispatch error");
      dispatch({
        type: "loading",
        payload: {
          loading: false,
        },
      });
      console.log(error);
    });
};
