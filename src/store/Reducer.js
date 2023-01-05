const initialState = {
  message: "Hello Chathura!",
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "message change") {
    newState.message = "How are you?";
  }
  return newState;
};

export default reducer;
