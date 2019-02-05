import { createStore } from 'redux';

const [INCREMENT, DECREMENT, RESET, SET] = ['INCREMENT', 'DECREMENT', 'RESET', 'SET'];

const store = createStore((state = { count: 0 }, {type, value}) => {
  value = typeof value == 'number' ? value : 1;
  switch (type) {
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

const incrementCount = ({value = 1} = {}) => ({
  type: INCREMENT,
  value,
});

const decrementCount = ({value = 1} = {}) => ({
  type: DECREMENT,
  value,
});

const resetCount = (() => ({
  type: RESET,
}));

const setCount = (({value} = {}) => ({
  type: SET,
  value
}))

store.dispatch(incrementCount({
  type: INCREMENT,
  value: 10
}));


store.dispatch(incrementCount());

store.dispatch({
  type: 'abc'
});

store.dispatch(decrementCount({value: 14}));

store.dispatch(decrementCount({value: '100'}));

store.dispatch(resetCount());

store.dispatch(setCount({value: 101}));

unsubscribe();
