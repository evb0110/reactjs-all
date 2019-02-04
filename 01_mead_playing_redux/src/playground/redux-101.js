import { createStore } from 'redux';

const [INCREMENT, DECREMENT, RESET, SET] = ['INCREMENT', 'DECREMENT', 'RESET', 'SET'];

const store = createStore((state = { count: 0 }, action) => {
  const value = typeof action.value == 'number' ? action.value : 1;
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + value
      };
      case DECREMENT:
      return {
        count: state.count - value
      };
    case RESET:
      return {
        count: 0
      };
    case SET:
      return {
        count: value
      }
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: INCREMENT,
  value: 10
});

store.dispatch({
  type: INCREMENT
});

store.dispatch({
  type: 'abc'
});

store.dispatch({
  type: DECREMENT,
  value: 14
});

store.dispatch({
  type: DECREMENT
});

store.dispatch({
  type: RESET
});

store.dispatch({
  type: SET,
  value: 101
});

unsubscribe();
