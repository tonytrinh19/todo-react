const initialState = true;

export const loadingReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "loading":
      return payload.loading;
    default:
      return state;
  }
};
