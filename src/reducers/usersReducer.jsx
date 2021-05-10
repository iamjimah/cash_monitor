const usersReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        userInfo: action.payload,
        isPending: false,
      };
    case "REGISTER_USER":
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};
export default usersReducer;
