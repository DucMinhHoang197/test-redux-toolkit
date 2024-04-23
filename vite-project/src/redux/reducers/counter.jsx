const initialState = { count: 0 };
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.num };
    case "DECREMENT":
      return { count: state.count - action.num };
    default:
      return state;
  }
};
export default counterReducer;
