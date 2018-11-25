console.log('App.js is running');

const app = {
  title: "Indecision app",
  subtitle: "My first react app",
  options: [
    // "first option", "2nd option"
  ],
};


const template = ( 
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Options present" : "No options"}</p>
    <ol>
      <li>first item</li>
      <li>second item</li>
    </ol>
  </div>
);

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

const appRoot = document.getElementById('app');

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