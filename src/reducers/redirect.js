export const redirectReducer = (state = {}, action) => {
  switch (action.type) {
    case "redirect/login":
      return action.payload;
    default:
      return state;
  }
};
