

let count = 0;
const addOne = () => {
  count++;
  initTemplate();
  renderCounterApp();
};
const reset = () => {
  count = 0;
  initTemplate();
  renderCounterApp();
};
const minusOne = () => {
  count--;
  initTemplate();
  renderCounterApp();
};


let templateTwo;

const initTemplate = () => {
  templateTwo = 
    <div>
      <h1>Count: {count}</h1>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
      <button onClick={addOne}>+1</button>
    </div>
  ;
};

const renderCounterApp = () => {

  ReactDOM.render(templateTwo, appRoot); 
};

initTemplate();
renderCounterApp();