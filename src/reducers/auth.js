const initialState = false;
export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "auth":
      return payload.loggedIn;
    case "auth/login":
      return payload.loggedIn;
    default:
      return state;
  }
};
