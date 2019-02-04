import { createStore } from "redux";

const [INCREMENT, DECREMENT, RESET] = ["INCREMENT", "DECREMENT", "RESET"];

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + (action.value || 1)
      };
    case DECREMENT:
      return {
        count: state.count - (action.value || 1)
      };
    case RESET:
      return {
        count: 0
      };
    default:
      return state;
  }
});

console.log(store.getState());
store.dispatch({
  type: INCREMENT,
  value: 10
});

console.log(store.getState());
store.dispatch({
  type: INCREMENT
});

console.log(store.getState());
store.dispatch({
  type: DECREMENT,
  value: 4
});

console.log(store.getState());
store.dispatch({
  type: RESET
});
store.dispatch({
  type: "abc"
});

console.log(store.getState());
